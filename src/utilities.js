import { ethers } from "ethers";
import chrysus from "./abis/Chrysus.json";
import ERC20 from "./abis/ERC20.json";
//import loan from "./abis/Loan.json"
import swap from "./abis/Swap.json";
import governance from "./abis/Governance.json";
import mockOracle from "./abis/MockOracle.json";
import { DAI, ETH } from "./constant";


const PROVIDER = "https://rpc.sepolia.org";
const LOAN = "0xf61460d65dce931E98E2e9DD0Eded544f7cB558B";
const CHRYSUS = "0x614715975D744621fE1c6B5EB4c8859093C094aF";
const GOVERNANCE = "0x9A4DCbe82B28e325179eABaAd755743FC9c4fA24";
const SWAP = "0xAd0353208Ea03736469bcA4d26593C24f4255cD2";
const oracleDAI = "0x14866185B1962B63C3Ea9E03Bc1da838bab34C19";
const oracleETH = "0x694AA1769357215DE4FAC081bf1f309aDC325306";
const oracleCHC = "0xC0F78BE665B71c48b01e42b37961D73cb9221A8f";
const stake = "0x041783AbA9E40D2E0D48d2b71dCafdacB12c3E6a";
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

const getCDPCount = async () => {
    return await chrysusContract.getCdpCounter();
};

const liqRatio = async () => {
  return await chrysusContract.liquidationRatio();
};

const getMintPosition = async (user, collateral) => {
    if(collateral == "DAI"){
        return await chrysusContract.getUserPositions(user, DAI);
    }
    else if(collateral == "ETH"){
        return await chrysusContract.getUserPositions(user, ETH);
    }
}

const getMintPositions = async () =>{
    return chrysusContract.getPositions();
}

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
  getFeed,
  getCDPCount,
  getMintPosition,
  getMintPositions
}
