import { ChainId } from '@sushiswap/sdk';
import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';

import { NetworkConnector } from './NetworkConnector';

import ARTION_LOGO_URL from '../assets/svgs/logo_blue.svg';

// eslint-disable-next-line no-undef
const isMainnet = process.env.REACT_APP_ENV === 'MAINNET';

const RPC = isMainnet
  ? {
      [ChainId.MAINNET]: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
    }
  : {
      [ChainId.ROPSTEN]: 'https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
    };

export const network = new NetworkConnector({
  defaultChainId: ChainId.MAINNET,
  urls: RPC,
});

export const injected = new InjectedConnector({
  supportedChainIds: isMainnet
    ? [
        1, // ethereum
      ]
    : [
        3, // ropsten testnet
      ],
});

export const walletlink = new WalletLinkConnector({
  url: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
  appName: 'Artion',
  appLogoUrl: ARTION_LOGO_URL,
});
