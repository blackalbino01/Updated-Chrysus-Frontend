import React from "react";
import { FormActionButton } from "../buttons/form_action_button";
import { Table } from "../table";
import { Body, H4, P } from "../typography";
import { Info } from "react-feather";
// import { COLORS } from "src/assets/styles/theme";
import { CInput } from "../inputs/cinput";
import { Link } from "react-router-dom";
import { Chrysus } from "../../assets";

export const BorrowCHC = () => {
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
					<div className="mt-5"></div>
					<H4>Borrow</H4>
					<div className="d-flex flex-column align-items-start">
						<P className="m-0">
							How much would you like to Borrow?
						</P>
						<Body className="m-0">
						Please Enter an amount would you like to Borrow
						</Body>
						<div className="my-3"></div>
						<label className="form-label text-primary">Avaliable to Borrow 00.0</label>
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
						<div className="my-1"></div>
						{/* <P className="m-0">Please Enter an amount would you like to Borrow</P>
						<Body className="m-0">
							Generate an amount that is safety above the liquidation ratio.
						</Body> */}
						{/* <div className="my-3"></div> */}
						<label className="form-label text-primary">Your Blanace 0.123</label>
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
							{/* <span style={{
								backgroundColor: "#1A1917",
								color: "#846424",
							}} className="">
								<select
									style={{
										backgroundColor: "#1A1917",
										color: "#846424",
										height: "55px",
									}}
								// onChange={(e) => setlocation(e.target.value)}
								>
									<option value="">Select Collateral</option>
									<option value="Ethreum">ETH</option>
									<option value="DAI">DAI</option>
								</select>

							</span> */}
							<span style={{
								backgroundColor: "#1A1917",
								color: "#846424",
							}} className="input-group-text">Amount</span>
						</div>
					</div>
					<div
						className="w-100"
						style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}
					></div>
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
		</div>
	);
};
