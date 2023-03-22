import { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import styles from "../style";
import { Link, NavLink } from "react-router-dom";
import { close, logoo, menu, Wallets, walet, meta, logo } from "../assets";
import { navLinks } from "../constants";
import styled from "styled-components";
import Pdf from "../assets/pdf/whitepaper.pdf";
import { Button } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FiLogOut } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from '../reducer/store';
import { loadWalletConnect, updatAccount } from '../slices/web3ContractSlice';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet } from 'wagmi/chains'
import { Web3Button } from '@web3modal/react'



const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [isNavShow, setisNavShow] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const dispatch = useAppDispatch()
  const { web3, balance, contract, accounts, socketContract, Provider } = useAppSelector((state) => state.web3Connect);






  const chains = [arbitrum, mainnet]
  const projectId = 'a8c5adc0335c47c05b386eb29e3a24ce'


  const { provider } = configureChains(chains, [w3mProvider({ projectId })])
  const wagmiClient = createClient({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, version: 1, chains }),
    provider
  })
  const ethereumClient = new EthereumClient(wagmiClient, chains)





  // Account Switching
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', async (data) => {
        dispatch(updatAccount(data));
        console.log("updated Account", data);
      })
    }
  })

  // const DisconnectWallet = async () => {
  //   if (window.ethereum) {
  //     if (Provider.isMetaMask) {
  //       Provider._handleDisconnect();
  //       web3.setProvider(null)
  //     } else {
  //       Provider.disconnect();
  //       web3.setProvider(null)
  //     }
  //   }
  // };

  async function DisconnectWallet() {
    console.log("Killing the wallet connection", Provider);
    if (Provider.close) {
      await Provider.close();
      await web3Modal.clearCachedProvider();
      Provider = null;
    }
    console.log("result", Provider);
    return

    // Set the UI back to the initial state
    //document.querySelector("#prepare").style.display = "block";
    //document.querySelector("#connected").style.display = "none";
  }

  // console.log(web3)
  // console.log(Provider)
  // console.log(accounts[0])

  console.log("balance:", balance)
  return (
    <nav className="w-full flex  py-6 justify-between items-center navbar">
      <Link to="/">
        <img src={logoo} alt="hoobank" className="w-[200px] h-[55px]" onClick={() => setToggle(false)} />

      </Link>
      <ul className="list-none  sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.path}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.name ? "text-yellow-400" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.name)}
          >
            <NavLink to={nav.path}>{nav.name}</NavLink>
            {/* style={{color: "#846424",}} */}
          </li>
        ))}
        <li className="text-dimWhite text-[16px] font-poppins mr-4  cursor-pointer" style={{ marginLeft: "35px" }} href="#" onClick={() => window.open(Pdf)}>
          WhitePaper
        </li>
        {web3 && (loadWalletConnect) ? (
          <li className="text-dimWhite text-[16px] font-poppins cursor-pointer">
            <NavLink to="/accounts">Account</NavLink>
          </li>
        ) : ""}
        <li style={{ marginLeft: "45px" }}
          className={`sub-menu-down  ${showMenu ? "open" : ""}`} id="menushow"
          onClick={() => setShowMenu(!showMenu)}>
          <WagmiConfig  client={wagmiClient}>
            <Web3Button />
          </WagmiConfig>
          {/* {web3 && (loadWalletConnect) ? (
            <div className="dropdown">
              <Button
                type="button" data-toggle="dropdown"
                style={{
                  backgroundColor: "#1A1917",
                  borderRadius: "16px",
                  color: "#846424",
                }}
                className=" font-medium
               rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center 
               dropdown-toggle">
                <a>{accounts[0]?.substring(0, 7) + "...."}</a>
              </Button>
              <ul className="dropdown-menu text-black mt-2 bg-white">
                <div className="mr-3 ml-5">
                  <h4>Wallet</h4>
                  <a className="inline-flex text-sm  py-2.5 items-center font-medium">
                    <img loading="lazy" src={Wallets} alt="discount" className="w-[18px] h-[18px]" />
                    <span className="ml-2"> {accounts[0]?.substring(0, 7) + "...."}</span>
                  </a>
                  <li className="inline-flex text-sm  py-2.5 items-center logout font-medium">
                    <FiLogOut />
                    <Link className="ml-2"
                      onClick={() => DisconnectWallet()}
                    >Reconnect</Link>
                  </li>
                </div>
              </ul>
            </div>
          ) : (
            <>
              <Button
                style={{
                  backgroundColor: "#1A1917",
                  borderRadius: "16px",
                  color: "#846424",
                }}
                onClick={() => setModalShow(true)}
                className=" font-medium 
                rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center">
                <img src={Wallets} alt="wallets" className="w-[20px] h-[25px] mr-3" />
                <a style={{
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "12px",
                  lineHeight: "24px",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: "#846424",
                }}>Connect</a>
              </Button>
              <WalletConnect show={modalShow}
                onHide={() => setModalShow(false)} />
            </>
          )} */}
        </li>
        {/* <li className={`sub-menu-down  ${showMenu ? "open" : ""}`} id="menushow"
          onClick={() => setShowMenu(!showMenu)}>
          <button type="button" className='btn btn-outline-primary text-primary dropdown-toggle'
          >Get Started</button>
          <ul className="sub-menu">
            <li><NavLink to={"/login"}>User Login</NavLink></li>
            <li><a target="_blank" rel="noreferrer" href="https://tasty-earrings-bee.cyclic.app/">Admin Login</a></li>
            <li><NavLink to={"/signup"}>Sign Up</NavLink></li>
          </ul>
        </li> */}
      </ul>



      <div className="sm:hidden flex flex-1 justify-end items-center cursor-pointer">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(prev => !prev)}
        />

        <div
          className={`${!toggle ? "hidden" : "flex"
            }  p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-lg sidebar`} style={{ zIndex: 6 }}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">

            {navLinks.map((nav, index) => (
              <li
                key={nav.path}

                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.name ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.name)}
              >
                <NavLink to={nav.path} onClick={() => setToggle(prev => !prev)}>{nav.name}</NavLink>

              </li>
            ))}
            <li className="text-dimWhite text-[16px] font-poppins cursor-pointer" style={{ marginTop: "20px" }} href="#" onClick={() => window.open(Pdf)}>
              WhitePaper
            </li>
            {web3 && (loadWalletConnect) ? (
              <li style={{ marginTop: "20px" }} className="text-dimWhite text-[16px] font-poppins cursor-pointer">
                <NavLink to="/accounts">Account</NavLink>
              </li>
            ) : ""}
            <li style={{ marginTop: "20px" }}>
              <Button
                style={{
                  backgroundColor: "#1A1917",
                  borderRadius: "16px",
                  color: "#846424",
                }}
                onClick={() => setModalShow(true)}
                className=" font-medium 
          rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center ">
                {web3 && (loadWalletConnect) ? (
                  <a>{accounts[0]?.substring(0, 7) + "...."}</a>
                ) : (
                  <>
                    <img src={Wallets} alt="wallets" className="w-[20px] h-[25px] mr-3" />
                    <a style={{
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "12px",
                      lineHeight: "24px",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      color: "#846424",
                    }}>Connect</a>
                  </>
                )}
              </Button>
              <WalletConnect show={modalShow}
                onHide={() => setModalShow(false)} />
            </li>
          </ul>
        </div>
      </div>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </nav>
  );
};

export default Navbar;

const Links = styled.div`
  color: white;
  display: flex;
  div {
    cursor: pointer;

    &:last-child {
      margin-left: 2rem;
      margin-right: 2rem;
    }
  }
`;


const WalletConnect = (props) => {
  const [isConnected, setIsConnected] = useState(false);
  const dispatch = useAppDispatch()



  const chains = [arbitrum, mainnet]
  const projectId = 'a8c5adc0335c47c05b386eb29e3a24ce'
  const { provider } = configureChains(chains, [w3mProvider({ projectId })])
  const wagmiClient = createClient({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, version: 1, chains }),
    provider
  })
  const ethereumClient = new EthereumClient(wagmiClient, chains)


  // const handleblockchain = () => {
  //   dispatch(loadBlockchain());
  //   setIsConnected(true);
  // };

  const handleWalletConnect = () => {
    dispatch(loadWalletConnect());
    setIsConnected(true);
  };

  return (
    <div className="items-center">
      <Modal className="items-center"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {/* closeButton */}
        <Modal.Header className=" flex flex-row flex-wrap text-center items-center py-[6px] px-4 bg-discount-gradient ">
          <Modal.Title >
            <h3 className="text-white">
              Connect a Wallet
            </h3>

          </Modal.Title>
          {/* <Button onClick={props.onHide}>Close</Button> */}
          <button onClick={props.onHide} type="button" className="btn-close btn-close-white" aria-label="Close"></button>
        </Modal.Header>
        <Modal.Body className="items-center bg-discount-gradient rounded-b-[12px]">
          {/* <img loading="lazy" src={logoo} alt="discount" className="w-[172px] h-[52px]" />
          <p className="text-white">
            Chose your Perferred Wallet
          </p> */}
          {/* <Link onClick={props.onHide} className="flex flex-row cursor-pointer flex-wrap  items-center py-[6px] bg-white rounded-[12px]">
            <img loading="lazy" width="40" height="40" src={meta} alt="meta"
              className="ml-5 object-contain cursor-pointer"
              onClick={() => handleWalletConnect()}
            />
            <span className="text-black"
              style={{
                fontSize: "20px",
                fontWeight: "600",
                fontFamily: "Helvetica",
                fontStyle: "normal",
                paddingLeft: "10px"
              }} onClick={() => handleWalletConnect()}>MetaMask</span>
          </Link> */}
          {/* <Link onClick={props.onHide} className="flex mt-3 flex-row cursor-pointer flex-wrap  items-center py-[6px]  bg-white rounded-[12px]">
              <img loading="lazy" width="50" height="5" src={walet} alt="walet"
                className="ml-5 mt-1 mb-1 cursor-pointer"
                onClick={() => handleWalletConnect()}
              />
              <span className="text-black"
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  fontFamily: "Helvetica",
                  fontStyle: "normal",
                  paddingLeft: "10px"
                }} onClick={() => handleWalletConnect()}>WalletConnect</span>
            </Link> */}
          <WagmiConfig onClick={props.onHide} client={wagmiClient}>
            <Web3Button />
          </WagmiConfig>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
        {/* <Web3Modal projectId={projectId} ethereumClient={ethereumClient} /> */}
      </Modal>
    </div>
  )
}
