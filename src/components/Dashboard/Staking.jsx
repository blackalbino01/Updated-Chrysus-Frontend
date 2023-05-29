import React, { useState, useEffect, useRef } from 'react';
import { H4 } from '../typography/h4';
import { Dash, C, Ether, home, meta1, ero, ero2, HomeIcon, LoanIcon, MintIcon, SwapIcon, DashboardIcon, Chrysus } from '../../assets';
import { Tab } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { loadBlockchain, loadWalletConnect, updatAccount } from '../../slices/web3ContractSlice';
import { useAppDispatch, useAppSelector } from '../../reducer/store';
// import Utils from "../../../utilities";
import styled from "styled-components";
import { Button } from 'react-bootstrap';



const Staking = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const [currentLink, setCurrentLink] = useState(1);
    const { web3, contract, accounts, socketContract, Provider } = useAppSelector((state) => state.web3Connect);
    const [action, setaction] = useState({});
    const [data, setData] = useState(
        document.querySelectorAll("#status_wrapper tbody tr")
    );
    const sort = 6;
    const activePag = useRef(0);
    const [test, settest] = useState(0);

    console.log("Proposal action", action)

// Active data
const chageData = (frist, sec) => {
    for (var i = 0; i < data.length; ++i) {
        if (i >= frist && i < sec) {
            data[i].classList.remove("d-none");
        } else {
            data[i].classList.add("d-none");
        }
    }
};
    	// use effect
	useEffect(() => {
		setData(document.querySelectorAll("#status_wrapper tbody tr"));
		//chackboxFun();
	}, [test]);


	// Active pagginarion
	activePag.current === 0 && chageData(0, sort);
	// paggination
	let paggination = Array(Math.ceil(data.length / sort))
		.fill()
		.map((_, i) => i + 1);

	// Active paggination & chage data
	const onClick = (i) => {
		activePag.current = i;
		chageData(activePag.current * sort, (activePag.current + 1) * sort);
		settest(i);
	};


    // Account Switching
    useEffect(() => {
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', async (data) => {
                dispatch(updatAccount(data));
                console.log("updated Account", data);
            })
        }
    })

    const more = async () => {
        navigate("/accounts/governance")
    }

    const DisconnectWallet = async () => {
        if (window.ethereum) {
            localStorage.clear();
            if (Provider.isMetaMask) {
                Provider._handleDisconnect();
                web3.setProvider(null);
                if (addrees !== null) {
                    localStorage.clear();
                }
            }
            if (Provider.connected) {
                Provider.disconnect();
                web3.setProvider(null)
            }
        }
    };

    const addrees = localStorage.getItem("accounts")
    console.log("addrees of wallet", addrees);

    return (
            <div>
                <Tab.Container defaultActiveKey="Navbuy">
                    <div className="row">
                        {/* <div className="col-xl-3">
                            <div className="card"
                                style={{
                                    backgroundColor: "#211f21",
                                    borderRadius: "16px",
                                    color: "#846424",
                                }}>
                                <div className="card-body">
                                    <div className="w-100">
                                        <div className="d-flex flex-row justify-content-start align-items-center w-100">
                                            <H4>Chrysus Governance</H4>
                                        </div>
                                        <div className="links">
                                            <ul style={{
                                                marginTop: "25px"
                                            }}>
                                                <Link to={"/accounts/createproposal"}>
                                                    <li
                                                        className={currentLink === 1 ? "active" : "none"}
                                                        onClick={() => setCurrentLink(1)} >
                                                        <img width="150" height="150"
                                                            className="jumbo-button-icon"
                                                            src={ero}
                                                            alt="DashboardIcon"
                                                        />
                                                    </li>
                                                </Link>
                                                <Link to={"/accounts/staking"}>
                                                    <li
                                                        className={currentLink === 2 ? "active" : "none"}
                                                        onClick={() => setCurrentLink(2)} >
                                                        <img width="95" height="95"
                                                            className="jumbo-button-icon"
                                                            src={ero2}
                                                            alt="DashboardIcon"
                                                        />
                                                    </li>
                                                </Link>
                                                <Button
                                                    type="button"
                                                    style={{
                                                        backgroundColor: "#1A1917",
                                                        borderRadius: "16px",
                                                        color: "#846424",
                                                        height: "22px",
                                                        width: "100px",
                                                        fontWeight: "700",
                                                        fontSize: "10px",
                                                        marginTop: "45px"
                                                    }}
                                                    onClick={() => more()}
                                                    className=" font-thin
                                                    rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center">
                                                    <a>Read More</a>
                                                </Button>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-xl-12">
                            <div className="card"
                                style={{
                                    backgroundColor: "#211f21",
                                    borderRadius: "16px",
                                    color: "#846424",
                                }}>
                                <div className="card-body pt-4">
                                    <div className="w-100">
                                        <div className="d-flex flex-row align-items-center justify-content-between mb-4">
                                            <H4>Staking Dashboard</H4>
                                        </div>
                                        <div className="card"
                                            style={{
                                                backgroundColor: "#121112",
                                                borderRadius: "16px",
                                                color: "#846424",
                                            }}>
                                            <div className="card-body">
                                                <div className="row sp20 mb-4 align-items-center">
                                                    <div className="col-xxl-12 d-flex flex-wrap justify-content-between align-items-center">
                                                        <div className="px-1 info-group">
                                                            <p className="fs-10 mb-1">WALLET <br />BALANCE</p>
                                                            <h2 className="fs-10 font-w400 text-white">
                                                                90.00
                                                            </h2>
                                                        </div>
                                                        <div className="px-1 info-group">
                                                            <p className="fs-10 mb-1" >CURRENT STAKED <br />AMOUNT</p>
                                                            <h3 className="fs-10 font-w400 text-white">
                                                                00.0
                                                            </h3>
                                                        </div>
                                                        <div className="px-1 info-group">
                                                            <p className="fs-10 mb-1">REAL TIME <br />ACCRUALS</p>
                                                            <h3 className="fs-10 font-w400 text-white">
                                                                0.00
                                                            </h3>
                                                        </div>
                                                        <div className="px-1 info-group">
                                                            <p className="fs-10 mb-1">TOTAL STAKED <br /> AMOUNT</p>
                                                            <h3 className="fs-10 font-w300 text-white">
                                                                0.00
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="input-group">
                                            <select className=''
                                                style={{
                                                    backgroundColor: "#1A1917",
                                                    color: "#846424",
                                                }}
                                                onChange={(e) => setaction(e.target.value)}
                                            >
                                                <option value="">Select Proposal Action</option>
                                                <option value="Contract Burn" >Contract Burn</option>
                                                <option value="Change DAO tax">Change DAO tax</option>
                                                <option value="Invest Fund">Invest Fund</option>
                                                <option value="Sell Investment">Sell Investment</option>
                                            </select>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <div className="card"
                                style={{
                                    backgroundColor: "#211f21",
                                    borderRadius: "16px",
                                    color: "#846424",
                                }}>
                                <div>
                                    <div className="card-body">
                                        <div className="card"
                                            style={{
                                                backgroundColor: "#121112",
                                                borderRadius: "16px",
                                                color: "#846424",
                                            }}>
                                            <h4 className='text-center mt-5'>Lock Tokens For</h4>
                                            <div className='card-body'>
                                                <div className="input-group mt-4" style={{
                                                    backgroundColor: "#1A1917",
                                                    color: "#846424",
                                                }}>
                                                    <input type="number" className="form-control"
                                                        style={{
                                                            backgroundColor: "#1A1917",
                                                            borderRadius: "6px",
                                                            color: "#846424",
                                                        }}
                                                        placeholder="Stake Amount" />
                                                    <span style={{
                                                        backgroundColor: "#1A1917",
                                                        color: "#846424",
                                                    }} className="input-group-text">
                                                        {/* <img loading="lazy" src={Chrysus} alt="meta" /> */}
                                                        <a>Max</a>
                                                    </span>
                                                </div>
                                                <div className="card-body">
                                                    <div className="row sp20 mb-4 align-items-center">
                                                        <div className="col-xxl-12 d-flex flex-wrap justify-content-between align-items-center">
                                                            <div className="px-1 info-group">
                                                                <div className="text-center">
                                                                    <Button
                                                                        type="button"
                                                                        style={{
                                                                            backgroundColor: "#1A1917",
                                                                            borderRadius: "16px",
                                                                            color: "#846424",
                                                                            height: "32px",
                                                                            width: "180px",
                                                                            fontWeight: "700",
                                                                            fontSize: "15px",
                                                                        }}
                                                                        className=" font-thin
                                                                         rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center">
                                                                        <a>1 Month</a>
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                            <div className="px-1 info-group">
                                                                <div className="text-center">
                                                                    <Button
                                                                        type="button"
                                                                        style={{
                                                                            backgroundColor: "#1A1917",
                                                                            borderRadius: "16px",
                                                                            color: "#846424",
                                                                            height: "32px",
                                                                            width: "180px",
                                                                            fontWeight: "700",
                                                                            fontSize: "15px",
                                                                        }}
                                                                        // onClick={() => ProposalButton()}
                                                                        className=" font-thin
                                                        rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center">
                                                                        <a>3 Month</a>
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                            <div className="px-1 info-group">
                                                                <div className="text-center">
                                                                    <Button
                                                                        type="button"
                                                                        style={{
                                                                            backgroundColor: "#1A1917",
                                                                            borderRadius: "16px",
                                                                            color: "#846424",
                                                                            height: "32px",
                                                                            width: "180px",
                                                                            fontWeight: "700",
                                                                            fontSize: "15px",
                                                                        }}
                                                                        // onClick={() => ProposalButton()}
                                                                        className=" font-thin
                                                        rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center">
                                                                        <a>6 Month</a>
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="input-group mt-4" style={{
                                                    backgroundColor: "#1A1917",
                                                    color: "#846424",
                                                }}>
                                                    <input type="number" className="form-control"
                                                        style={{
                                                            backgroundColor: "#1A1917",
                                                            borderRadius: "6px",
                                                            color: "#846424",
                                                        }}
                                                        placeholder="0.00" />
                                                    <span style={{
                                                        backgroundColor: "#1A1917",
                                                        color: "#846424",
                                                    }} className="input-group-text">
                                                        <img loading="lazy" src={Chrysus} alt="meta" />

                                                    </span>
                                                </div>
                                            </div>
                                            <div className="text-center mb-5">
                                                <Button
                                                    type="button"
                                                    style={{
                                                        backgroundColor: "#1A1917",
                                                        borderRadius: "16px",
                                                        color: "#846424",
                                                        height: "32px",
                                                        width: "180px",
                                                        fontWeight: "700",
                                                        fontSize: "15px",
                                                    }}
                                                    // onClick={() => ProposalButton()}
                                                    className=" font-thin
                                                        rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center">
                                                    <a>Stake</a>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <div className="card"
                                style={{
                                    backgroundColor: "#211f21",
                                    borderRadius: "16px",
                                    color: "#846424",
                                }}>
                                <Tab.Container defaultActiveKey="All">
                                    <div className="card-header border-0 pb-2 flex-wrap">
                                        <h4 className="heading ">Your Stakes</h4>
                                    </div>
                                    <div className="card-body pt-0 pb-0">
                                        <Tab.Content >
                                            <Tab.Pane eventKey="All">
                                                <div className="table-responsive dataTabletrade ">
                                                    <div id="status_wrapper" className="dataTables_wrapper no-footer">
                                                        <table id="example" className="table display dataTable no-footer" style={{ minWidth: "845px" }}>
                                                            <thead>
                                                                <tr className='text-white'>
                                                                    <th>Staked</th>
                                                                    <th>REWARD</th>
                                                                    <th>WITHDRAWAL TIME</th>
                                                                    <th>UNSTAKE</th>
                                                                    <th className="text-end">WITHDRAW </th>
                                                                </tr>
                                                            </thead>

                                                        </table>
                                                        <div className="d-sm-flex text-white text-center justify-content-between align-items-center mt-3 mb-3">
                                                            <div className="dataTables_info">
                                                                Showing {activePag.current * sort + 1} to{" "}
                                                                {data.length > (activePag.current + 1) * sort
                                                                    ? (activePag.current + 1) * sort
                                                                    : data.length}{" "}
                                                                of {data.length} entries
                                                            </div>
                                                            <div
                                                                className="dataTables_paginate paging_simple_numbers mb-0"
                                                                id="application-tbl1_paginate"
                                                            >
                                                                <Link
                                                                    className="paginate_button previous text-white mt-2"
                                                                    // to="/future"
                                                                    // style={{
                                                                    // 	backgroundColor: "#757375",
                                                                    // 	borderRadius: "16px",
                                                                    // }}
                                                                    onClick={() =>
                                                                        activePag.current > 0 &&
                                                                        onClick(activePag.current - 1)
                                                                    }
                                                                >
                                                                    {/* <i className="fa fa-angle-double-left" ></i> */}
                                                                    <i>
                                                                        <svg style={{ width: "20px", height: "20px", marginTop: "12" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z" /></svg>
                                                                    </i>
                                                                </Link>
                                                                <span className='text-white'>
                                                                    {paggination.map((number, i) => (
                                                                        <Link
                                                                            key={i}
                                                                            // to="/future"
                                                                            className={`paginate_button  ${activePag.current === i ? "current" : ""
                                                                                } `}
                                                                            onClick={() => onClick(i)}
                                                                        >
                                                                            {number}
                                                                        </Link>
                                                                    ))}
                                                                </span>

                                                                <Link
                                                                    className="paginate_button next text-white mt-2"
                                                                    // to="/future"
                                                                    // style={{
                                                                    // 	backgroundColor: "#757375",
                                                                    // 	borderRadius: "16px",
                                                                    // }}
                                                                    onClick={() =>
                                                                        activePag.current + 1 < paggination.length &&
                                                                        onClick(activePag.current + 1)
                                                                    }
                                                                >
                                                                    {/* <i className="fa fa-angle-double-right" ></i> */}
                                                                    <i>
                                                                        <svg style={{ width: "20px", height: "20px", marginTop: "10" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z" /></svg>
                                                                    </i>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </div>
                                </Tab.Container>
                            </div>
                        </div>
                    </div>
                </Tab.Container>
            </div>
    )
}
export default Staking;




const Section = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;
  background-color:  #121212;
  .grid {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
    margin-top: 0rem;
    .row__one {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      height: 50%;
      gap: 1rem;
    }
    .row__two {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      height: 50%;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    .grid {
      .row__one,
      .row__two {
        grid-template-columns: 1fr;
      }
    }
  }
`;
