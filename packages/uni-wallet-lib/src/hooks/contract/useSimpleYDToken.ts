import { useState, useMemo } from "react";
import type { Address } from "viem";
import { parseEther, parseUnits, formatUnits } from "viem";
import type { UseWaitForTransactionReceiptReturnType as ReceiptReturnType } from "wagmi";
import { useAccount, useEstimateGas } from "wagmi";
import { SIMPLE_YD_TOKEN_ABI } from "../../contract";
import type { WriteReturnType } from "./contractFactory";
import { contractFactory } from "./contractFactory";

interface UseSimpleYDTokenProps {
  address?: Address; // YD币合约地址 默认：0x94EB428CcBb4ab885029cAfA1258ac7Fdd724B34
  spenderAddress?: Address; // 支付者地址
  enabled?: boolean; // 是否启用
}


const DEFAULT_YD_CONTRACT_ADDRESS = "0x94EB428CcBb4ab885029cAfA1258ac7Fdd724B34";

export function useSimpleYDToken({
  address = DEFAULT_YD_CONTRACT_ADDRESS,
  spenderAddress,
  enabled = true,
}: UseSimpleYDTokenProps): {
  // 代币总供应量
  totalSupply: bigint;
  // 当前用户的代币余额
  balance: bigint;
  // 格式化的余额（字符串）
  formattedBalance: string;
  // 代币精度
  decimals: number;
  // 当前用户对指定地址的授权额度
  allowance: bigint;
  // 转账收据
  transferReceipt: ReceiptReturnType;
  // 授权数据
  approveReceipt: ReceiptReturnType;
  // 代理转账数据
  transferFromReceipt: ReceiptReturnType;
  // 兑换YD币数据
  exchangeETHForTokensReceipt: ReceiptReturnType;

  // 重新获取余额
  refetchBalance: () => void;
  // 重新获取授权额度
  refetchAllowance: () => void;
  // 转账
  transfer: (to: Address, amount: string) => Promise<WriteReturnType>;
  // 授权函数
  approve: (spender: Address, amount: string) => Promise<WriteReturnType>;
  // 代理转账函数（从其他地址转账
  transferFrom: (
    from: Address,
    to: Address,
    amount: string,
  ) => Promise<WriteReturnType>;
  // ETH兑换YD币
  exchangeETHForTokens: (ether: string) => Promise<WriteReturnType>;
  // 直接转账 ETH 时自动兑换
  receive: (ether: string) => Promise<WriteReturnType>;
} {
  const { address: userAddress } = useAccount();

  const [estGasTo, setEstGasTo] = useState<Address>();
  const [estGasValue, setEstGasValue] = useState<bigint>();
  const { data: gasEstimate, refetch: refetchEstimateGas } = useEstimateGas({
    account: userAddress,
    to: estGasTo,
    value: estGasValue,
    query: {
      enabled: false,
    },
  });

  /* ========== 辅助方法 ========== */
  /**
   * 解析金额
   * 将字符串形式的金额转换为 bigint（考虑代币精度）
   * @param amount - 字符串形式的金额，如 '100.5'
   * @returns bigint 类型的代币数量
   * @throws 如果代币精度未加载，抛出错误
   */
  const parseAmount = (amount: string) => {
    if (!decimals) throw new Error("Decimals not loaded");
    return parseUnits(amount, decimals as number);
  };

  const prepareRefetchEstimateGas = async (to?: Address, value?: bigint) => {
    setEstGasTo(to);
    setEstGasValue(value);

    // 等待 React 下一次渲染周期，确保 state 更新
    await new Promise((resolve) => setTimeout(resolve, 0));

    console.log(`🔢 请求参数: to->${to} / value->${value}`);
    // 然后调用 refetch
    await refetchEstimateGas();
    console.log("⛽️ Estimate Gas:", gasEstimate);

    // ✅ 立即清理
    setEstGasTo(undefined);
    setEstGasValue(undefined);
  };

  const factory = contractFactory(address, SIMPLE_YD_TOKEN_ABI);

  /* ========== 读取合约数据 ========== */

  // 读取代币精度
  const { data: decimals } = factory.read<number>("decimals")();

  // 读取代币总供应量
  const { data: totalSupply } = factory.read("totalSupply")();

  // 读取当前用户的代币余额
  const { data: balance, refetch: refetchBalance } = factory.read<bigint>(
    "balanceOf",
    enabled && !!userAddress,
  )(userAddress);

  // 读取当前用户对指定地址的授权额度
  const { data: allowance, refetch: refetchAllowance } = factory.read(
    "allowance",
  )(userAddress, spenderAddress);

  // 格式化代币
  const formattedBalance = useMemo(() => {
    if (balance && decimals) {
      const balanceString = formatUnits(balance, decimals);

      return `${Number(balanceString).toFixed(4)}`;
    }
    return "0.0000";
  }, [balance, decimals]);

  /* ========== 合约写入方法 ========== */

  // 转账
  const transferWriter = factory.write("transfer");
  /**
   * 转账函数
   * 将代币从当前用户转账到指定地址
   * @param to - 接收地址
   * @param amount - 转账金额（字符串形式，如 '100.5'）
   * @returns 交易的 Promise
   * @throws 如果转账功能不可用，抛出错误
   */
  const transfer = async (to: Address, amount: string) => {
    const parsedAmount = parseAmount(amount);

    await prepareRefetchEstimateGas(to, parsedAmount);

    return transferWriter.send(to, parsedAmount, {
      gas: gasEstimate,
    });
  };

  // 代理转账函数的写入 Hook
  const transferFromWriter = factory.write("transferFrom");
  /**
   * 代理转账函数
   * 从指定地址转账到另一个地址（需要提前授权）
   * @param from - 转出地址
   * @param to - 接收地址
   * @param amount - 转账金额（字符串形式，如 '50'）
   * @returns 交易的 Promise
   * @throws 如果代理转账功能不可用，抛出错误
   */
  const transferFrom = async (from: Address, to: Address, amount: string) => {
    const parsedAmount = parseAmount(amount);

    await prepareRefetchEstimateGas(to, parsedAmount);

    return transferFromWriter.send(from, to, parsedAmount);
  };

  // 授权
  const approveWriter = factory.write("approve");
  /**
   * 授权函数
   * 授权指定地址可以支配的代币数量
   * @param spender - 被授权地址
   * @param amount - 授权金额（字符串形式，如 '1000'）
   * @returns 交易的 Promise
   * @throws 如果授权功能不可用，抛出错误
   */
  const approve = async (spender: Address, amount: string) => {
    const parsedAmount = parseAmount(amount);
    // await prepareRefetchEstimateGas(DEFAULT_YD_CONTRACT_ADDRESS, undefined);
    // , {
    //       gas: gasEstimate,
    //     }
    return approveWriter.send(spender, parsedAmount);
  };

  // 兑换YD币
  const exchangeETHForTokensWriter = factory.write("exchangeETHForTokens");
  /**
   * 兑换YD币 (ETH -> YD)
   * @param ether 兑换的ETH金额
   * @returns
   */
  const exchangeETHForTokens = async (ether: string) => {
    await prepareRefetchEstimateGas(DEFAULT_YD_CONTRACT_ADDRESS, parseEther(ether));

    return exchangeETHForTokensWriter.send({
      value: parseEther(ether),
      gas: gasEstimate,
    });
  };

  /**
   * 直接转账 ETH 时自动兑换 (ETH -> YD)
   * @param ether 兑换的ETH金额
   * @returns
   */
  const receive = async (ether: string) => {
    await prepareRefetchEstimateGas(DEFAULT_YD_CONTRACT_ADDRESS, parseEther(ether));

    return exchangeETHForTokensWriter.send({
      value: parseEther(ether),
      gas: gasEstimate,
    });
  }

  return {
    /* 代币基本信息 */
    totalSupply: totalSupply as bigint,
    balance: balance as bigint,
    formattedBalance,
    decimals: decimals as number,
    allowance: allowance as bigint,
    transferReceipt: transferWriter.receipt,
    approveReceipt: approveWriter.receipt,
    transferFromReceipt: transferFromWriter.receipt,
    exchangeETHForTokensReceipt: exchangeETHForTokensWriter.receipt,

    /* 方法 */
    refetchBalance,
    refetchAllowance,

    transfer,
    approve,
    transferFrom,
    exchangeETHForTokens,
    receive
  };
}
