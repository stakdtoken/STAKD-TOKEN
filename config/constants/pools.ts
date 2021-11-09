import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'STKD',
    tokenAddress: '0x1fBBE8d6d77D73AC70A58f05AC459B2F93547f78',   // token address
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x1fBBE8d6d77D73AC70A58f05AC459B2F93547f78',  // token address
    contractAddress: {
      97: '',
      56: '0xD53383b73c491F38f33f80D2c91618Ab26557454',  /// masterchef address
    },
    poolCategory: PoolCategory.CORE,
    projectLink: '/',
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
 
]

export default pools
