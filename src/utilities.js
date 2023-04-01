import { ethers } from "ethers";
import {
  PROVIDER,
  LOAN,
  CHRYSUS,
  SWAP,
  GOVERNANCE
} from "./constant";
import chrysus from "./abis/Chrysus.json";
import loan from "./abis/Loan.json"
import swap from "./abis/Swap.json"
import governance from "./abis/Governance.json"

const provider = new ethers.providers.JsonRpcProvider(PROVIDER);
const chrysusContract = new ethers.Contract(
    CHRYSUS,
    chrysus.abi,
    provider 
);
const loanContract = new ethers.Contract(
    LOAN,
    loan.abi,
    provider 
);
const swapContract = new ethers.Contract(
    SWAP,
    swap.abi,
    provider 
);
const governanceContract = new ethers.Contract(
    GOVERNANCE,
    governance.abi,
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