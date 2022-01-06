import { ChainId } from '@sushiswap/sdk';

import { WETH_ABI } from './abi';
import { calculateGasMargin, getHigherGWEI } from 'utils';
import useContract from 'hooks/useContract';
import { ethers } from 'ethers';

const WETH_ADDRESS = {
  [ChainId.MAINNET]: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
  [ChainId.ROPSTEN]: '0xf70949bc9b52deffcda63b0d15608d601e3a7c49',
};

// eslint-disable-next-line no-undef
const isMainnet = process.env.REACT_APP_ENV === 'MAINNET';
const CHAIN = isMainnet ? ChainId.MAINNET : ChainId.ROPSTEN;
export const useWFTMContract = () => {
  const { getContract } = useContract();

  const wethAddress = WETH_ADDRESS[CHAIN];

  const getWFTMContract = async () => await getContract(wethAddress, WETH_ABI);

  const getWFTMBalance = async address => {
    const contract = await getWFTMContract();
    return await contract.balanceOf(address);
  };

  const wrapETH = async (value, from) => {
    const contract = await getWFTMContract();

    const options = {
      value,
      from,
      gasPrice: getHigherGWEI(),
    };

    const gasEstimate = await contract.estimateGas.deposit(options);
    options.gasLimit = calculateGasMargin(gasEstimate);

    return await contract.deposit(options);
  };

  const unwrapETH = async value => {
    const contract = await getWFTMContract();

    const options = {
      gasPrice: getHigherGWEI(),
    };

    return await contract.withdraw(value, options);
  };

  const getAllowance = async (owner, spender) => {
    const contract = await getWFTMContract();
    return await contract.allowance(owner, spender);
  };

  const approve = async (address, value) => {
    const contract = await getWFTMContract();
    const tx = await contract.approve(
      address,
      ethers.constants.MaxUint256 || value
    );
    await tx.wait();
  };

  return {
    wethAddress,
    getWFTMBalance,
    wrapETH,
    unwrapETH,
    getAllowance,
    approve,
  };
};
