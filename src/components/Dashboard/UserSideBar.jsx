import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { MdSpaceDashboard } from "react-icons/md";
import { RiDashboard2Fill } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { PrimaryGradientButton } from "../buttons/primary_gradient.button";
import scrollreveal from "scrollreveal";
import { Transferblack, logoo, LeafGold, SwapGold, UmbrellaGold, Chrysus, G, P, GI, A, DashboardIcon, HomeIcon, LoanIcon, MintIcon, SwapIcon, } from "../../assets";
import { MintButton } from "../buttons/mint";
import { useAppDispatch, useAppSelector } from '../../reducer/store';
// DashboardIcon,

// LoanIcon,
// MintIcon,
// SwapIcon,

export default function UserSideBar() {
  // const dispatch = useDispatch();
  // const [swapModal, setSwapModal] = useState(false);
  const navigate = useNavigate();
  const [currentLink, setCurrentLink] = useState(1);
  const [navbarState, setNavbarState] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [showSwapModel, setshowSwapModel] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavbarState(false));
  const { web3, balance, contract, accounts, socketContract, Provider } = useAppSelector((state) => state.web3Connect);



  const DisconnectWallet = async () => {
    if (window.ethereum) {
      localStorage.clear();
      if (Provider.isMetaMask) {
        Provider._handleDisconnect();
        web3.setProvider(null);
        if (addrees !== null) {
          localStorage.clear();
        }
        navigate("/")
      }
      if (Provider.connected) {
        Provider.disconnect();
        web3.setProvider(null)
        navigate("/")
      }
    }
  };

  // <SwapModal showSwapModal={swapModal} />
  // useEffect(() => {
  //     dispatch(loadUser(null));
  // }, [dispatch]);

  useEffect(() => {
    const sr = scrollreveal({
      origin: "left",
      distance: "80px",
      duration: 1000,
      reset: false,
    });

    sr.reveal(
      `
          .brand,
          .links>ul>li:nth-of-type(1),
      .links>ul>li:nth-of-type(2),
      .links>ul>li:nth-of-type(3),
      .links>ul>li:nth-of-type(4),
      .links>ul>li:nth-of-type(5),
      .links>ul>li:nth-of-type(6),
      .links>ul>li:nth-of-type(7),
      .links>ul>li:nth-of-type(8),
      .logout
      `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);

  return (
    <>
      <Section>
        <div className="top">
          <div className="brand">
            <Link to={"/"} className="logo-dark"><img width="200" height="200" src={logoo} alt="" /></Link>

          </div>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setNavbarState(true);
                }}
              />
            )}
          </div>
          <div className="links">
            <ul>
              <Link to={"/accounts"}>
                <li
                  className={currentLink === 1 ? "active" : "none"}
                  onClick={() => setCurrentLink(1)}
                >
                  <Link to={"/accounts"}>
                    {/* <MdSpaceDashboard /> */}
                    <img
                      className="jumbo-button-icon"
                      src={DashboardIcon}
                      alt="DashboardIcon"
                    />
                    <span> Dashboard</span>
                  </Link>
                </li>
              </Link>
              <Link to={"/"}>
                <li
                  className={currentLink === 2 ? "active" : "none"}
                  onClick={() => setCurrentLink(2)}
                >
                  <Link to={"/"}>
                    {/* <RiDashboard2Fill /> */}
                    <img
                      className="jumbo-button-icon"
                      src={HomeIcon}
                      alt="DashboardIcon"
                    />
                    <span> Home</span>
                  </Link>
                </li>
              </Link>
              <Link to={"mint"}>
                <li
                  className={currentLink === 3 ? "active" : "none"}
                  onClick={() => setCurrentLink(3)}
                >
                  <Link to={"mint"}>
                    <img
                      className="jumbo-button-icon"
                      src={MintIcon}
                      alt="leaf-gold"
                    />
                    <span> Mint </span>
                  </Link>
                </li>
              </Link>
              <Link to={"swappopup"}>
                <li
                  className={currentLink === 4 ? "active" : "none"}
                  onClick={() => setCurrentLink(4)}
                >

                  <a className="cursor-pointer">
                    <Link to={"swappopup"}>
                      <img
                        className="jumbo-button-icon"
                        src={SwapIcon}
                        alt="swap-gold"
                      />
                      <span>Swap</span>
                    </Link>
                  </a>

                  {/* <Swap show={showSwapModel} onHide={() => setshowSwapModel(false)} /> */}
                </li>
              </Link>
              <Link to={"loan"}>
                <li
                  className={currentLink === 5 ? "active" : "none"}
                  onClick={() => setCurrentLink(5)}
                >
                  <Link to={"loan"}>
                    <img
                      className="jumbo-button-icon"
                      src={LoanIcon}
                      alt="umbrella-gold"
                    />
                    <span> Loan </span>
                  </Link>

                  {/* <a href="#">
                  <img
                    className="jumbo-button-icon"
                    src={UmbrellaGold}
                    alt="umbrella-gold"
                  />
                  <span> Loan</span>
                </a> */}
                </li>
              </Link>
              <Link to={"governance"}>
                <li
                  className={currentLink === 6 ? "active" : "none"}
                  onClick={() => setCurrentLink(6)}
                >
                  <Link to={"governance"}>
                    <img width="15" height="15"
                      className="jumbo-button-icon"
                      src={GI}
                      alt="umbrella-gold"
                    />
                    <span> Governance </span>
                  </Link>
                </li>
              </Link>
              <Link to={"allpositions"}>
                <li
                  className={currentLink === 7 ? "active" : "none"}
                  onClick={() => setCurrentLink(7)}
                >
                  <Link to={"allpositions"}>
                    <img width="15" height="15"
                      className="jumbo-button-icon"
                      src={A}
                      alt="umbrella-gold"
                    />
                    <span> All Positions </span>
                  </Link>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="logout">
          <Link to={"/"}>
            <FiLogOut />
            <span className="logout"
              onClick={() => DisconnectWallet()}>Disconnect</span>
          </Link>
        </div>
      </Section>



      <ResponsiveNav state={navbarState} className={navbarState ? "show" : ""}>
        <div className="responsive__links">
          <ul>
            <Link to={"/accounts"}>
              <li
                className={currentLink === 1 ? "active" : "none"}
                onClick={() => setCurrentLink(1)} >
                <Link to={"/accounts"}>
                  {/* <MdSpaceDashboard /> */}
                  <img
                    className="jumbo-button-icon"
                    src={DashboardIcon}
                    alt="DashboardIcon"
                  />
                  <span> Dashboard</span>
                </Link>
              </li>
            </Link>
            <Link to={"/"}>
              <li
                className={currentLink === 2 ? "active" : "none"}
                onClick={() => setCurrentLink(2)}
              >
                <Link to={"/"}>
                  {/* <RiDashboard2Fill /> */}
                  <img
                    className="jumbo-button-icon"
                    src={HomeIcon}
                    alt="DashboardIcon"
                  />
                  <span> Home</span>
                </Link>
              </li>
            </Link>
            <Link to={"mint"}>
              <li
                className={currentLink === 3 ? "active" : "none"}
                onClick={() => setCurrentLink(3)}
              >
                <Link to={"mint"}>
                  <img
                    className="jumbo-button-icon"
                    src={MintIcon}
                    alt="leaf-gold"
                  />
                  <span> Mint</span>
                </Link>
              </li>
            </Link>
            <Link to={"swappopup"}>
              <li
                className={currentLink === 4 ? "active" : "none"}
                onClick={() => setCurrentLink(4)}
              >
                <Link to={"swappopup"}>
                  <a className="cursor-pointer"
                  // onClick={() => setshowSwapModel(true)}
                  >
                    <img
                      className="jumbo-button-icon"
                      src={SwapIcon}
                      alt="swap-gold"
                    />
                    <span> Swap</span>
                  </a>
                </Link>
                {/* <Swap show={showSwapModel} onHide={() => setshowSwapModel(false)} /> */}
              </li>
            </Link>
            <Link to={"loan"}>
              <li
                className={currentLink === 5 ? "active" : "none"}
                onClick={() => setCurrentLink(5)}
              >
                <Link to={"loan"}>
                  <img
                    className="jumbo-button-icon"
                    src={LoanIcon}
                    alt="umbrella-gold"
                  />
                  <span> Loan</span>
                </Link>
              </li>
            </Link>
            <Link to={"governance"}>
              <li
                className={currentLink === 6 ? "active" : "none"}
                onClick={() => setCurrentLink(6)}
              >
                <Link to={"governance"}>
                  <img
                    className="jumbo-button-icon"
                    src={GI}
                    alt="umbrella-gold"
                  />
                  <span> Governance </span>
                </Link>
              </li>
            </Link>
            <Link to={"allpositions"}>
              <li
                className={currentLink === 7 ? "active" : "none"}
                onClick={() => setCurrentLink(7)}
              >
                <Link to={"allpositions"}>
                  <img
                    className="jumbo-button-icon"
                    src={A}
                    alt="umbrella-gold"
                  />
                  <span> All Positions </span>
                </Link>
              </li>
            </Link>
            <li className="logout">
              <Link to={"/"}>
                <FiLogOut />
                <span className="logout"
                  onClick={() => DisconnectWallet()}>Disconnect</span>
              </Link>
            </li>
          </ul>
        </div>
      </ResponsiveNav>
    </>
  );
}



const Mint = (props) => {

  return (
    <div className="">
      <Modal className="items-center"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {/* closeButton */}
        <Modal.Header className=" flex flex-row flex-wrap text-center items-center py-[6px] px-4 bg-discount-gradient ">
          <div
            style={{
              width: "100%",
              height: "3px",
              background:
                "linear-gradient(270deg, #EDC452 0.26%, #846424 99.99%, #846424 100%), #846424",
              borderRadius: "40px",
            }}></div>
          <Modal.Title >
            <h4 className="primary-gradient-text">Mint Chrysus Coin (CHC)</h4>
          </Modal.Title>
          <button onClick={props.onHide} type="button" className="btn-close btn-close-white" aria-label="Close"></button>
        </Modal.Header>
        <Modal.Body className="items-center bg-discount-gradient rounded-b-[12px]">
          <div className="options">
            <select className=''
              style={{
                backgroundColor: "#1A1917",
                borderRadius: "16px",
                color: "#846424",
              }}
            // onChange={(e) => setlocation(e.target.value)}
            >
              <option value="">Select Token</option>
              <option value="Ethreum">ETH</option>
              <option value="DAI">DAI</option>
            </select>
          </div>
          <div className="sell-blance" style={{
            color: "#846424",
          }}>
            <label className="form-label text-primary">Enter Amount</label>
            <div className="input-group" style={{
              backgroundColor: "#1A1917",
              color: "#846424",
            }}>
              <input type="text" className="form-control"
                style={{
                  backgroundColor: "#1A1917",
                  color: "#846424",
                }}
                placeholder="0.00" />
              <span style={{
                backgroundColor: "#1A1917",
                color: "#846424",
              }} className="input-group-text">Amount</span>
            </div>
          </div>

          <div className="text-center">
            <MintButton />
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
      </Modal>
    </div>
  )
}



const Swap = (props) => {

  return (

    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{
        background: "black ",
        opacity: "2%",
      }}
    >
      {/* closeButton */}
      <Modal.Header className=" flex flex-row flex-wrap text-center items-center py-[6px] px-4 bg-discount-gradient ">
        <div
          style={{
            width: "100%",
            height: "3px",
            background:
              "linear-gradient(270deg, #EDC452 0.26%, #846424 99.99%, #846424 100%), #846424",
            borderRadius: "40px",
          }}></div>
        <Modal.Title >
          <h4 className="primary-gradient-text">Swap Chrysus Coin (CHC)</h4>
        </Modal.Title>
        <button onClick={props.onHide} type="button" className="btn-close btn-close-white" aria-label="Close"></button>
      </Modal.Header>
      <Modal.Body className="items-center bg-discount-gradient rounded-b-[12px]">
        <div className="sell-blance" style={{
          color: "#846424",
        }}>
          <label className="form-label text-primary">Amount Available</label>
          <span className="ml-5">CHC{""} 0.123</span>
          <div className="input-group" style={{
            backgroundColor: "#1A1917",
            color: "#846424",
          }}>
            <input type="text" className="form-control"
              style={{
                backgroundColor: "#1A1917",
                color: "#846424",
              }}
              placeholder="0.00" />
            <span style={{
              backgroundColor: "#1A1917",
              color: "#846424",
            }} className="input-group-text"><img loading="lazy" src={Chrysus} alt="meta" /></span>
          </div>
        </div>
        <div className="sell-blance" style={{
          color: "#846424",
        }}>
          <label className="form-label text-primary">Enter Amount</label>
          <div className="input-group" style={{
            backgroundColor: "#1A1917",
            color: "#846424",
          }}>
            <input type="text" className="form-control"
              style={{
                backgroundColor: "#1A1917",
                color: "#846424",
              }}
              placeholder="0.00" />
            <span style={{
              backgroundColor: "#1A1917",
              color: "#846424",
            }} className="input-group-text">Amount</span>
          </div>
        </div>
        <div className="options">
          <select className=''
            style={{
              backgroundColor: "#1A1917",
              borderRadius: "16px",
              color: "#846424",
            }}
          // onChange={(e) => setlocation(e.target.value)}
          >
            <option value="">Swap To</option>
            <option value="Ethreum">ETH</option>
            <option value="DAI">DAI</option>
            <option value="BCH">BCH</option>
            <option value="XRP">XRP</option>
          </select>
        </div>


        <div className="text-center">
          <PrimaryGradientButton className="mt-3">
            <div className="d-flex flex-row align-items-center justify-content-center">
              Swap CHC
              <img
                className="mx-2"
                src={Transferblack}
                alt="transfer-black.svg"
              />
            </div>
          </PrimaryGradientButton>
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  )
}


// position: fixed;
const Section = styled.section`
  position: fixed;
  z-index: 99;
  left: 0;
  
  background-color: #211f21;
  height: 100vh;
  width: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  gap: 2rem;
  .top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;

    .toggle {
      display: none;
    }
    .brand {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      svg {
        color: #ffc107;
        font-size: 2rem;
      }
      span {
        font-size: 2rem;
        color: #ffc107;
        font-family: "Permanent Marker", cursive;
      }
    }
    .links {
      display: flex;
      justify-content: center;
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          padding: 0.6rem 1rem;
          border-radius: 0.6rem;
          &:hover {
            background-color: #846424;
            a {
              color: white;
            }
          }
          a {
            text-decoration: none;
            display: flex;
            gap: 1rem;
            color: #846424;
          }
        }
        .active {
          background-color: #846424;
          a {
            color: white;
          }
        }
      }
    }
  }

  .logout {
    padding: 0.3rem 1rem;
    border-radius: 0.6rem;
    &:hover {
      background-color: #da0037;
    }
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: white;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: initial;
    width: 100%;
    height: max-content;
    padding: 1rem;
    .top {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
      .toggle {
        display: block;
        color: white;
        z-index: 99;
        svg {
          font-size: 1.4rem;
        }
      }
      .brand {
        gap: 1rem;
        justify-content: flex-start;
      }
    }
    .top > .links,
    .logout {
      display: none;
    }
  }
`;
const ResponsiveNav = styled.div`
  position: fixed;
  left: 0vw;
  top: 0;
  z-index: 10;
  background-color: #211f21;
  height: 100vh;
  margin-top: 55px;
  width: ${({ state }) => (state ? "45%" : "0%")};
  transition: 0.4s ease-in-out;
  display: flex;
  opacity: 0;
  visibility: hidden;
  padding: 1rem;
  .responsive__links {
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      color: white;
      margin-top: 3rem;
      li {
        padding: 0.6rem 1rem;
        border-radius: 0.6rem;
        &:hover {
          background-color: #846424;
          a {
            color: white;
          }
        }
        a {
          text-decoration: none;
          display: flex;
          gap: 1rem;
          color: 846424;
        }
      }
      .active {
        background-color: #846424;
        a {
          color: white;
        }
      }
    }
  }
`;