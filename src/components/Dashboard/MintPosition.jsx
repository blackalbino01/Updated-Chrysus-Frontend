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
	const [collateralRatio, setcollateralRatio] = useState(0);
	const [liquidationRatio, setLiquidationRatio] = useState(0);
	const [data, setData] = useState(
		document.querySelectorAll("#status_wrapper tbody tr")
	);
	const [position, setposition] = useState([]);
	const sort = 6;
	const activePag = useRef(0);
	const [test, settest] = useState(0);
	const addrees = localStorage.getItem("accounts")
	const [feed, setFeed] = useState(0);

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


	useEffect(() => {
		Utils.getCollateralizationRatio().then(function (data) {
			setcollateralRatio((Number(data) / 1E6).toFixed(2));
		});

		Utils.liqRatio().then(function (data) {
			setLiquidationRatio((Number(data) / 1E6).toFixed(2));
		});

	})

	useEffect(() => {
		setData(document.querySelectorAll("#status_wrapper tbody tr"));
		//chackboxFun();
	}, [test]);

	useEffect(() => {
		Utils.getMintPositions().then(function (data) {
			setposition(data)
		});

		Utils.getFeed("CHC").then(function (data) {
			setFeed((Number(data[1]) / 1E18).toFixedNoRounding(2));
		});
	});



	Number.prototype.toFixedNoRounding = function (n) {
		const reg = new RegExp("^-?\\d+(?:\\.\\d{0," + n + "})?", "g")
		const a = this.toString().match(reg)[0];
		const dot = a.indexOf(".");
		if (dot === -1) { // integer, insert decimal dot and pad up zeros
			return a + "." + "0".repeat(n);
		}
		const b = n - (a.length - dot) + 1;
		return b > 0 ? (a + "0".repeat(b)) : a;
	}


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
		{ Pool: 'DAI', Borrow: '267', Value: "$152.7", liquidation: "123" },
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
															<th>Collateral</th>
															<th>Collateral Deposited</th>
															<th>CHC Minted</th>
															<th>Current Value</th>
															<th>Action</th>
														</tr>
													</thead>
													<tbody className='text-white'>
														{position.map((item, index) => (
															<tr key={index}>
																<td>{item.col}</td>
																<td>{(Number(item.deposited)/ 1e18).toFixedNoRounding(2)}</td>
																<td>{(Number(item.minted) / 1e18).toFixedNoRounding(3)}</td>
																<td>{"$" + ((Number(item.minted) / 1e18).toFixedNoRounding(3) * feed).toFixedNoRounding(2)}</td>
																<td>
																	
																<Link to={"/accounts/liquidate"} 
																state={{collateral: item.col , userToLiquidate: item.user}}>
																	<button className="badge cursor-pointer"
																		disabled = {collateralRatio > liquidationRatio ? true : false}
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

																		}}>Liquidate</button>
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
				paddingBottom: "220px"
			}}></div>
		</Section>
	);
};


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