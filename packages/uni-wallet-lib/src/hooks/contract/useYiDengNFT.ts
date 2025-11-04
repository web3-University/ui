import type { Address, Hash } from "viem";
import { YD_NFT_ABI } from "../../contract";
import type { WriteReturnType } from "./contractFactory";
import { contractFactory } from "./contractFactory";
import { UseContractReadReturn } from "./useContractRead";

interface UseYiDengNFT {
  address: Address
}

const DEFAULT_YD_NFT_CONTRACT_ADDRESS = "0x"

export function useYiDengNFT({
  address = DEFAULT_YD_NFT_CONTRACT_ADDRESS
}: UseYiDengNFT): {
  tokenURI: (tokenId: bigint) => UseContractReadReturn<string>
  supportsInterface: (interfaceId: Hash) => UseContractReadReturn<boolean>
  safeMint: (to: Address, uri: string) => Promise<WriteReturnType>
} {

  const factory = contractFactory(address, YD_NFT_ABI)

  /* ========== 读取合约数据 ========== */
  const tokenURI = (tokenId: bigint): UseContractReadReturn<string> => {
    return factory.read<string>("tokenURI")(tokenId)
  }

  const supportsInterface = (interfaceId: Hash): UseContractReadReturn<boolean> => {
    return factory.read<boolean>("supportsInterface")(interfaceId)
  }
  
  /* ========== 写入合约数据 ========== */
  const safeMintWriter = factory.write("safeMint")
  const safeMint = async (to: Address, uri: string) => {
    return await safeMintWriter.send(to, uri)
  }

  return {
    tokenURI,
    supportsInterface,
    safeMint
  }
}