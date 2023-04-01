import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { MdSpaceDashboard } from "react-icons/md";
import { RiDashboard2Fill } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import scrollreveal from "scrollreveal";
import { logoo, LeafGold, SwapGold, CartGold, UmbrellaGold, USDTWhite, XLMWhite, XRPWhite, DAIWhite, ETHWhite } from "../../assets";
import { MintButton } from "../buttons/mint";
// import { Button } from "reactstrap";

export default function UserSideBar() {
  // const dispatch = useDispatch();
  const [currentLink, setCurrentLink] = useState(1);
  const [navbarState, setNavbarState] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavbarState(false));

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
              <li
                className={currentLink === 1 ? "active" : "none"}
                onClick={() => setCurrentLink(1)}
              >
                <Link to={"/accounts"}>
                  <MdSpaceDashboard />
                  <span> Dashboard</span>
                </Link>
              </li>
              <li
                className={currentLink === 2 ? "active" : "none"}
                onClick={() => setCurrentLink(2)}
              >
                <Link to={"/"}>
                  <RiDashboard2Fill />
                  <span> Home</span>
                </Link>
              </li>
              <li
                className={currentLink === 3 ? "active" : "none"}
                onClick={() => setCurrentLink(3)}
              >
                <a className="cursor-pointer" onClick={() => setModalShow(true)}>
                  {/* <FaAddressCard /> */}
                  <img
                    className="jumbo-button-icon"
                    src={LeafGold}
                    alt="leaf-gold"
                  />
                  {/* <Link to={"/login"}></Link> */}
                  <span> Mint</span>
                </a>
                <Mint show={modalShow}
                  onHide={() => setModalShow(false)} />
              </li>
              <li
                className={currentLink === 4 ? "active" : "none"}
                onClick={() => setCurrentLink(4)}
              >
                <a href="#">
                  {/* <GiTwirlCenter /> */}
                  {/* <Link to={"/login"}></Link> */}
                  <img
                    className="jumbo-button-icon"
                    src={SwapGold}
                    alt="swap-gold"
                  />
                  <span>Swap</span>
                </a>
              </li>
              <li
                className={currentLink === 5 ? "active" : "none"}
                onClick={() => setCurrentLink(5)}
              >
                <Link to={"loan"}>
                  <img
                    className="jumbo-button-icon"
                    src={UmbrellaGold}
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
              <li
                className={currentLink === 6 ? "active" : "none"}
                onClick={() => setCurrentLink(6)}
              >
                <a href="#">
                  {/* <IoSettings /> */}
                  {/* <Link to={"/login"}></Link> */}
                  <img
                    className="jumbo-button-icon"
                    src={CartGold}
                    alt="card-gold"
                  />
                  <span> Buy</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="logout">
          <Link >
            <FiLogOut />
            <span className="logout">Disconnect</span>
          </Link>
        </div>
      </Section>



      <ResponsiveNav state={navbarState} className={navbarState ? "show" : ""}>
        <div className="responsive__links">
          <ul>
            <li
              className={currentLink === 1 ? "active" : "none"}
              onClick={() => setCurrentLink(1)} >
              <Link to={"/accounts"}>
                <MdSpaceDashboard />
                <span> Dashboard</span>
              </Link>
            </li>
            <li
              className={currentLink === 2 ? "active" : "none"}
              onClick={() => setCurrentLink(2)}
            >
              <Link >
                <RiDashboard2Fill />
                <span> Home</span>
              </Link>
            </li>
            <li
              className={currentLink === 3 ? "active" : "none"}
              onClick={() => setCurrentLink(3)}
            >
              <a href="#">
                <img
                  className="jumbo-button-icon"
                  src={LeafGold}
                  alt="leaf-gold"
                />
                <span> Mint</span>
              </a>
            </li>
            <li
              className={currentLink === 4 ? "active" : "none"}
              onClick={() => setCurrentLink(4)}
            >
              <a href="#">
                <img
                  className="jumbo-button-icon"
                  src={SwapGold}
                  alt="swap-gold"
                />
                <span> Swap</span>
              </a>
            </li>
            <li
              className={currentLink === 5 ? "active" : "none"}
              onClick={() => setCurrentLink(5)}
            >
              <a href="#">
                <img
                  className="jumbo-button-icon"
                  src={UmbrellaGold}
                  alt="umbrella-gold"
                />
                <span> Loan</span>
              </a>
            </li>
            <li
              className={currentLink === 6 ? "active" : "none"}
              onClick={() => setCurrentLink(6)}
            >
              <a href="#">
                <img
                  className="jumbo-button-icon"
                  src={CartGold}
                  alt="card-gold"
                />
                <span> Buy</span>
              </a>
            </li>
            <li className="logout">
              <Link >
                <FiLogOut />
                <span className="logout"
                >Disconnect</span>
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
              }} className="input-group-text">USD</span>
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
  margin-top: 85px;
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