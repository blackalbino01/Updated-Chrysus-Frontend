import { ethers } from "ethers";
// <<<<<<< HEAD
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

// const provider = new ethers.providers.JsonRpcProvider(PROVIDER);
// const chrysusContract = new ethers.Contract(
//     CHRYSUS,
//     chrysus.abi,)
// =======
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
// >>>>>>> 1ffb7d03ed36657edbc36dbef547d13c5b9f94b3
    provider 
);
const loanContract = new ethers.Contract(
    LOAN,
// <<<<<<< HEAD
    loan.abi,
// =======
    loan,
// >>>>>>> 1ffb7d03ed36657edbc36dbef547d13c5b9f94b3
    provider 
);
const swapContract = new ethers.Contract(
    SWAP,
    swap.abi,
    swap,
// >>>>>>> 1ffb7d03ed36657edbc36dbef547d13c5b9f94b3
    provider 
);
const governanceContract = new ethers.Contract(
    GOVERNANCE,
// <<<<<<< HEAD
    governance.abi,
// =======
    governance,
// >>>>>>> 1ffb7d03ed36657edbc36dbef547d13c5b9f94b3
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
// <<<<<<< HEAD
};
// =======
// };

export default{
  getCollateralizationRatio,
  liqRatio,
  getUserBalance
}
// >>>>>>> 1ffb7d03ed36657edbc36dbef547d13c5b9f94b3
