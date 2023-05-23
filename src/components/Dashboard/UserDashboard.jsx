import React, { useState, useEffect, useRef } from 'react';
// import { TokenButton } from '../buttons';
// import { FiLogOut } from "react-icons/fi";
// import FcHome from "react-icons/fc";
import { H4 } from '../typography/h4';
import { Dash, C, Ether, home, meta1 } from '../../assets';
import { Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import OrderTab from '../Future/OrderTab';
import TradeTab from '../Future/TradeTab';
import { loadBlockchain, loadWalletConnect, updatAccount } from '../../slices/web3ContractSlice';
import { useAppDispatch, useAppSelector } from '../../reducer/store';
import Utils from "../../utilities";

// import { Button } from 'react-bootstrap';
import styled from "styled-components";
// import { BiSearch } from "react-icons/bi";

import { Button } from 'react-bootstrap';
// import utils from '../../utilities';



const tabDataBlog = [
	{ Date: 'ETH/DAI', Trade: '$152.7', Status: '$605.2', Price: '$20000', Amount: '57.6%' },
	{ Date: 'ETH/USDT', Trade: '$152.7', Status: '$605.2', Price: '$21000', Amount: '57.6%' },
];



const UserDashboard = () => {
	const [showModal, setShowModal] = React.useState(false);
	const dispatch = useAppDispatch()
	const { web3, contract, accounts, socketContract, Provider } = useAppSelector((state) => state.web3Connect);
	const [usdprice, setusdprice] = useState();
	const [collateralRatio, setcollateralRatio] = useState(null);
	const [liquidationRatio, setLiquidationRatio] = useState(null);
	const [daiBalance, setdaiBalance] = useState(0);
	const [chcBalance, setchcBalance] = useState(0);
	const [balance, setbalance] = useState(0);
	const [daiFeed, setDaiFeed] = useState(0);
	const [chcFeed, setChcFeed] = useState(0);
	const [ethFeed, setEthFeed] = useState(0);
	const [data, setData] = useState(
		document.querySelectorAll("#status_wrapper tbody tr")
	);
	const [cdp, setCDP] = useState(0);
	const sort = 6;
	const activePag = useRef(0);
	const [test, settest] = useState(0);

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
	console.log("addrees", addrees);


	useEffect(() => {
		Utils.getCollateralizationRatio().then(function (data) {
			setcollateralRatio((Number(data) / 1E6).toFixed(2));
		});

		Utils.getCDPCount().then(function (data) {
			setCDP(Number(data));
		});

		Utils.liqRatio().then(function (data) {
			setLiquidationRatio((Number(data) / 1E6).toFixed(2));
		});

		Utils.getFeed("CHC").then(function (data) {
			setChcFeed((Number(data[1]) / 1E18).toFixed(2));
		});

		Utils.getFeed("DAI").then(function (data) {
			setDaiFeed((Number(data[1]) / 1E8).toFixed(2));
		});

		Utils.getFeed("ETH").then(function (data) {
			setEthFeed((Number(data[1]) / 1E8).toFixed(2));
		});

		Utils.getUserBalance(addrees, "DAI").then(function (data) {
			setdaiBalance(Number(data) / 1E18);
		});

		Utils.getUserBalance(addrees, "CHC").then(function (data) {
			setchcBalance(Number(data) / 1E18);
		});

		Utils.getUserBalance(addrees, "ETH").then(function (data) {
			setbalance(Number(data) / 1E18);
		});

	})
	const Dai = [
		{ Pool: 'DAI', Borrow: '267', Value: "$152.7", debt: "123", APY: "213", Reward: "reward" },
	];

	return (
		<>
			<Nav>
				<div className="title">
					<H4>Welcome!</H4>
				</div>
				{/* <img loading="lazy" width="50" height="50" src={home} alt="meta"
					className=" mr-2 object-contain cursor-pointer"
				/> */}
				{/* <div className="search" >
					<BiSearch />
					<input type="text" placeholder="Search" />
				</div> */}
				{/* <div>
					<div className="" >
						{addrees !== null ? (
							<>
								<Button
									type="button"
									style={{
										background: "linear-gradient(270deg, #EDC452 0.26%, #846424 99.99%, #846424 100%), #846424",
										color: "black",
									}}
									className=" font-medium
                                    rounded-lg text-sm  text-center inline-flex items-center 
                                    ">
									<img loading="lazy" width="30" height="30" src={meta1} alt="meta"
										className=" mr-2 object-contain cursor-pointer"
									/>
									<a>{addrees?.substring(0, 7) + "...."}</a>
								</Button>
							</>
						) : ("")}
					</div>
				</div> */}
				{/* <div>
					<img loading="lazy" src={home} alt="discount" />
				</div> */}
			</Nav>
			<div className="row">

				<div className="col-xl-12">
					<div className="card"
						style={{
							backgroundColor: "#211f21",
							borderRadius: "16px",
							color: "#846424",
						}}>
						<div className="card-header pb-0 d-block d-sm-flex flex-wrap border-0 align-items-center">
							<div className="me-auto mb-3">
								<h2 className="fs-28 font-w600 text-white">
									{/* {usdprice * web3.utils.fromWei(balance, 'ether')?.substring(0, 7) + "...."} */}

								</h2>
								{/* <div className='row sp20 mb-4 align-items-center'>
									<div className="d-flex col-xxl-4 align-items-center mt-sm-0 mt-3 justify-content-center">
										<div className="fs-18 font-w600 me-4">
											<span className="text-success pe-3">BUY</span>
											<span className="text-warning">$6,456</span>
										</div>
										<div className="fs-18 font-w600">
											<span className="text-danger pe-3">LEND</span>
											<span className="text-warning">$8,123</span>
										</div>
									</div>
								</div> */}
								{/* <p className="mb-0 fs-12 text-black">Lorem ipsum dolor sit amet, consectetur</p> */}
							</div>
							{/* {web3 ?
								(<span class="badge cursor-pointer"
									style={{
										height: "26px",
										width: "270px",
										color: "black",
										textTransform: "uppercase",
										fontStyle: "normal",
										fontWeight: "700",
										fontSize: "10px",
										background: "linear-gradient(270deg, #EDC452 0.26%, #846424 99.99%, #846424 100%), #846424",
										borderRadius: "40px",
									}}>{accounts[0]}</span>) : ("")} */}
							{/* <TokenButton /> */}
							{/* <Link to={"#"} className="btn btn-primary text-black light btn-rounded me-3  mb-3"><i className="las la-download scale5 me-2"></i>Get Report</Link> */}
						</div>
						<div className="card-body">
							<div className="row sp20 mb-4 align-items-center">
								<div className="col-xxl-8 d-flex flex-wrap justify-content-between align-items-center">
									<div className="px-2 info-group">
										<p className="fs-18 mb-1">Liquidation Ratio</p>
										<h2 className="fs-28 font-w600 text-white">
											{liquidationRatio}%
										</h2>
									</div>
									<div className="px-2 info-group">
										<p className="fs-14 mb-1" >COLLATERALIZATION Ratio</p>
										<h3 className="fs-20 font-w600 text-white">
											{collateralRatio}%
											{/* <svg
												width={14}
												height={14}
												viewBox="0 0 14 14"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M0 7L7.00001 -8.77983e-06L14 7H7.00001H0Z"
													fill="#2BC155"
												/>
											</svg> */}
										</h3>
									</div>
									<div className="px-2 info-group">
										<p className="fs-14 mb-1">ACTIVE CDPS</p>
										<h3 className="fs-20 font-w600 text-white">
											{cdp} CDPs
										</h3>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-6">
					<div className="card"
						style={{
							backgroundColor: "#211f21",
							borderRadius: "16px",
							color: "#846424",
						}}>
						<div className="card-body pt-4">
							<div className="w-100">
								<div className="d-flex flex-row justify-content-start align-items-center w-100">
									<H4>Wallet Balances</H4>
								</div>
								<table
									className="w-100"
									style={{ borderCollapse: "separate", borderSpacing: "0.5em" }}
								>
									<thead>
										<tr>
											<td>
												<span style={{ color: "#B79841" }}>ASSET</span>
											</td>
											<td>
												<span style={{ color: "#B79841" }}>BALANCE</span>
											</td>
											<td>
												<span style={{ color: "#B79841" }}>USD</span>
											</td>
											<td>
												<span style={{ color: "#B79841" }}> </span>
											</td>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<img src={Dash} alt="d" width={13} height={11} />
											</td>
											<td>
												<div
													style={{
														fontStyle: "normal",
														fontWeight: "400",
														fontSize: "12px",
														lineHeight: "15px",
														color: "#FFFFFF",
													}}
												>
													{daiBalance.toFixed(2)}
												</div>
											</td>
											<td>
												<div
													style={{
														fontStyle: "normal",
														fontWeight: "400",
														fontSize: "12px",
														lineHeight: "15px",
														color: "#FFFFFF",
													}}
												>
													${(daiBalance * daiFeed).toFixed(2)}
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<img src={C} alt="d" width={13} height={11} />
											</td>
											<td>
												<div
													style={{
														fontStyle: "normal",
														fontWeight: "400",
														fontSize: "12px",
														lineHeight: "15px",
														color: "#FFFFFF",
													}}
												>
													{chcBalance.toFixed(2)}
												</div>
											</td>
											<td>
												<div
													style={{
														fontStyle: "normal",
														fontWeight: "400",
														fontSize: "12px",
														lineHeight: "15px",
														color: "#FFFFFF",
													}}
												>
													${(chcBalance * chcFeed).toFixed(2)}
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<img src={Ether} alt="d" width={13} height={11} />
											</td>
											<td>
												<div
													style={{
														fontStyle: "normal",
														fontWeight: "400",
														fontSize: "12px",
														lineHeight: "15px",
														color: "#FFFFFF",
													}}
												>
													{balance.toFixed(2)}
												</div>
											</td>
											<td>
												<div
													style={{
														fontStyle: "normal",
														fontWeight: "400",
														fontSize: "12px",
														lineHeight: "15px",
														color: "#FFFFFF",
													}}
												>
													${(balance * ethFeed).toFixed(2)}
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-6">
					<div className="card"
						style={{
							backgroundColor: "#211f21",
							borderRadius: "16px",
							color: "#846424",
						}}>
						<div className="card-body pt-4">
							<div className="w-100">
								<div className="d-flex flex-row align-items-center justify-content-between mb-4">
									<H4>Price Feeds</H4>
								</div>
								<div className="d-flex flex-row align-items-center justify-content-between my-2">
									<div
										style={{
											fontStyle: "normal",
											fontWeight: "400",
											fontSize: "12px",
											lineHeight: "15px",
											color: "#FFFFFF",
										}}
									>
										DAI/USD
									</div>
									<div
										style={{
											fontStyle: "normal",
											fontWeight: "400",
											fontSize: "12px",
											lineHeight: "15px",
											color: "#FFFFFF",
										}}
									>
										{daiFeed} USD
									</div>
								</div>
								<div className="d-flex flex-row align-items-center justify-content-between my-2">
									<div
										style={{
											fontStyle: "normal",
											fontWeight: "400",
											fontSize: "12px",
											lineHeight: "15px",
											color: "#FFFFFF",
										}}
									>
										CHC/USD
									</div>
									<div
										style={{
											fontStyle: "normal",
											fontWeight: "400",
											fontSize: "12px",
											lineHeight: "15px",
											color: "#FFFFFF",
										}}
									>
										{chcFeed} USD
									</div>
								</div>
								<div className="d-flex flex-row align-items-center justify-content-between my-2">
									<div
										style={{
											fontStyle: "normal",
											fontWeight: "400",
											fontSize: "12px",
											lineHeight: "15px",
											color: "#FFFFFF",
										}}
									>
										ETH/USD
									</div>
									<div
										style={{
											fontStyle: "normal",
											fontWeight: "400",
											fontSize: "12px",
											lineHeight: "15px",
											color: "#FFFFFF",
										}}
									>
										{ethFeed} USD
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <div className="col-xl-12">
					<div className="card"
						style={{
							backgroundColor: "#211f21",
							borderRadius: "16px",
							color: "#846424",
						}}>
						<Tab.Container defaultActiveKey="All">
							<div className="card-header border-0 pb-2 flex-wrap">
								<h4 className="heading ">Your Positions</h4>
							</div>
							<div className="card-body pt-0 pb-0">
								<Tab.Content >
									<Tab.Pane eventKey="All">
										<div className="table-responsive dataTabletrade ">
											<div id="status_wrapper" className="dataTables_wrapper no-footer">
												<table id="example" className="table display dataTable no-footer" style={{ minWidth: "845px" }}>
													<thead>
														<tr
															style={{
																color: "#846424",
															}}>
															<th>Pool</th>
															<th>Borrow</th>
															<th>Current Value</th>
															<th>Debt Ratio</th>
															<th>APY </th>
															<th>Reward</th>
															<th className='text-center'>Action</th>
														</tr>
													</thead>
													<tbody className='text-white'>
														{Dai.map((item, index) => (
															<tr key={index}>
																<td>{item.Pool}</td>
																<td>{item.Borrow}</td>
																<td>{item.Value}</td>
																<td>{item.debt}</td>
																<td>{item.APY}</td>
																<td>{item.Reward}</td>
																<td>
																	<Link to={"/accounts/loan/dai"}>
																		<span className="badge cursor-pointer"
																			style={{
																				height: "22px",
																				width: "80px",
																				color: "#846424",
																				textTransform: "uppercase",
																				fontStyle: "normal",
																				fontWeight: "700",
																				fontSize: "10px",
																				backgroundColor: "#1A1917",
																				borderRadius: "16px",
																				border: "1px solid transparent",
																				borderColor: "#846424",
																				
																			}}>Repay</span>
																	</Link>
																	<Link to={"/accounts/loan/dai"}>
																		<span className="badge cursor-pointer ml-3"
																			style={{
																				height: "22px",
																				width: "80px",
																				color: "black",
																				textTransform: "uppercase",
																				fontStyle: "normal",
																				fontWeight: "700",
																				fontSize: "10px",
																				background: "linear-gradient(270deg, #EDC452 0.26%, #846424 99.99%, #846424 100%), #846424",
																				borderRadius: "40px",
																			}}>Claim</span>
																	</Link>
																</td>
															</tr>
														))}
													</tbody>
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
														
															onClick={() =>
																activePag.current > 0 &&
																onClick(activePag.current - 1)
															}
														>
															<i>
																<svg style={{ width: "20px", height: "20px", marginTop: "12" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z" /></svg>
															</i>
														</Link>
														<span className='text-white'>
															{paggination.map((number, i) => (
																<Link
																	key={i}
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
															onClick={() =>
																activePag.current + 1 < paggination.length &&
																onClick(activePag.current + 1)
															}
														>
															<i>
																<svg style={{ width: "20px", height: "20px", marginTop: "10" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z" /></svg>
															</i>
														</Link>
													</div>
												</div>
											</div>
										</div>
									</Tab.Pane>
									<Tab.Pane eventKey="Order">
										<OrderTab />
									</Tab.Pane>
									<Tab.Pane eventKey="Trade">
										<TradeTab />
									</Tab.Pane>
								</Tab.Content>
							</div>
						</Tab.Container>
					</div>
				</div> */}
				{/* <button
					className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
					type="button"
					onClick={() => setShowModal(true)}
				>
					Open regular modal
				</button>
				{showModal ? (
					<>
						<div
							className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
						>
							<div className="relative w-auto my-6 mx-auto max-w-3xl">
								<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
									<div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
										<h3 className="text-3xl font-semibold">
											Modal Title
										</h3>
										<button
											className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
											onClick={() => setShowModal(false)}
										>
											<span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
												×
											</span>
										</button>
									</div>
									<div className="relative p-6 flex-auto">
										<p className="my-4 text-slate-500 text-lg leading-relaxed">
											I always felt like I could do anything. That’s the main
											thing people are controlled by! Thoughts- their perception
											of themselves! They're slowed down by their perception of
											themselves. If you're taught you can’t do anything, you
											won’t do anything. I was taught I could do everything.
										</p>
									</div>
									<div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
										<button
											className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
											type="button"
											onClick={() => setShowModal(false)}
										>
											Close
										</button>
										<button
											className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
											type="button"
											onClick={() => setShowModal(false)}
										>
											Save Changes
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
					</>
				) : null} */}
			</div >
		</>
	)
}
export default UserDashboard;







const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: white;
  z-index: 99;
  .title {
    h1 {
      span {
        margin-left: 0.5rem;
        color: #ffc107;
        font-family: "Normal", cursive;
        letter-spacing: 0.2rem;
      }
    }
  }
  .search {
    background-color: #212121;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1rem 1rem 1rem;
    border-radius: 1rem;
    svg {
      color: #ffc107;
    }
    input {
      background-color: transparent;
      border: none;
      color: #ffc107;
      font-family: "Normal", cursive;
      letter-spacing: 0.3rem;
      &:focus {
        outline: none;
      }
      &::placeholder {
        color: #ffc107;
        font-family: "Permanent Marker", cursive;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    .title {
      h1 {
        span {
          display: block;

          margin: 1rem 0;
          /* letter-spacing: 0; */
        }
      }
    }
  }
`;



