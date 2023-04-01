import { ethers } from "ethers";
import chrysus from "./abis/Chrysus";
import loan from "./abis/MockLending";
import swap from "./abis/Swap";
import governance from "./abis/Governance";


const PROVIDER = "https://rpc.sepolia.org";
const LOAN = "0x8fA7d093C0eF185a7B4c19273239Fa25F78DA80f";
const CHRYSUS = "0xfd87Eba8B53683D03BB8881416Eb1a5bA417b41D";
const GOVERNANCE = "0xd1A242664720D1e0556b65D9DCCbAD8727976DDC";
const SWAP = "0xAd0353208Ea03736469bcA4d26593C24f4255cD2";
const provider = new ethers.providers.JsonRpcProvider(PROVIDER);
const chrysusContract = new ethers.Contract(
    CHRYSUS,
    chrysus,
    provider 
);
const loanContract = new ethers.Contract(
    LOAN,
    loan,
    provider 
);
const swapContract = new ethers.Contract(
    SWAP,
    swap,
    provider 
);
const governanceContract = new ethers.Contract(
    GOVERNANCE,
    governance,
    provider 
);

const getCollateralizationRatio = async () => {
  return await chrysusContract.getCollateralizationRatio();
};

const liqRatio = async () => {
  return await chrysusContract.liquidationRatio();
};

const getUserBalance = async (user) => {
    return await chrysusContract.balanceOf(user);
};

export default{
  getCollateralizationRatio,
  liqRatio,
  getUserBalance
}