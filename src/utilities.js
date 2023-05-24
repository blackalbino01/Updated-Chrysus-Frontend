import { ethers } from "ethers";
import chrysus from "./abis/Chrysus.json";
import ERC20 from "./abis/ERC20.json";
import loan from "./abis/MockLending.json";
import swap from "./abis/Swap.json";
import governance from "./abis/Governance.json";
import mockOracle from "./abis/MockOracle.json";
import { DAI, ETH } from "./constant";


const PROVIDER = "https://rpc.sepolia.org";
const LOAN = "0x5b3601c9b113bd4b9e51E6E5e2477c498dFf6e7D";
const CHRYSUS = "0xc092e6FBae748162B23584cbAc4F03437596B760";
const GOVERNANCE = "0x968976D1a1f1E45e290Ad8E30E10Eec3c7e6A6f5";
const SWAP = "0xAd0353208Ea03736469bcA4d26593C24f4255cD2";
const oracleDAI = "0x14866185B1962B63C3Ea9E03Bc1da838bab34C19";
const oracleETH = "0x694AA1769357215DE4FAC081bf1f309aDC325306";
const oracleCHC = "0x844313B43f751adfaA749dc2005BbeE3F0C8F068";
const oracleXAU = "0xC5981F461d74c46eB4b0CF3f4Ec79f025573B0Ea";
const stake = "0xEcbA3b5d9aF813c72C45Fc2fCf271024Dd882A2e";
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

const getCDPCount = async () => {
    return await chrysusContract.getCdpCounter();
};

const liqRatio = async () => {
  return await chrysusContract.liquidationRatio();
};

const interestRate = async () => {
    return await loanContract.calculateInterestRate();
};

const utilizationRate = async () => {
    return await loanContract.calculateUtilizationRate();
};

const volume = async () => {
    return await loanContract.getVolume();
};

const collateralAmount = async (_amount, collateral) => {
    const amount = collateral == "ETH" ?  await loanContract.calculateCollateralAmount(_amount, ETH)
    : await loanContract.calculateCollateralAmount(_amount, DAI);
    return amount;
};

const generate = async (amount, token) => {
    const oracleD = new ethers.Contract(oracleDAI, mockOracle.abi, provider)
    const D = await oracleD.latestRoundData();
    const oracleE = new ethers.Contract(oracleETH, mockOracle.abi, provider)
    const E = await oracleE.latestRoundData();
    const oracleC = new ethers.Contract(oracleCHC, mockOracle.abi, provider)
    const C = await oracleC.latestRoundData();
    const oracleX = new ethers.Contract(oracleXAU, mockOracle.abi, provider)
    const X = await oracleX.latestRoundData();

    const ratio = Number(C[1]) / Number(X[1]);
    const collateral = token == "DAI" ? Number(D[1]) : Number(E[1]);
    const min = token == "DAI" ? 267 : 120;
    let mint = (amount * collateral) / Number(C[1]);
    /*console.log(
        {"D":Number(D[1]), 
        "E":Number(E[1]),
        "C": Number(C[1]),
        "X": Number(X[1]),
        "ratio":ratio,
        "collateral": collateral,
        "min": min,
        "mint" :mint 
    }
    )*/
    return (mint * 10000) / (ratio * min);
}

const getLendPosition = async (user, collateral) => {
    if(collateral == "DAI"){
        return await loanContract.getUserPositions(user, DAI);
    }
    else if(collateral == "ETH"){
        return await loanContract.getUserPositions(user, ETH);
    }
}


const getMintPosition = async (user, collateral) => {
    if(collateral == "DAI"){
        return await chrysusContract.getUserPositions(user, DAI);
    }
    else if(collateral == "ETH"){
        return await chrysusContract.getUserPositions(user, ETH);
    }
}

const getMintPositions = async () =>{
    const positions = await chrysusContract.getPositions();
    let arr = [];
    let collateral = ["ETH", "DAI"];
    
    for (let i = 0; i < positions.length; i++) {
        for (let j = 0; j < 2; j++) {
            const c = await getMintPosition(positions[i],collateral[j]);
            if(Number(c.minted) > 0){
                arr.push(
                    {
                        "minted": c.minted,
                        "deposited": c.deposited,
                        "col": collateral[j],
                        "user": positions[i],
                    }
                );
            }
        }
    }

    return arr;
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

const toFixedNoRounding = function (number,n) {
    const factor = Math.pow(10,n);
    return Math.floor(number * factor) / factor;
}

export default{
  getCollateralizationRatio,
  liqRatio,
  getUserBalance,
  getFeed,
  getCDPCount,
  getMintPosition,
  getMintPositions,
  getLendPosition,
  collateralAmount,
  volume,
  utilizationRate,
  interestRate,
  toFixedNoRounding,
  generate
}
