import { useCallback } from 'react';
import { ethers } from 'ethers';
import { useWeb3React } from '@web3-react/core';

// eslint-disable-next-line no-undef
const isMainnet = process.env.REACT_APP_ENV === 'MAINNET';

export default () => {
  const { chainId } = useWeb3React();

  const getContract = useCallback(
    async (address, abi) => {
      if (chainId) {
        await window.ethereum.enable();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        return new ethers.Contract(address, abi, signer);
      } else {
        const provider = new ethers.providers.JsonRpcProvider(
          isMainnet
            ? 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'
            : 'https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
          isMainnet ? 1 : 3
        );

        return new ethers.Contract(address, abi, provider);
      }
    },
    [chainId]
  );

  return { getContract };
};
