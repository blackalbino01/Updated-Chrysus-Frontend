import React from "react";
import { FormActionButton } from "../buttons/form_action_button";
import { Table } from "../table";
import { Body, H4, P } from "../typography";
import { Info } from "react-feather";
// import { COLORS } from "src/assets/styles/theme";
import { CInput } from "../inputs/cinput";
import { Link } from "react-router-dom";
export const DAI = () => {
	return (
		<div className="row w-100" style={{ borderRadius: "16px" }}>
			<div className="col ">
				<div
					className="w-100 d-flex flex-column align-items-center text-center"

					style={{
						backgroundColor: "#211f21",
						borderRadius: "16px",
						color: "#846424",
					}}
				>
					<div className="mt-5" />
					<H4>Deposit DAI and Generate CHC</H4>
					<div className="d-flex flex-column align-items-start">
						<P className="m-0">
							How much Collateral would you like to lock into your Position?
						</P>
						<Body className="m-0">
							The amount of Collateral you deposit determines how much CHC you can
							generate.
						</Body>
						<div className="my-3" />
						<CInput
							type="text"
							dir="rtl"
							rightText="DAI"
							bottomLineText="YOUR BALANCE 0"
						/>
						<div className="my-3" />
						<P className="m-0">How much CHC would you like to generate?</P>
						<Body className="m-0">
							Generate an amount that is safety above the liquidation ratio.
						</Body>
						<div className="my-3" />
						<CInput
							type="text"
							dir="rtl"
							rightText="CHC"
							bottomLineText="MAX AVAILABLE TO GENERATE 0 CHC"
						/>
					</div>
					{/* Last sections */}
					<div className="mt-5" />
					<div className="mt-4" />
					<div
						className="w-100"
						style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}
					 />
					<div className="w-100 d-flex flex-row justify-content-start p-3">
						{/* Form Actions */}
						<Link to={"/accounts/loan"}>
							<FormActionButton color="white" outline={true}>
								Back
							</FormActionButton>
						</Link>
						<FormActionButton
							color="primary"
							gradient={true}
							outline={true}
							className="mx-2"
						>
							Continue
						</FormActionButton>
					</div>
				</div>
			</div>
			{/* <div
				className="col-md-4 p-0"
				style={{
					backgroundColor: "#262522",
					borderTopRightRadius: "16px",
					borderBottomRightRadius: "16px",
					borderLeft: "1px solid rgba(255, 255, 255, 0.1)",
					position: "relative",
				}}
			>
				<div className="pt-5">
					<div style={{ position: "absolute", right: 30, top: 30 }}>
						<Info />
					</div>
					<div className="p-3">
						<Body className="mt-5" style={{ fontWeight: "600" }}>
							Collateralization
						</Body>
						<Body style={{ fontWeight: "300" }}>0%</Body>
						<Body className="mt-3" style={{ fontWeight: "600" }}>
							Liquidation Price
						</Body>
						<Body style={{ fontWeight: "300" }}>$122</Body>
						<Body className="mt-3" style={{ fontWeight: "600" }}>
							Current Price
						</Body>
						<Body style={{ fontWeight: "300" }}>$150.44</Body>
						<Body className="mt-3" style={{ fontWeight: "600" }}>
							Stability Fee
						</Body>
						<Body style={{ fontWeight: "300" }}>3.50%</Body>
						<Body className="mt-3" style={{ fontWeight: "600" }}>
							Liquidation Ratio
						</Body>
						<Body style={{ fontWeight: "300" }}>150.00%</Body>
						<Body className="mt-3" style={{ fontWeight: "600" }}>
							Liquidation Penalty
						</Body>
						<Body style={{ fontWeight: "300" }}>13.00%</Body>
					</div>
				</div>
			</div> */}
		</div>
	);
};
