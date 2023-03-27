import React, { useState } from 'react';
import { TokenButton } from '../buttons';





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
                                    <div className="buy-coin">
                                        <h2 className='text-center text-white'>Your Info</h2>
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
                                        </div>
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