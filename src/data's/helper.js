import { ethers } from 'ethers'
import axios from 'axios';
const DCL_PHASE1_CONTRACT_ADDRESS = "0xEDe30DF507576e461cc2cB3AdA75bf9B22dc778d";
// const DCL_PHASE2_CONTRACT_ADDRESS = "0x99D6C0d1A656a1ee1F345AE6482D0aFD76daF8a5";
const DCL_PHASE2_CONTRACT_ADDRESS = "0xdeea9f60923DCc917c49eedcDc8209c3D9EC1B02";
const NETWORK = process.env.NETWORK;

const dclPhase1Contract = require("./MetaDrip_1.json");
// const dclPhase2Contract = require("./MetaDrip_2.json");
const dclPhase2Contract = require("./metadrip_phase2_test.json");

export const getContractInstance = async (contractId) => {
  try {

    const contract = contractId == 1 ? dclPhase1Contract : dclPhase2Contract;
    const CONTRACT_ADDRESS =
      contractId == 1 ? DCL_PHASE1_CONTRACT_ADDRESS : DCL_PHASE2_CONTRACT_ADDRESS;

    
    // signer - you
  const ethereum = window.ethereum;
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });

    const provider = new ethers.providers.Web3Provider(ethereum)
    const walletAddress = accounts[0]    // first account in MetaMask
    const signer = provider.getSigner(walletAddress)



    // contract instance
    const dclContract = new ethers.Contract(CONTRACT_ADDRESS, contract, signer);

    return dclContract;
  } catch (error) {
    console.error(error);
    // throw new CustomError.BadRequestError(error);
  }
};

export const getGasFees = async () => {
  try {
    const { data } = await axios({
      method: "get",
      url: "https://gasstation-mainnet.matic.network/v2",
    });

    const maxFeePerGas = ethers.utils.parseUnits(
      Math.ceil(data.fast.maxFee) + "",
      "gwei"
    );
    const maxPriorityFeePerGas = ethers.utils.parseUnits(
      Math.ceil(data.fast.maxPriorityFee) + "",
      "gwei"
    );

    return { maxFeePerGas, maxPriorityFeePerGas };
  } catch (error) {
    console.error(error);
  }
};