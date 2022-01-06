import { ChainId } from '@sushiswap/sdk';

// import iconFTM from 'assets/imgs/ftm.png';
import iconWFTM from 'assets/imgs/wftm.png';
import iconUSDT from 'assets/imgs/usdt.png';
import iconUSDC from 'assets/imgs/usdc.png';
import iconDAI from 'assets/imgs/dai.png';

// eslint-disable-next-line no-undef
const isMainnet = process.env.REACT_APP_ENV === 'MAINNET';

const Tokens = {
  [ChainId.MAINNET]: [
    // {
    //   address: '',
    //   name: 'Fantom',
    //   symbol: 'FTM',
    //   decimals: 18,
    //   icon: iconFTM,
    // },
    {
      address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      name: 'Wrapped Ether',
      symbol: 'WETH',
      decimals: 18,
      icon: iconWETH,
    },
    {
      address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
      name: 'Tether USD',
      symbol: 'fUSDT',
      decimals: 6,
      icon: iconUSDT,
    },
    {
      address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      name: 'USD Coin',
      symbol: 'USDC',
      decimals: 6,
      icon: iconUSDC,
    },
    {
      address: '0x6b175474e89094c44da98b954eedeac495271d0f',
      name: 'Dai Stablecoin',
      symbol: 'DAI',
      decimals: 18,
      icon: iconDAI,
    },
  ],
  [ChainId.ROPSTEN]: [
    // {
    //   address: '',
    //   name: 'Fantom',
    //   symbol: 'FTM',
    //   decimals: 18,
    //   icon: iconFTM,
    // },
    {
      address: '0xf70949bc9b52deffcda63b0d15608d601e3a7c49',
      name: 'Wrapped Ether',
      symbol: 'WETH',
      decimals: 18,
      icon: iconWETH,
    },
  ],
};

export default function useTokens() {
  const chain = isMainnet ? ChainId.MAINNET : ChainId.ROPSTEN;

  const tokens = Tokens[chain];

  const getTokenByAddress = addr => {
    const address =
      !addr ||
      addr === '0x0000000000000000000000000000000000000000' ||
      addr === 'ftm'
        ? ''
        : addr;
    return (tokens || []).find(
      tk => tk.address.toLowerCase() === address.toLowerCase()
    );
  };

  return { getTokenByAddress, tokens };
}
