import Web3 from 'web3';
import { CHRYSUS, DAI } from '../constant';
import CHRYSUS_ABI  from '../abis/Chrysus.json';
import ERC20  from '../abis/ERC20.json';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { Web3Provider } from '@ethersproject/providers';
// import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
// import WalletConnectProvider from '@walletconnect/web3-provider';
import WalletConnectProvider from '@walletconnect/web3-provider/dist/umd/index.min.js';
// import WalletConnectProvider from "@walletconnect/web3-provider";
// import QRCodeModal from '@walletconnect/qrcode-modal/dist/umd/index.min.js';

export const initialState = {
    status: null,
    web3: null,
    socketContract: null,
    accounts:  [],
    DAIContract: null,
    contract:null,
    balance: [],
    Provider: null,
    web3loadingerror: null,
}



// const injectedConnector = new InjectedConnector({ supportedChainIds: [1, 5] });

// const walletConnectProvider = new WalletConnectProvider({

//     rpc: {
//         5: "https://goerli.infura.io/v3/b0b0d100567e4e59bb2bab1a2c353381",
//     },
//     chainId: 5,

// });

export const loadBlockchain = createAsyncThunk( "loadBlockchain", async (_, thunkAPI) => {
    try {
        // if(Web3.givenProvider && Web3.givenProvider.chainId ==="0x3"){
        if (Web3.givenProvider !== 'undefined') {
            const Provider = Web3.givenProvider;
            await Web3.givenProvider.enable();
            const web3 = new Web3(Web3.givenProvider);
            console.log('web3', web3)
            const contract = new web3.eth.Contract(CHRYSUS_ABI.abi, CHRYSUS);
            console.log("contract",contract )
            const accounts = await web3.eth.getAccounts();
            localStorage.setItem("accounts", accounts)
            console.log(`Wallet address ${accounts} stored on local storage.`);
            // const accountss = localStorage.getItem("accounts")
            const balance = await web3.eth.getBalance(accounts[0]);
            const DAIContract = new web3.eth.Contract(ERC20.abi, DAI);
            //web3 Socket
            // const web3Socket = new Web3(new Web3.providers.WebsocketProvider(
            //     `wss://goerli.infura.io/ws/v3/b0b0d100567e4e59bb2bab1a2c353381`
            // ))

            // const socketContract = new web3Socket.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS)
            return {
                web3,
                balance,
                accounts,
                Provider,
                contract,
                DAIContract,
                // socketContract,
            }
        }
        else {
            return {
                web3loadingerror: 'errorloading'

            }

        }

    } catch (error) {
        console.log('error', error)

    }
});




// export const loadBlockchain = createAsyncThunk( "loadBlockchain", async (_, thunkAPI) => {
//     try {
//         const provider =new InjectedConnector({ supportedChainIds: [1, 5] })
//         if (provider) {
//             const Provider = provider;
//             await provider.enable();
//             const web3 = new Web3(provider);
//             console.log('web3', web3)
//             const accounts = await web3.eth.getAccounts();
//             const balance = await web3.eth.getBalance(accounts[0]);
//             //web3 Socket
//             // const web3Socket = new Web3(new Web3.providers.WebsocketProvider(
//             //     `wss://goerli.infura.io/ws/v3/b0b0d100567e4e59bb2bab1a2c353381`
//             // ))

//             // const socketContract = new web3Socket.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS)
//             return {
//                 web3,
//                 accounts,
//                 balance,
//                 Provider,
//                 // socketContract,
//             }
//         }
//         else {
//             return {
//                 web3loadingerror: 'errorloading'

//             }

//         }

//     } catch (error) {
//         console.log('error', error)

//     }
// });



export const loadWalletConnect = createAsyncThunk( "loadWalletConnect", async (_, thunkAPI) => {
    try {
        const provider = new WalletConnectProvider({
            rpc: {
              5: "https://goerli.infura.io/v3/b0b0d100567e4e59bb2bab1a2c353381",
            },
            chainId: 5,
          });
        if (provider) {
            const Provider = provider;
            await provider.enable();
            const web3 = new Web3(provider);
            console.log('web3', web3)
            const accounts = await web3.eth.getAccounts();
            localStorage.setItem("accounts", accounts)
            // console.log(`Wallet address ${accounts} stored on local storage.`);
            const balance = await web3.eth.getBalance(accounts[0]);
            //web3 Socket
            // const web3Socket = new Web3(new Web3.providers.WebsocketProvider(
            //     `wss://goerli.infura.io/ws/v3/b0b0d100567e4e59bb2bab1a2c353381`
            // ))

            // const socketContract = new web3Socket.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS)
            return {
                web3,
                accounts,
                balance,
                Provider,
                // socketContract,
            }
        }
        else {
            return {
                web3loadingerror: 'errorloading'

            }

        }

    } catch (error) {
        console.log('error', error)

    }
});


// export const loadContracts = createAsyncThunk(
//     "loadContracts",
//     async (id) => {
//       try {
//         const response = await axios.get(`${url}/products/find/${id}`,
//           setHeaders()
//         );
//         const data = response.data;
//         if (Web3.givenProvider && data) {
//             await Web3.givenProvider.enable();
//             const web3 = new Web3(Web3.givenProvider);
//             console.log('web3', web3)
//             const propContracts = new web3.eth.Contract(CONTRACT_ABIS, data.uid);

//         return {
//             propContracts,
//         };
//     }
//       } catch (error) {
//         console.log(error.response.data);
//         console.log(error.propContracts);
//         toast.error(error.response?.data, {
//           position: "bottom-left",
//         });
//       }
//     }
//   );


export const updatAccount = createAsyncThunk("updatAccount", async (data, thunkAPI) => {
    try {
        let accounts = data
        localStorage.setItem("accounts", data)
        return {
            accounts,
        }
    } catch (error) {
        console.log('error', error)

    }
});


const web3ConnectSlice = createSlice({
    name: 'web3Connect',
    initialState,
    reducers: {},
    extraReducers: {
        [loadBlockchain.pending.toString()]: (state, { payload }) => {
            state.status = "pending"
        },
        [loadBlockchain.fulfilled.toString()]: (state, { payload }) => {
            state.web3 = payload?.web3;
            state.accounts = payload?.accounts;
            state.contract = payload?.contract;
            state.DAIContract = payload?.DAIContract;
            state.socketContract = payload?.socketContract;
            state.balance = payload?.balance;
            state.Provider = payload?.Provider;
            // localStorage.setItem("accounts", state.accounts )
            state.status = "success";
        },
        [loadBlockchain.rejected.toString()]: (state, { payload }) => {
            state.status = "rejected";
        },

        [loadWalletConnect.fulfilled.toString()]: (state, { payload }) => {
            state.web3 = payload?.web3;
            state.accounts = payload?.accounts;
            state.contract = payload?.contract;
            state.balance = payload?.balance;
            state.DAIContract = payload?.DAIContract;
            state.Provider = payload?.Provider;
            // state.socketContract = payload?.socketContract;
            state.status = "success";
        },
        [updatAccount.fulfilled.toString()]: (state, { payload }) => {
            state.accounts = payload?.accounts;
            localStorage.setItem("accounts", state.accounts )
        },
    }
})

export const web3Reducer = web3ConnectSlice.reducer;
