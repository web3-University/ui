import type { Address } from "viem";
import type { UseWaitForTransactionReceiptReturnType as ReceiptReturnType } from "wagmi";
import { YD_DAO_ABI } from "../../contract";
import type { WriteReturnType } from "./contractFactory";
import { contractFactory } from "./contractFactory";
import { UseContractReadReturn } from "./useContractRead";

const DEFAULT_YD_DAO_CONTRACT_ADDRESS = "0x" // TODO: Set default contract address

interface UseDaoProps {
  address: Address
}

export interface Proposal {
  id: string,
  timestamp: bigint,
  votesFor: bigint,
  votesAgainst: bigint,
  executed: boolean
}

export function useDAO({
  address = DEFAULT_YD_DAO_CONTRACT_ADDRESS
}: UseDaoProps): {
  /* 合约查询方法 */
  getProposal: (proposalId: string) => UseContractReadReturn<Proposal | undefined>
  hasVoted: (proposalId: string, voter: Address) => UseContractReadReturn<boolean | undefined>
  getProposalVoters: (proposalId: string) => UseContractReadReturn<Address[] | undefined>
  getAllProposalIds: () => UseContractReadReturn<string[] | undefined>
  getProposalCount: () => UseContractReadReturn<bigint | undefined>
  
  /* 合约写入方法 */
  createProposal: (proposalId: string) => Promise<WriteReturnType>
  vote: (proposalId: string, support: boolean) => Promise<WriteReturnType>
  executeProposalAndDistributeRewards: (proposalId: string, rewardAmount: bigint) => Promise<WriteReturnType>
  setStakeAmount: (stakeAmount: bigint) => Promise<WriteReturnType>

  createProposalReceipt: ReceiptReturnType
  voteReceipt: ReceiptReturnType
  executeProposalAndDistributeRewardsReceipt: ReceiptReturnType
} {

  const factory = contractFactory(address, YD_DAO_ABI)

  /* ========== 读取合约数据 ========== */

  /**
   * @dev 获取提案的基本信息
   * @param _proposalId 提案ID
   * @return id 提案ID
   * @return timestamp 提案创建时间
   * @return votesFor 赞成票数
   * @return votesAgainst 反对票数
   * @return executed 是否已执行
   */
  const getProposal = (proposalId: string): UseContractReadReturn<Proposal | undefined> => {
    const result = factory.read<[string, bigint, bigint, bigint, boolean] | undefined>('getProposal')(proposalId)
    if (result.data) {
      const [id, timestamp, votesFor, votesAgainst, executed] = result.data;
      const proposal: Proposal = {
        id,
        timestamp,
        votesFor,
        votesAgainst,
        executed
      };
      return {
        ...result,
        data: proposal,
      }
    }
    return {
      ...result,
      data: undefined
    }
  }

  /**
   * @dev 检查指定地址是否已对某提案投票
   * @param _proposalId 提案ID
   * @param _voter 要查询的地址
   * @return 如果已投票返回true，否则返回false
   */
  const hasVoted = (proposalId: string, voter: Address): UseContractReadReturn<boolean | undefined> => {
    return factory.read<boolean | undefined>('hasVoted')(proposalId, voter)
  }

  /**
   * @dev 获取某提案的所有投票者地址列表
   * @param _proposalId 提案ID
   * @return 投票者地址数组
   */
  const getProposalVoters = (proposalId: string): UseContractReadReturn<Address[] | undefined> => {
    return factory.read<Address[] | undefined>('getProposalVoters')(proposalId)

  }

  /**
   * @dev 获取所有提案ID列表
   * @return 提案ID数组
   */
  const getAllProposalIds = (): UseContractReadReturn<string[] | undefined> => {
    return factory.read<string[] | undefined>("getAllProposalIds")()
  }

  /**
   * @dev 获取提案总数
   * @return 提案总数
   */
  const getProposalCount = (): UseContractReadReturn<bigint | undefined> => {
    return factory.read<bigint | undefined>("getProposalCount")()
  }

  /* ========== 写入合约数据 ========== */

  const createProposalWriter = factory.write("createProposal")
  /**
   * @dev 创建新提案
   * @notice 创建提案需要质押指定数量的YD代币到合约
   * @param _proposalId 提案的唯一标识符（字符串）
   */
  const createProposal = async (proposalId: string): Promise<WriteReturnType> => {
    return await createProposalWriter.send(proposalId)
  }

  const voteWriter = factory.write("vote")
   /**
   * @dev 对提案进行投票
   * @notice 只有持有YD代币的用户才能投票，每个账户只有1票
   * @param _proposalId 要投票的提案ID
   * @param _support true表示赞成，false表示反对
   */
  const vote = async (proposalId: string, support: boolean): Promise<WriteReturnType> => {
    return await voteWriter.send(proposalId, support)
  }

  const executeProposalAndDistributeRewardsWriter = factory.write("executeProposalAndDistributeRewards")
  /**
   * @dev 执行提案并自动分发奖励给胜诉方，同时退还质押给提案创建者
   * @notice 只有合约拥有者可以调用此函数
   * @param _proposalId 要执行的提案ID
   * @param _rewardAmount 每个胜诉方投票者获得的奖励金额
   */
  const executeProposalAndDistributeRewards = async (proposalId: string, rewardAmount: bigint): Promise<WriteReturnType> => {
    return await executeProposalAndDistributeRewardsWriter.send(proposalId, rewardAmount)
  }

   /**
   * @dev 设置创建提案所需的质押金额
   * @notice 只有合约拥有者可以调用
   * @param _stakeAmount 新的质押金额
   */
  const setStakeAmountWriter = factory.write("setStakeAmountWriter")
  const setStakeAmount = async (stakeAmount: bigint) => {
    return await setStakeAmountWriter.send(stakeAmount)
  }

  return {
    getProposal,
    hasVoted,
    getProposalVoters,
    getAllProposalIds,
    getProposalCount,

    createProposal,
    vote,
    executeProposalAndDistributeRewards,
    setStakeAmount,

    createProposalReceipt: createProposalWriter.receipt,
    voteReceipt: voteWriter.receipt,
    executeProposalAndDistributeRewardsReceipt: executeProposalAndDistributeRewardsWriter.receipt
  }
}