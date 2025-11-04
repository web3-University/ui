import type { Address } from "viem";
import { parseUnits } from "viem";
import type { UseWaitForTransactionReceiptReturnType as ReceiptReturnType } from "wagmi";
import { COURSE_CONTRACT_ABI } from "../../contract";
import type { WriteReturnType } from "./contractFactory";
import { contractFactory } from "./contractFactory";
import type { UseContractReadReturn } from "./useContractRead";

const DEFAULT_COURSE_CONTRACT_ADDRESS: Address =
  "0xed6D8754fE9a6db6D268E9Fae4E75931c53Bf527";

interface UseCourseContractProps {
  // 合约地址，可选，默认使用预设地址
  address?: Address;
  // 代币精度，用于课程金额换算，默认18
  tokenDecimals?: number;
}

interface CourseOwnership {
  instructor: Address // 讲师地址
  price: bigint // 课程价格
  exists: boolean // 是否存在
}

interface PurchaseRecord {
  timestamp: bigint // 购买时间
  paidPrice: bigint // 实际支付价格
  purchased: boolean // 是否已购买
}

export function useCourseContract({
  address = DEFAULT_COURSE_CONTRACT_ADDRESS,
  tokenDecimals = 18,
}: UseCourseContractProps = {}): {
  /* 合约查询方法 */
  hasAccess: (
    student?: Address,
    courseId?: bigint,
  ) => UseContractReadReturn<boolean>;
  getCourse: (courseId?: bigint) => UseContractReadReturn<CourseOwnership>;
  getPurchaseRecord: (student?: Address, courseId?: bigint) => UseContractReadReturn<PurchaseRecord>;

  /* 合约写入方法 */
  registerCourse: (courseId: string, price: bigint) => Promise<WriteReturnType>;
  purchaseCourse: (courseId: string) => Promise<WriteReturnType>;
  updatePlatformAddress: (newAddress: Address) => Promise<WriteReturnType>;

  /* Receipt */
  registerCourseReceipt: ReceiptReturnType;
  purchaseCourseReceipt: ReceiptReturnType;
  updatePlatformAddressReceipt: ReceiptReturnType;
} {
  const factory = contractFactory(address, COURSE_CONTRACT_ABI);

  // ========== 工具函数 ==========

  /**
   * 解析价格
   * 将字符串形式的价格转换为 bigint（考虑代币精度）
   */
  const parsePrice = (price: string): bigint => {
    return parseUnits(price, tokenDecimals);
  };

  /* ========== 读取合约数据 ========== */

  /**
   * 检查用户是否有课程访问权限
   * @param studentAddress 学生地址
   * @param courseId 课程ID
   */
  const hasAccess = (student?: Address, courseId?: bigint) => {
    return factory.read<boolean>("hasAccess")(student, courseId);
  };

  /**
   * 获取课程信息
   * @param courseId 课程ID
   */
  const getCourse = (courseId?: bigint) => {
    return factory.read<CourseOwnership>("getCourse")(courseId);
  };

  const getPurchaseRecord = (student?: Address, courseId?: bigint): UseContractReadReturn<PurchaseRecord> => {
    return factory.read<PurchaseRecord>("getPurchaseRecord")(student, courseId)
  }

  /* ========== 写入合约数据 ========== */

  // 购买课程
  const purchaseCourseWriter = factory.write("purchaseCourse");

  /**
   * 购买课程
   * @param courseId 课程ID
   * @returns
   */
  const purchaseCourse = async (courseId: string) => {
    return await purchaseCourseWriter.send(courseId);
  }; // 保留

  // 注册课程
  const registerCourseWriter = factory.write("registerCourse");
  const registerCourse = async (courseId: string, price: bigint) => {
    return await registerCourseWriter.send(courseId, price);
  }; // 保留

  // 更新平台地址
  const updatePlatformAddressWriter = factory.write("updatePlatformAddress");
  /**
   * 更新平台地址（仅平台管理员）
   * @param newPlatformAddress 新平台地址
   */
  const updatePlatformAddress = async (newPlatformAddress: Address) => {
    return await updatePlatformAddressWriter.send(newPlatformAddress);
  };

  return {
    // ========== 读取方法 ==========
    hasAccess,
    getCourse,
    getPurchaseRecord,

    // ========== 写入方法 ==========
    purchaseCourse,
    registerCourse,
    updatePlatformAddress,

    // ========== Receipt ==========
    purchaseCourseReceipt: purchaseCourseWriter.receipt,
    registerCourseReceipt: registerCourseWriter.receipt,
    updatePlatformAddressReceipt: updatePlatformAddressWriter.receipt
  };
}
