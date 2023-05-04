import { ethers } from "ethers";
import chrysus from "./abis/Chrysus.json";
import ERC20 from "./abis/ERC20.json";
//import loan from "./abis/Loan.json"
import swap from "./abis/Swap.json";
import governance from "./abis/Governance.json";


const PROVIDER = "https://rpc.sepolia.org";
const LOAN = "0x8fA7d093C0eF185a7B4c19273239Fa25F78DA80f";
const CHRYSUS = "0x894F33A1D1F0a4167228E0bebb584dC3F2407Ab6";
const GOVERNANCE = "0xd1A242664720D1e0556b65D9DCCbAD8727976DDC";
const SWAP = "0xAd0353208Ea03736469bcA4d26593C24f4255cD2";
const provider = new ethers.providers.JsonRpcProvider(PROVIDER);
const chrysusContract = new ethers.Contract(
    CHRYSUS,
    chrysus.abi,
    provider 
);
/*const loanContract = new ethers.Contract(
    LOAN,
    loan.abi,
    loan,
    provider 
);*/
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

export default{
  getCollateralizationRatio,
  liqRatio,
  getUserBalance
}
