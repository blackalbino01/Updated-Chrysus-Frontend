import React from "react";
// import { DataGrid } from "@mui/x-data-grid";
// import { FormActionButton } from "../buttons/form_action_button";
// import { Table } from "../table";
// import { Body, H4, P } from "../typography";
import styled from "styled-components";
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
import Utils from "../../utilities";


export const MintPosition = () => {
	// const [modalShow, setModalShow] = useState(false);
	// const [modalShowDAI, setModalShowDAI] = useState(false);
	// const [visible, setvisible] = useState(false);
	const [data, setData] = useState(
		document.querySelectorAll("#status_wrapper tbody tr")
	);
	const [balance, setbalance] = useState(0);
	const [daiBalance, setdaiBalance] = useState(0);
	const sort = 6;
	const activePag = useRef(0);
	const [test, settest] = useState(0);
	const addrees = localStorage.getItem("accounts")

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

	useEffect(() => {
		Utils.getUserBalance(addrees, "DAI").then(function (data) {
			setdaiBalance(Number(data) / 1E18);
		});

		Utils.getUserBalance(addrees, "ETH").then(function (data) {
			setbalance(Number(data) / 1E18);
		});

	});


	const Eth = [
		{ Date: 'ETH', Price: '120%', Amount: balance.toFixed(2) },
	];

	const Dai = [
		{ Date: 'DAI', Price: '267%', Amount: daiBalance.toFixed(2) },
	];


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

	const Dais = [
		{ Pool: 'DAI', Borrow: '267', Value: "$152.7", liquidation: "123"},
	];
	return (
		<Section>
			<div className="row">
				<div className="col-xl-12">
					<div className="card"
						style={{
							backgroundColor: "#211f21",
							borderRadius: "16px",
							color: "#846424",
						}}>
						<Tab.Container defaultActiveKey="All">
							<div className="card-header border-0 pb-2 flex-wrap">
								<h4 className="heading ">Mint Positions</h4>
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
															<th> liquidation price</th>
															<th>Action</th>
														</tr>
													</thead>
													<tbody className='text-white'>
														{Dais.map((item, index) => (
															<tr key={index}>
																<td>{item.Pool}</td>
																<td>{item.Borrow}</td>
																<td>{item.Value}</td>
																<td>{item.liquidation}</td>
																<td>
																	<Link >
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

																			}}>Withdraw</span>
																	</Link>
																	{/* <Link to={"/accounts/loan/dai"}>
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
																	</Link> */}
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
																<svg style={{ width: "15px", height: "15px", marginTop: "12" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z" /></svg>
															</i>
														</Link>
														<span className='text-white'>
															{paggination.map((number, i) => (
																<Link
																style={{
																	fontSize:"10px",
																  }}
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
																<svg style={{ width: "15px", height: "15px", marginTop: "10", marginLeft:"10px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z" /></svg>
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
            <div style={{
                paddingBottom:"220px"
            }}></div>
		</Section>
	); 
};


const Section = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;
  background-color: black;
  .grid {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
    margin-top: 2rem;
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