import Web3 from 'web3';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { Web3Provider } from '@ethersproject/providers';
// import { useWeb3React } from '@web3-react/core';
// import { InjectedConnector } from '@web3-react/injected-connector';
// import WalletConnectProvider from '@walletconnect/web3-provider';
import WalletConnectProvider from '@walletconnect/web3-provider/dist/umd/index.min.js';
// import WalletConnectProvider from "@walletconnect/web3-provider";
// import QRCodeModal from '@walletconnect/qrcode-modal/dist/umd/index.min.js';
import Web3Modal from "web3modal";

export const initialState = {
    status: null,
    web3: null,
    socketContract: null,
    accounts: [],
    balance: [],
    Provider: null,
    web3loadingerror: null,
}



const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: "https://goerli.infura.io/v3/b0b0d100567e4e59bb2bab1a2c353381", // required
      },
    }
  };
  const web3Modal = new Web3Modal({
    cacheProvider: true,
    providerOptions, // required
  });


export const loadWalletConnect = createAsyncThunk( "loadWalletConnect", async (_, thunkAPI) => {
    try {
        const provider = await web3Modal.connect();
        if (provider) {
            const Provider = provider;
            // await provider.enable();
            const web3 = new Web3(provider);
            console.log('web3', web3);
            await window.ethereum.send("eth_requestAccounts");
            const accounts = await web3.eth.getAccounts();
            // document.querySelector(".connect").innerHTML = accounts[0];
            const balance = await web3.eth.getBalance(accounts[0]);

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



export const updatAccount = createAsyncThunk("updatAccount", async (data, thunkAPI) => {
    try {
        let accounts = data
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

        [loadWalletConnect.fulfilled.toString()]: (state, { payload }) => {
            state.web3 = payload?.web3;
            state.accounts = payload?.accounts;
            state.balance = payload?.balance;
            state.Provider = payload?.Provider;
            // state.socketContract = payload?.socketContract;
            state.status = "success";
        },
        [updatAccount.fulfilled.toString()]: (state, { payload }) => {
            state.accounts = payload?.accounts;
        },
    }
})

export const web3Reducer = web3ConnectSlice.reducer;
