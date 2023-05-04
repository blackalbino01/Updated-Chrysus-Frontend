import { ethers } from "ethers";
import chrysus from "./abis/Chrysus.json";
import ERC20 from "./abis/ERC20.json";
//import loan from "./abis/Loan.json"
import swap from "./abis/Swap.json";
import governance from "./abis/Governance.json";
import mockOracle from "./abis/MockOracle.json";
import { DAI } from "./constant";


const PROVIDER = "https://rpc.sepolia.org";
const LOAN = "0x8fA7d093C0eF185a7B4c19273239Fa25F78DA80f";
const CHRYSUS = "0x894F33A1D1F0a4167228E0bebb584dC3F2407Ab6";
const GOVERNANCE = "0xd1A242664720D1e0556b65D9DCCbAD8727976DDC";
const SWAP = "0xAd0353208Ea03736469bcA4d26593C24f4255cD2";
const oracleDAI = "0x14866185B1962B63C3Ea9E03Bc1da838bab34C19";
const oracleETH = "0x694AA1769357215DE4FAC081bf1f309aDC325306";
const oracleCHC = "0xd1b9f0a15AEB59a3fd542Fc6093037e7326A0914";
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

const getUserBalance = async (user, token) => {
    if(token == "CHC"){
        return await chrysusContract.balanceOf(user);
    }
    else if(token == "DAI"){
        const tokenContract = new ethers.Contract(DAI, ERC20.abi, provider);
        return await tokenContract.balanceOf(user);
    }
    else if(token == "ETH"){
        return await provider.getBalance(user);
    }
};

const getFeed = async (token) => {
    if(token == "DAI"){
        const oracle = new ethers.Contract(oracleDAI, mockOracle.abi, provider)
        return await oracle.latestRoundData();
    }
    else if(token == "ETH"){
        const oracle = new ethers.Contract(oracleETH, mockOracle.abi, provider)
        return await oracle.latestRoundData();
    }
    else if(token == "CHC"){
        const oracle = new ethers.Contract(oracleCHC, mockOracle.abi, provider)
        return await oracle.latestRoundData();
    }
};

export default{
  getCollateralizationRatio,
  liqRatio,
  getUserBalance,
  getFeed
}
