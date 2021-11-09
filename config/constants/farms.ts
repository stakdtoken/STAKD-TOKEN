import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'STKD',
    lpAddresses: {
      97: '',
      56: '0x1fBBE8d6d77D73AC70A58f05AC459B2F93547f78',
    },
    tokenSymbol: 'SYRUP',
    tokenAddresses: {
      97: '',
      56: '0x1fBBE8d6d77D73AC70A58f05AC459B2F93547f78',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

  {
    pid: 1,
    lpSymbol: 'STKD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xA7852b2dF4Bf4370b4dD0Eb65Ed40ceE796943cE',   // lp address token-bnb
    },
    tokenSymbol: 'STKD',
    tokenAddresses: {
      97: '',
      56: '0x1fBBE8d6d77D73AC70A58f05AC459B2F93547f78', // token address
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

]

export default farms
