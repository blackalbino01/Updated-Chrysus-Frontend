import React, { useEffect, useState } from 'react';
import {ethers} from "ethers";
import { Link } from 'react-router-dom';
import { FormActionButton } from "../buttons/form_action_button";
import styles from "../../style";
import { Body, H4, P } from "../typography";
import { CInput } from "../inputs/cinput";
import { useAppSelector, useAppDispatch } from '../../reducer/store';
import { loadBlockchain, updatAccount } from '../../slices/web3ContractSlice';
import { Button } from 'reactstrap';
import { CHRYSUS, DAI } from '../../constant';
import Modal from 'react-bootstrap/Modal';
import { ConfirmationItem } from "../confirmation_item";
import Utils from "../../utilities";



export const DAIDeposite = () => {
	const [modalShow, setModalShow] = useState(false);
	const [isApprove, setisApprove] = useState(false);
	const [loading, setloading] = useState(false);
	const { web3, contract, accounts, DAIContract } = useAppSelector((state) => state.web3Connect);
	const [DAIamount, setDAIamount] = useState(0);
	const [modalShows, setModalShows] = useState(false);
	const [amount, setAmount] = useState(0);

	useEffect(() => {
		Utils.generate(ethers.utils.parseUnits(DAIamount.toString()), "DAI").then(function(data){
            setAmount(Utils.toFixedNoRounding(data, 3));
        });
	})

	const DAIApprove = async () => {
		//setloading(true)
		//setModalShow(true)
		// if(isApprove === false){
		try {
			await DAIContract?.methods.approve(CHRYSUS, web3.utils.toWei(DAIamount, 'ether')).send({ from: accounts[0] })
			.then(function(){
				setloading(true)
				setisApprove(true);
			});
			setloading(false);
			//setModalShow(false);
		} catch (error) {
			console.log("First Approve Error", error)
			setModalShow(false)
		}

	}
	console.log("DAI amount", DAIamount)
	console.log("chrysus contract", contract)

	const DepositDAICollateral = async () => {
		//setloading(true)
		//setModalShow(true)
		try {
			await contract?.methods.depositCollateral(DAI, web3.utils.toWei(DAIamount, 'ether'))
				.send({ from: accounts[0] }).then(function (receipt) {
					//console.log(receipt);
					setloading(true);
					/*alert(`You Have succefully minted Chrysus Coin,
                See transaciton in https://sepolia.etherscan.io/tx/${receipt.transactionHash}`);*/
					//setloading(true)
					//setisApprove(true);
					//setModalShow(false);
				});
				setloading(false);

			window.location.reload();
		} catch (error) {
			console.log("Send DAI Error", error)
			setModalShow(false)
		}
	}

	return (
		<>
			<div className="d-flex justify-content-center">
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
							<H4>Deposit DAI</H4>
							<div className="d-flex flex-column text-center">
								<P className="m-0">
									How much Collateral would you like to deposit into your Position?
								</P>
								<Body className="m-0">
									The amount of Collateral you deposit determines how much CHC you can
									generate.
								</Body>
								<div className="my-3"></div>
								<input type="text" className="form-control"
									style={{
										backgroundColor: "#1A1917",
										color: "#846424",
									}}
									onChange={(e) => setDAIamount(e.target.value)} placeholder="0.00" />
								{/* <CInput
									type="text"
									dir="rtl"
									rightText="DAI"
									bottomLineText="YOUR BALANCE 0"
								/> */}
								<div className="my-3"></div>
							</div>
							<div className="mt-2"></div>
							<div className="w-100  p-3 text-center">
								{isApprove === true ?
									(
										<>
											<Button
												style={{
													color: "black",
													fontStyle: "normal",
													fontWeight: "700",
													fontSize: "16px",
													lineHeight: "34px",
													letterSpacing: "1px",
													textTransform: "uppercase",
													background: "linear-gradient(270deg, #EDC452 0.26%, #846424 99.99%, #846424 100%), #846424",
													borderRadius: "40px",
												}}
												// onClick={() => DepositDAICollateral()}
												onClick={() => setModalShows(true)}>
												Preview</Button>
											{modalShows ? (
												<>
													<>
														<div
															className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
														>
															<div className="relative w-auto my-6 mx-auto max-w-2xl"
																style={{
																	// backgroundColor: "#7a7a79",
																	// color: "black",
																	backgroundColor: "#211f21",
																	borderRadius: "16px",
																	color: "#846424",
																}}>

																<div
																	className="row w-150"
																>
																	<div className="col-12">
																		<div className="d-flex flex-column align-items-center mt-4">
																			<H4>Confirm Mint Details</H4>
																			<div className="d-flex flex-column align-items-center justify-content-center col-5">
																				<ConfirmationItem title="Depositing" value={DAIamount} />
																				<ConfirmationItem title="Generating" value={ amount + "CHC"} />
																				
																				<div className="d-flex flex-row align-items-center justify-content-start my-3 w-100">
																					<input
																						type="checkbox"
																						style={{
																							transform: "scale(1.5)",
																							accentColor: "#EDC452",
																						}}
																					/>
																					<Body className="m-0 mx-3">
																						Understand the Stability Fee is not fixed and is likely to
																						change over time
																					</Body>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div className="mt-2"></div>
																	<div style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}></div>

																</div>
																<div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
																	<button
																		className="text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
																		type="button"
																		onClick={() => setModalShows(false)}
																	>
																		Close
																	</button>
																	<button
																		style={{
																			height: "52px",
																			width: "120px",
																			color: "#846424",
																			textTransform: "uppercase",
																			fontStyle: "normal",
																			fontWeight: "700",
																			fontSize: "10px",
																			backgroundColor: "#1A1917",
																			borderRadius: "16px",
																			border: "1px solid transparent",
																			borderColor: "#846424",
																		}} type="button"
																		// onClick={() => setShowModal(false)}
																		onClick={() => DepositDAICollateral()}
																	>
																		{loading ? "Processing..." : "Deposit"}
																	</button>
																</div>
															</div>
														</div>
														{/* </div> */}
														<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
													</>
												</>
											) : null}
											{modalShow ? (
												<>
													<div
														className="justify-center bg-black items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
														style={{
															// paddingLeft:"220px"
															// background:""
															opacity: "0.7"
														}}>
														<div className="relative w-auto my-6 mx-auto max-w-3xl">
															<div className="border-0 relative flex flex-col w-full outline-none focus:outline-none">
																<div className="flex items-start justify-between">
																	<div class="loader"></div>
																</div>
															</div>
														</div>
													</div>
													{/* <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}
												</>
											) : null}
										</>
									) : (
										<>
											<Button data-modal-target="popup-modal" data-modal-toggle="popup-modal"
												style={{
													color: "black",
													fontStyle: "normal",
													fontWeight: "700",
													fontSize: "16px",
													lineHeight: "34px",
													letterSpacing: "1px",
													textTransform: "uppercase",
													background: "linear-gradient(270deg, #EDC452 0.26%, #846424 99.99%, #846424 100%), #846424",
													borderRadius: "40px",
												}}
												onClick={() => DAIApprove()}>
												{loading ? "Processing..." : "Approve"}
											</Button>
											{/* <WalletConnect show={modalShow} /> */}
											{modalShow ? (
												<>
													<div
														className="justify-center bg-black items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
														style={{
															// paddingLeft:"220px"
															// background:""
															opacity: "0.7"
														}}
													>
														<div className="relative w-auto my-6 mx-auto max-w-3xl">
															<div className="border-0 relative flex flex-col w-full outline-none focus:outline-none">
																<div className="flex items-start justify-between">
																	<div class="loader"></div>
																</div>
															</div>
														</div>
													</div>
													{/* <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}
												</>
											) : null}

										</>
									)}
							</div>
							{/* {loading  === true ? (
								<div class="loader"></div>
							) : ""} */}

							<div
								className="w-100"
								style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}
							></div>
							<div className="w-100 d-flex flex-row justify-content-start p-3">
								{/* Form Actions */}
								<Link to={"/accounts/mint"}>
									<FormActionButton className="mx-2" color="primary"
										gradient={true}
										outline={true}>
										Back
									</FormActionButton>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <div className={`bg-black ${styles.paddingX}  ${styles.flexStart}`}>
				<div className={`${styles.boxWidth}`}>
					<section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
						<div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
							<div className=" flex flex-col justify-start">
								<p className={`${styles.paragraph} mt-4 max-w-[450px]`}> </p>
							</div>
						</div>
						<div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
							<p className={`${styles.paragraph} `}>
								Copyright Ⓒ 2023 Chrysus. 2022, All Rights Reserved.
							</p>
						</div>
					</section>
				</div>
			</div> */}
			<div className="mt-5"></div>
			<div className="mt-5"></div>
			<div className="mt-5"></div>
		</>
	);
};




