import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
  BSC_MAINNET = 56,
  BSC_TESTNET = 97,
  FTM_MAINNET = 250
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

type ChainAddress = {
  [chainId in ChainId]: string
}
export const FACTORY_ADDRESS: ChainAddress = {
  [ChainId.MAINNET]: "0x4668E7DBFf4E8CF6390Dd5958552584b078483BB",
  [ChainId.ROPSTEN]: "0x0000000000000000000000000000000000000000",
  [ChainId.RINKEBY]: "",
  [ChainId.GÖRLI]: "",
  [ChainId.KOVAN]: "",
  [ChainId.BSC_MAINNET]: "0xfA18e38f40aFaacBc4a1F6e9f4D9a88A2515c41b",
  [ChainId.BSC_TESTNET]: "0x7CcDa45f48cbF94e95CC0F6f9dAB96c83B3B6051",
  [ChainId.FTM_MAINNET]: "0x89194ac89D0E51b5B51128D5Cf2B7BdC11E21a59"
}

export const INIT_CODE_HASH: ChainAddress = {
  [ChainId.MAINNET]: "0x5d71a6f54c5feefe12fe0d654def727458e09275c14992a712539682d04dfc12",
  [ChainId.ROPSTEN]: '0x68b7e80d0eb22c1f96aa07a82c715230fcf4ad0c4cac130de61a687fed799c19',
  [ChainId.RINKEBY]: "0x68b7e80d0eb22c1f96aa07a82c715230fcf4ad0c4cac130de61a687fed799c19",
  [ChainId.GÖRLI]: "0x68b7e80d0eb22c1f96aa07a82c715230fcf4ad0c4cac130de61a687fed799c19",
  [ChainId.KOVAN]: "0x68b7e80d0eb22c1f96aa07a82c715230fcf4ad0c4cac130de61a687fed799c19",
  [ChainId.BSC_MAINNET]: "0x68b7e80d0eb22c1f96aa07a82c715230fcf4ad0c4cac130de61a687fed799c19",
  [ChainId.BSC_TESTNET]: '0x68b7e80d0eb22c1f96aa07a82c715230fcf4ad0c4cac130de61a687fed799c19',
  [ChainId.FTM_MAINNET]: "0x68b7e80d0eb22c1f96aa07a82c715230fcf4ad0c4cac130de61a687fed799c19"
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _9950 = JSBI.BigInt(9950)
export const _10000 = JSBI.BigInt(10000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
