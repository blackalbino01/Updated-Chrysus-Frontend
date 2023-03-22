import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import { Provider } from "react-redux";
// import { Web3ReactProvider } from '@web3-react/core';
// import { Web3Provider } from '@ethersproject/providers';
import store from "./reducer/store";


// const getLibrary = (provider) => {
//   return new Web3Provider(provider);
// };


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    {/* <Web3ReactProvider getLibrary={getLibrary}> */}
      <Provider store={store}>
        <App />
      </Provider>
    {/* </Web3ReactProvider> */}
  </React.StrictMode>
)
