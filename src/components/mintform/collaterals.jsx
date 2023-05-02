import React from "react";
// import { DataGrid } from "@mui/x-data-grid";
// import { FormActionButton } from "../buttons/form_action_button";
// import { Table } from "../table";
// import { Body, H4, P } from "../typography";
import { Info } from "react-feather";
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { DepositDAIButton } from "../buttons";
import { DepositETHButton } from "../buttons";
// import { PrimaryGradientButton } from "../buttons/primary_gradient.button";
import { Transferblack, logoo, LeafGold, SwapGold, CartGold, UmbrellaGold, Chrysus, USDTWhite, XLMWhite, XRPWhite, DAIWhite, ETHWhite } from "../../assets";
// import { COLORS } from "src/assets/styles/theme";
import { Dropdown, Tab, Nav } from 'react-bootstrap';
// import { useAppDispatch, useAppSelector } from '../../reducer/store';
// import { MintButton } from "../buttons/mint";
import OrderTab from '../Future/OrderTab';
import TradeTab from '../Future/TradeTab';
import { useEffect, useState, useRef } from 'react';
import Toltip from "../buttons/toltip";
// import { FiAlertCircle } from "react-icons/fi";

// const orderTable = [
// 	{ email: 'samantha@mail.com', title: 'Samanta William', price: '$75,00', status: 'Paid', statusChange: 'success' },
// 	{ email: 'tony@gmail.com', title: 'Tony Soap', price: '$80,00', status: 'Unpaid', statusChange: 'danger' },
// 	{ email: 'demo@mail.com', title: 'Nela Vita', price: '$90,00', status: 'Paid', statusChange: 'success' },
// 	{ email: 'karen@mail.com', title: 'Karen Hope', price: '$70,00', status: 'Pending', statusChange: 'warning' },
// 	{ email: 'nadia@mail.com', title: 'Nadia Edja', price: '$76,00', status: 'Unpaid', statusChange: 'danger' },
// 	{ email: 'samantha@mail.com', title: 'Samanta William', price: '$75,00', status: 'Paid', statusChange: 'success' },
// 	{ email: 'tony@gmail.com', title: 'Tony Soap', price: '$80,00', status: 'Unpaid', statusChange: 'danger' },
// 	{ email: 'demo@mail.com', title: 'Nela Vita', price: '$90,00', status: 'Paid', statusChange: 'success' },
// 	{ email: 'karen@mail.com', title: 'Karen Hope', price: '$70,00', status: 'Pending', statusChange: 'warning' },
// 	{ email: 'nadia@mail.com', title: 'Nadia Edja', price: '$76,00', status: 'Unpaid', statusChange: 'danger' },
// ];

// const tabDataBlog = [
// 	{ Date: 'ETH', Trade: '%', Status: '110%', Price: '%', Amount: '0' },
// 	{ Date: 'DAI', Trade: '%', Status: '110%', Price: '%', Amount: '0' },
// ];

const Eth = [
	{ Date: 'ETH', Trade: '%', Status: '110%', Price: '%', Amount: '0' },
];

const Dai = [
	{ Date: 'DAI', Trade: '%', Status: '110%', Price: '%', Amount: '0' },
];
export const Collaterals = () => {
	// const [modalShow, setModalShow] = useState(false);
	// const [modalShowDAI, setModalShowDAI] = useState(false);
	// const [visible, setvisible] = useState(false);
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

	// const checkboxFun = (type) => {
	// 	setTimeout(() => {
	// 		const checkbox = document.querySelectorAll('.order-history input');
	// 		const motherCheckBox = document.querySelector('.sorting_asc input');
	// 		for (let i = 0; i < checkbox.length; i++) {
	// 			const element = checkbox[i]
	// 			if (type === 'all') {
	// 				if (motherCheckBox.checked) {
	// 					element.checked = true
	// 				} else {
	// 					element.checked = false
	// 				}
	// 			} else {
	// 				if (!element.checked) {
	// 					motherCheckBox.checked = false
	// 					break
	// 				} else {
	// 					motherCheckBox.checked = true
	// 				}
	// 			}
	// 		}
	// 	}, 200);
	// }


	return (
		<>
			<div className="row mt-5">
				<div className="col-xl-12">
					<div className="card" style={{
						backgroundColor: "#211f21",
						borderRadius: "16px",
						color: "#846424",
					}}>
						<div className="card-body">
							<Tab.Container defaultActiveKey="All">
								<div className="card-header border-0 pb-2 flex-wrap">
									<h4 className="heading "> Mint Chrysus Coin (CHC)</h4>
									{/* <a className="text-white">Each Collateral type has its own risk parameters.</a> */}
									{/* <div 
									onMouseEnter={()=>setvisible(true)}
									onMouseLeave = {()=>setvisible(false)}
									style={{ position: "absolute", right: 30, top: 30 }}>
										<Info text = {"Something"}/>
									</div> */}
									<div style={{ position: "absolute", right: 30, top: 30 }}>
										<Toltip style={{ position: "absolute", right: 30, top: 30 }}>
											<Info />
										</Toltip>
									</div>
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
															<tr
																style={{
																	color: "#846424",
																}}>
																{/* <th className="sorting_asc">
																	<input type="checkbox" className="form-check-input" id="checkAll" required=""
																		onClick={() => checkboxFun('all')}
																	/>
																</th> */}
																{/* <th></th> */}
																<th>Collateral</th>
																<th>Interest Rate</th>
																<th>LIQ Ratio</th>
																<th>Utilization Rate</th>
																<th>Your Balance</th>
																{/* <th>Reward</th> */}
																<th>Action</th>
															</tr>
														</thead>
														<tbody className='text-white'>
															{Eth.map((item, index) => (
																<tr key={index}>
																	{/* <td>
																		<div className="checkbox me-0 align-self-center">
																			<div className="custom-control custom-checkbox ">
																				<input type="checkbox" className="form-check-input" id={`checkbox${index + 1}`} required=""
																					style={{
																						backgroundColor: "#757375"
																					}}
																					onClick={() => checkboxFun()}
																				/>
																				<label className="custom-control-label" htmlFor={`checkbox${index + 1}`}></label>
																			</div>
																		</div>
																	</td> */}
																	<td>{item.Date}</td>
																	<td>{item.Trade}</td>
																	<td>{item.Status}</td>
																	<td>{item.Price}</td>
																	<td>{item.Amount}</td>
																	<td>
																		<Link to={"ethdeposite"}>
																			<span className="badge cursor-pointer"
																				// onClick={() => setModalShow(true)}
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
																				}}>Deposit</span>
																		</Link>
																		{/* <DepositColletrals show={modalShow} onHide={() => setModalShow(false)} /> */}
																	</td>
																</tr>
															))}
															{Dai.map((item, index) => (
																<tr key={index}>
																	{/* <td>
																		<div className="checkbox me-0 align-self-center">
																			<div className="custom-control custom-checkbox ">
																				<input type="checkbox" className="form-check-input" id={`checkbox${index + 1}`} required=""
																					style={{
																						backgroundColor: "#757375"
																					}}
																					onClick={() => checkboxFun()}
																				/>
																				<label className="custom-control-label" htmlFor={`checkbox${index + 1}`}></label>
																			</div>
																		</div>
																	</td> */}
																	<td>{item.Date}</td>
																	<td>{item.Trade}</td>
																	<td>{item.Status}</td>
																	<td>{item.Price}</td>
																	<td>{item.Amount}</td>
																	<td>
																		<Link to={"daideposite"}>
																			<span className="badge cursor-pointer"
																				// onClick={() => setModalShowDAI(true)}
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
																				}}>Deposit</span>
																		</Link>
																		{/* <DepositColletralsDAI show={modalShowDAI} onHide={() => setModalShowDAI(false)} /> */}
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
																// style={{
																// 	backgroundColor: "#757375",
																// 	borderRadius: "16px",
																// }}
																// to="/future"
																onClick={() =>
																	activePag.current > 0 &&
																	onClick(activePag.current - 1)
																}
															>
																{/* <i className="fa fa-angle-double-left" ></i> */}
																<i>
																	<svg style={{width:"20px", height:"20px", marginTop:"10"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z" /></svg>
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
																// style={{
																// 	backgroundColor: "#757375",
																// 	borderRadius: "16px",
																// }}
																className="paginate_button next text-white mt-2"
																// to="/future"
																onClick={() =>
																	activePag.current + 1 < paggination.length &&
																	onClick(activePag.current + 1)
																}
															>
																{/* <i className="fa fa-angle-double-right" ></i> */}
																<i>
																	<svg style={{width:"20px", height:"20px", marginTop:"10"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z" /></svg>
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
						<div style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}></div>
						<div className="mt-4"></div>
						<div className="w-100 d-flex flex-row justify-content-start p-3">

						</div>
					</div>
				</div>

			</div>
		</>
	);
};



const DepositColletrals = (props) => {

	return (
		<div>
			<Modal className="items-center"
				{...props}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header className=" flex flex-row flex-wrap text-center items-center py-[6px] px-4 bg-discount-gradient ">
					<div
						style={{
							width: "100%",
							height: "3px",
							background:
								"linear-gradient(270deg, #EDC452 0.26%, #846424 99.99%, #846424 100%), #846424",
							borderRadius: "40px",
						}}></div>
					<Modal.Title>
						<h4 className="primary-gradient-text">Deposit the ETH</h4>
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
					<div className="text-center">
						<DepositETHButton className="mt-3">
							<div className="d-flex flex-row align-items-center justify-content-center">
								Swap CHC
								<img
									className="mx-2"
									src={Transferblack}
									alt="transfer-black.svg"
								/>
							</div>
						</DepositETHButton>
					</div>
				</Modal.Body>
				{/* <Modal.Footer>
		  <Button onClick={props.onHide}>Close</Button>
		</Modal.Footer> */}
			</Modal>
		</div>
	)
}

const DepositColletralsDAI = (props) => {

	return (
		<div>
			<Modal className="items-center"
				{...props}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header className=" flex flex-row flex-wrap text-center items-center py-[6px] px-4 bg-discount-gradient ">
					<div
						style={{
							width: "100%",
							height: "3px",
							background:
								"linear-gradient(270deg, #EDC452 0.26%, #846424 99.99%, #846424 100%), #846424",
							borderRadius: "40px",
						}}></div>
					<Modal.Title>
						<h4 className="primary-gradient-text">Deposit the DAI</h4>
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
					<div className="text-center">
						<DepositDAIButton className="mt-3">
							<div className="d-flex flex-row align-items-center justify-content-center">
								Swap CHC
								<img
									className="mx-2"
									src={Transferblack}
									alt="transfer-black.svg"
								/>
							</div>
						</DepositDAIButton>
					</div>
				</Modal.Body>
				{/* <Modal.Footer>
		  <Button onClick={props.onHide}>Close</Button>
		</Modal.Footer> */}
			</Modal>
		</div>
	)
}