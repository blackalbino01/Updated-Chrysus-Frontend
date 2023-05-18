import React, { useEffect, useState } from 'react';
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


export const DAIDeposite = () => {
	const [modalShow, setModalShow] = useState(false);
	const [isApprove, setisApprove] = useState(false);
	const [loading, setloading] = useState(false);
	const { web3, contract, accounts, DAIContract } = useAppSelector((state) => state.web3Connect);
	const [DAIamount, setDAIamount] = useState();

	const DAIApprove = async () => {
		setloading(true)
		setModalShow(true)
		try {
			await DAIContract?.methods.approve(CHRYSUS, DAIamount).send({ from: accounts[0] })
			setisApprove(true);
			setModalShow(false);
		} catch (error) {
			console.log("First Approve Error", error)
			setModalShow(false)
		}
	}

	console.log("DAI amount", DAIamount)
	console.log("chrysus contract", contract)

	const DepositDAICollateral = async () => {
		try {
			await contract?.methods.depositCollateral(DAI, web3.utils.toWei(DAIamount, 'ether'))
				.send({ from: accounts[0] }).then(function (receipt) {
					console.log(receipt);
					alert(`You Have succefully minted Chrysus Coin,
                See transaciton in https://sepolia.etherscan.io/tx/${receipt.transactionHash}`);
					setloading(true)
				});

			window.location.reload();
		} catch (error) {
			console.log("Send DAI Error", error)
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
									How much Collateral would you like to lock into your Position?
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
												onClick={() => DepositDAICollateral()}>
												Deposit</Button>
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
												Approve
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
		</>
	);
};





const WalletConnect = (props) => {
	return (
		<div className="">
			<Modal
				{...props}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				dialogClassName="modal-90w public-profile-modal-class"
				centered
				style={{
					background: "black",
					// opacity: "1",
				}}
			>
				<Modal.Header className=" flex flex-row flex-wrap text-center items-center py-[6px] px-4 ">
					<Modal.Title >
						<h3 className="text-white"
							style={{
								paddingLeft: "40px"
							}}
						>
							Transection in Process
						</h3>

					</Modal.Title>
				</Modal.Header>
				<Modal.Body className="items-center rounded-b-[12px]">
					<div style={{
						paddingLeft: "100px"
					}}>
						<div class="loader"></div>
					</div>

				</Modal.Body>
			</Modal>
		</div >
	)
}


