import React, { useState, useEffect, useRef } from 'react';
import { TokenButton } from '../buttons';
import { H4 } from '../typography/h4';
import { Dash, C, Ether } from '../../assets';
import { Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import OrderTab from '../Future/OrderTab';
import TradeTab from '../Future/TradeTab';
import { loadBlockchain, loadWalletConnect, updatAccount } from '../../slices/web3ContractSlice';
import { useAppDispatch, useAppSelector } from '../../reducer/store';
import {Button} from 'react-bootstrap';




const tabDataBlog = [
	{ Date: 'ETH/DAI', Trade: '$152.7', Status: '$605.2', Price: '$20000', Amount: '57.6%' },
	{ Date: 'ETH/USDT', Trade: '$152.7', Status: '$605.2', Price: '$21000', Amount: '57.6%' },
];



const UserDashboard = () => {
	const dispatch = useAppDispatch()
	const { web3, balance, contract, accounts, socketContract, Provider } = useAppSelector((state) => state.web3Connect);
	const [usdprice, setusdprice] = useState();
	const [data, setData] = useState(
		document.querySelectorAll("#status_wrapper tbody tr")
	);
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

	useEffect(() => {
		async function getEtherPriceInUSD() {
			try {
				const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
				const data = await response.json();
				const etherPriceUSD = data.ethereum.usd;
				setusdprice(etherPriceUSD)
				console.log(`Current Ether price: $${etherPriceUSD}`);
				return etherPriceUSD;
			} catch (error) {
				console.error('Error fetching Ether price:', error);
			}
		}
		getEtherPriceInUSD()
	})
	console.log(usdprice * balance)

	return (
		<>
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
								<h4 className="fs-20  font-w600">Your Balance</h4>
								<h2 className="fs-28 font-w600 text-white">
									{/* {usdprice * web3.utils.fromWei(balance, 'ether')?.substring(0, 7) + "...."} */}
									{web3 ? (<>${Number(usdprice * web3.utils.fromWei(balance, 'ether')).toFixed(2)}</>) : ("")}
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
								{web3 ?
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
										}}>{accounts[0]}</span>) : ("")}
							{/* <TokenButton /> */}
							{/* <Link to={"#"} className="btn btn-primary text-black light btn-rounded me-3  mb-3"><i className="las la-download scale5 me-2"></i>Get Report</Link> */}
						</div>
						<div className="card-body">
							<div className="row sp20 mb-4 align-items-center">
								<div className="col-xxl-8 d-flex flex-wrap justify-content-between align-items-center">
									<div className="px-2 info-group">
										<p className="fs-18 mb-1">TOTAL DAI SUPPLY</p>
										<h2 className="fs-28 font-w600 text-white">
											95,314,510 DAI
										</h2>
									</div>
									<div className="px-2 info-group">
										<p className="fs-14 mb-1" >COLLATERALIZATION</p>
										<h3 className="fs-20 font-w600 text-success">
											318%
											<svg
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
											</svg>
										</h3>
									</div>
									<div className="px-2 info-group">
										<p className="fs-14 mb-1">ACTIVE CDPS</p>
										<h3 className="fs-20 font-w600 text-white">
											4,124 CDPs
										</h3>
									</div>
									{/* <div className="px-2 info-group">
										<p className="fs-14 mb-1">Market Cap</p>
										<h3 className="fs-20 font-w600 text-black">
											$874.11B
										</h3>
									</div> */}
								</div>
								{/* <div className="d-flex col-xxl-4 align-items-center mt-sm-0 mt-3 justify-content-center">
									<div className="fs-18 font-w600 me-4">
										<span className="text-success pe-3">BUY</span>
										<span className="text-black">$6,456</span>
									</div>
									<div className="fs-18 font-w600">
										<span className="text-danger pe-3">SELL</span>
										<span className="text-black">$8,123</span>
									</div>
								</div> */}
							</div>
							{/* <div className="tradingview-widget-container">
								<IntradayChart />
							</div> */}
						</div>
					</div>
				</div>
				<div className="col-xl-4">
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
										{/* one */}
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
													512,534
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
													$512,535
												</div>
											</td>
											{/* <td>
												<Button
													className="rounded-pill px-4 py-2"
													color="primary"
													outline={true}
													style={{
														fontStyle: "normal",
														fontWeight: "700",
														fontSize: "12px",
														lineHeight: "16px",
													}}
												>
													SEND
												</Button>
											</td> */}
										</tr>
										{/* tow */}
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
													0.912
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
													$9,052.86
												</div>
											</td>
											{/* <td>
												<Button
													className="rounded-pill px-4 py-2"
													color="primary"
													outline={true}
													style={{
														fontStyle: "normal",
														fontWeight: "700",
														fontSize: "12px",
														lineHeight: "16px",
													}}
												>
													SEND
												</Button>
											</td> */}
										</tr>
										{/* three */}
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
													898.301
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
													$130,073
												</div>
											</td>
											{/* <td>
												<Button
													className="rounded-pill px-4 py-2"
													color="primary"
													outline={true}
													style={{
														fontStyle: "normal",
														fontWeight: "700",
														fontSize: "12px",
														lineHeight: "16px",
													}}
												>
													SEND
												</Button>
											</td> */}
										</tr>
									</tbody>
								</table>
							</div>
							<div className="w-100 mt-5">
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
										1.00 USD
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
										1,045.07 USD
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
										312.45 USD
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-8">
					<div className="card"
						style={{
							backgroundColor: "#211f21",
							borderRadius: "16px",
							color: "#846424",
						}}>
						<Tab.Container defaultActiveKey="All">
							<div className="card-header border-0 pb-2 flex-wrap">
								<h4 className="heading ">Your Positions</h4>
								{/* <>
									<Nav className="order nav nav-tabs">
										<Nav.Link as="button" eventKey="All" type="button">Order</Nav.Link>
										<Nav.Link as="button" eventKey="Order" type="button">Order History</Nav.Link>
										<Nav.Link as="button" eventKey="Trade" type="button">Trade Histroy</Nav.Link>
									</Nav>
								</> */}
							</div>
							<div className="card-body pt-0 pb-0">
								<Tab.Content >
									<Tab.Pane eventKey="All">
										<div className="table-responsive dataTabletrade ">
											<div id="status_wrapper" className="dataTables_wrapper no-footer">
												<table id="example" className="table display dataTable no-footer" style={{ minWidth: "845px" }}>
													<thead>
														<tr className='text-white'>
															<th>Pool</th>
															<th>Borrow</th>
															<th>Current Value</th>
															<th>Debt Ratio</th>
															<th>APY </th>
															<th>Reward</th>
															<th className="text-end">Action</th>
														</tr>
													</thead>
													<tbody className='text-white'>
														{tabDataBlog.map((item, index) => (
															<tr key={index}>
																<td>{item.Date}</td>
																<td>{item.Trade}</td>
																<td>{item.Status}</td>
																<td>{item.Price}</td>
																<td>{item.Amount}</td>
																<td className="text-end">--</td>
																<td>
																	<span class="badge cursor-pointer"
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
																		}}>Withdraw</span>																</td>
																<td>
																	<span class="badge cursor-pointer"
																		style={{
																			color: "black",
																			fontStyle: "normal",
																			height: "22px",
																			width: "80px",
																			fontWeight: "700",
																			fontSize: "10px",
																			textTransform: "uppercase",
																			background: "linear-gradient(270deg, #EDC452 0.26%, #846424 99.99%, #846424 100%), #846424",
																			borderRadius: "40px",
																		}}>Repay</span>
																</td>															</tr>
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
															className="paginate_button previous text-white"
															// to="/future"
															style={{
																backgroundColor: "#757375",
																borderRadius: "16px",
															}}
															onClick={() =>
																activePag.current > 0 &&
																onClick(activePag.current - 1)
															}
														>
															<i className="fa fa-angle-double-left" ></i>
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
															className="paginate_button next text-white"
															// to="/future"
															style={{
																backgroundColor: "#757375",
																borderRadius: "16px",
															}}
															onClick={() =>
																activePag.current + 1 < paggination.length &&
																onClick(activePag.current + 1)
															}
														>
															<i className="fa fa-angle-double-right" ></i>
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
				</div>
			</div>
		</>
	)
}
export default UserDashboard;
