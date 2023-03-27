import React, { useState } from 'react';
import { TokenButton } from '../buttons';
import { WalletDropdown } from '../dropdowns';
import { H4 } from '../typography/h4';
import { Dash, C, Ether } from '../../assets';
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
// import { ChevronDown, ChevronUp } from "react-feather";




const UserDashboard = () => {



	return (
		<div>
			<div><h1 className="mb-2" style={{ color: "#846424", paddingBottom: "10px" }}>Welcome Back!</h1></div>
			<div className="row ">
				<div className="col">
					<div className="row">
						<div className="col-xl-12" style={{
							backgroundColor: "#211f21",
							borderRadius: "16px",
							color: "#846424",
							paddingBottom: "10px"
						}}>
							<div className="card">
								<div className="card-body">
									{/* <div className="w-100 d-flex flex-row justify-content-between align-items-center">
										<div className="position-relative">
											Metamask
											<span
												className="position-absolute translate-middle p-1 bg-success rounded-circle"
												style={{
													top: 9,
													right: -20,
												}}
											>
												<span className="visually-hidden">New alerts</span>
											</span>
										</div>
										<WalletDropdown
											onChange={(e) => { }}
											items={[
												"0xee42..0Dz4",
												"0xee42..0Dz5",
												"0xee42..0Dz6",
												"0xee42..0Dz7",
											]}
										/>
									</div> */}
									<div className="buy-coin row mt-5">
										{/* Wallet balances */}
										<div className="w-100  col">
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
										{/* Price Feeds */}
										<div className="w-100 col">
											{/* heading */}
											<div className="d-flex flex-row align-items-center justify-content-between mb-4">
												<H4>Price Feeds</H4>
												{/* <Link
													to="#"
													style={{
														fontStyle: "normal",
														fontWeight: "400",
														fontSize: "12px",
														lineHeight: "15px",
														textDecorationLine: "underline",
														color: "#FFFFFF",
														opacity: "0.5",
													}}
												>
													View price feeds
												</Link> */}
											</div>
											{/* single item */}
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
											{/* single item */}
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
											{/* <div className="d-flex flex-row align-items-center justify-content-center my-2">
												<Link
													to="#"
													style={{
														fontStyle: "normal",
														fontWeight: "400",
														fontSize: "12px",
														lineHeight: "15px",
														textDecorationLine: "underline",
														color: "#FFFFFF",
														opacity: "0.5",
													}}
												>
													View more
												</Link>
											</div> */}
										</div>
										{/* System Info */}
										<div className="w-100 col ml-5">
											{/* heading */}
											<div className="d-flex mb-4 flex-row align-items-center justify-content-between">
												<H4>System Info</H4>
												{/* <Link
													to="#"
													style={{
														fontStyle: "normal",
														fontWeight: "400",
														fontSize: "12px",
														lineHeight: "15px",
														textDecorationLine: "underline",
														color: "#FFFFFF",
														opacity: "0.5",
													}}
												>
													View chc.calc
												</Link> */}
											</div>
											{/* single item */}
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
													COLLATERALIZATION
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
													318%
												</div>
											</div>
											{/* single item */}
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
													TOTAL DAI SUPPLY
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
													95,314,510 DAI
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
													ACTIVE CDPS
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
													4,124 CDPs
												</div>
											</div>
										</div>
										{/* <h2 className='text-center text-white'>Your Info</h2>
                                        <div className='row text-center  mt-5'>
                                            <div className="col mb-5">
                                                <h4>Your Balance</h4>
                                                <span className='text-white'> $0.00</span>
                                            </div>
                                            <div className="col">
                                                <h4>Total Debt Value</h4>
                                                <span className='text-white'> $52.7</span>
                                            </div>
                                            <div className="col">
                                                <h4>Rewards</h4>
                                                <span className='text-white'> 2.86</span>
                                            </div>
                                            <div className='text-center'>
                                                <TokenButton  className='my-3'/>
                                            </div>
                                        </div> */}
										<div className="coin-img">
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <div className="col-xl-4">
					<div className="row">
						
						<div className="col-xl-12 col-sm-6">

							<div className="card">
								<div className="card-header py-2">
									<h2 className="heading">Order Book <span>(BTC/USDT)</span></h2>
								</div>
								<div className="card-body pt-0 pb-3 px-2">
									<Tab.Container defaultActiveKey="Openorder">
										<nav className="buy-sell style-1">
											<Nav className=" nav-tabs" id="nav-tab1" role="tablist">
												<Nav.Link as="button" className="nav-link " eventKey="Openorder" type="button" >Open Orders</Nav.Link>
												<Nav.Link as="button" className="nav-link" eventKey="Orderhistory" type="button" >Order History</Nav.Link>
											</Nav>
										</nav>
										<Tab.Content>
											<Tab.Pane eventKey="Openorder" >
												<div className="list-row-head">
													<span>Price</span>
													<span>Size</span>
													<span className="text-end">Total</span>
												</div>
												<div className="list-table danger">
													{listData.map((data, i) => (
														<div className="list-row" key={i}>
															<span>19852.63</span>
															<span>0.050300</span>
															<span className="text-end">2.362877</span>
															<div className="bg-layer"></div>
														</div>
													))}
												</div>
												<div className="list-bottom-info">
													<h6 className="text-danger mb-0">19858.19 <i className="fa-solid fa-caret-up"></i></h6>
												</div>
												<div className="list-table success">
													{listData.map((data, i) => (
														<div className="list-row" key={i}>
															<span>19852.63</span>
															<span>0.050300</span>
															<span className="text-end">2.362877</span>
															<div className="bg-layer"></div>
														</div>
													))}
												</div>
											</Tab.Pane>
											<Tab.Pane eventKey="Orderhistory" >
												<div className="list-row-head">
													<span>Price</span>
													<span>Size</span>
													<span className="text-end">Total</span>
												</div>
												<div className="list-table danger">
													{listData.map((data, i) => (
														<div className="list-row" key={i}>
															<span>19852.63</span>
															<span>0.050300</span>
															<span className="text-end">2.362877</span>
															<div className="bg-layer"></div>
														</div>
													))}
												</div>
												<div className="list-bottom-info">
													<h6 className="text-danger mb-0">19858.19 <i className="fa-solid fa-caret-up"></i></h6>
												</div>
												<div className="list-table success">
													{listData.map((data, i) => (
														<div className="list-row" key={i}>
															<span>19852.63</span>
															<span>0.050300</span>
															<span className="text-end">2.362877</span>
															<div className="bg-layer"></div>
														</div>
													))}
												</div>
											</Tab.Pane>
										</Tab.Content>
									</Tab.Container>
								</div>
							</div>
						</div>
						<div className="col-xl-12 col-sm-6 server-chart">
							<div className="card">
								<div className="card-header border-0 pb-0">
									<h2 className="heading mb-0">Server Status</h2>
								</div>
								<div className="card-body pt-0 custome-tooltip">
									<div className="d-flex server-status">
										<div>
											<span>Country</span>
											<h4 className="fs-14 mb-0">Indonesia</h4>
										</div>
										<div>
											<span>Domain</span>
											<h4 className="fs-14 mb-0">website.com</h4>
										</div>
										<div>
											<span><i className="fa-solid fa-caret-up text-secondary scale-2"></i></span>
											<h4 className="fs-14 mb-0">2.0 mbps</h4>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div> */}
			</div>
		</div>
	)
}
export default UserDashboard;