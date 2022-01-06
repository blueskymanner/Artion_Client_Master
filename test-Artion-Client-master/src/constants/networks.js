import { ChainId } from '@sushiswap/sdk';

export const NETWORK_LABEL = {
  [ChainId.MAINNET]: 'Ethereum',
  [ChainId.RINKEBY]: 'Rinkeby',
  [ChainId.ROPSTEN]: 'Ropsten',
  [ChainId.GÖRLI]: 'Görli',
  [ChainId.KOVAN]: 'Kovan',
  [ChainId.FANTOM]: 'Fantom',
  [ChainId.FANTOM_TESTNET]: 'Fantom Testnet',
  [ChainId.MATIC]: 'Matic',
  [ChainId.MATIC_TESTNET]: 'Matic Testnet',
  [ChainId.XDAI]: 'xDai',
  [ChainId.BSC]: 'BSC',
  [ChainId.BSC_TESTNET]: 'BSC Testnet',
  [ChainId.MOONBASE]: 'Moonbase',
  [ChainId.AVALANCHE]: 'Avalanche',
  [ChainId.FUJI]: 'Fuji',
  [ChainId.HECO]: 'HECO',
  [ChainId.HECO_TESTNET]: 'HECO Testnet',
  [ChainId.HARMONY]: 'Harmony',
  [ChainId.HARMONY_TESTNET]: 'Harmony Testnet',
};

export const Contracts = {
  [ChainId.MAINNET]: {
    auction: '0x00000000000000000000000000000000000000',
    sales: '0x00000000000000000000000000000000000000',
    bundleSales: '0x00000000000000000000000000000000000000',
    factory: '0x00000000000000000000000000000000000000', //FantomNFTFactory
    privateFactory: '0x00000000000000000000000000000000000000', //FantomNFTFactoryPrivate
    artFactory: '0x00000000000000000000000000000000000000', //FantomArtFactory
    privateArtFactory: '0x00000000000000000000000000000000000000', //FantomArtFactoryPrivate
  },
  [ChainId.ROPSTEN]: {
    auction: '0xb171Ff2a6Ed3D23ee9cAE53D7e9426E5FEE9C5Cc',
    sales: '0xcb58C0385374dA4b2B95624D569d80e372406F5F',
    bundleSales: '0x2a67922E5f364Dc00E7D57Ab18495fE718eD3707',
    factory: '0x0eD5Fb2843e484583028D1188dDfE8D979B58E4B', //FantomNFTFactory
    privateFactory: '0x8a33B4B8d87387493FAC7a54C9B430bB868a7285', //FantomNFTFactoryPrivate
    artFactory: '0x7CBa47EFB9f0FF3739882FB84899Be925e4ADCd6', //FantomArtFactory
    privateArtFactory: '0x509b8B42e20addE5074Fb86b17C4738f9f669393', //FantomArtFactoryPrivate
  },
};
