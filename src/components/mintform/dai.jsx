import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FormActionButton } from "../buttons/form_action_button";
import styles from "../../style";
import { Body, H4, P } from "../typography";
import { CInput } from "../inputs/cinput";
import { useAppSelector, useAppDispatch } from '../../reducer/store';
import { loadBlockchain, updatAccount } from '../../slices/web3ContractSlice';


export const DAIDeposite = () => {
	const { web3, contract, accounts, socketContract } = useAppSelector((state) => state.web3Connect);
    const [ethamount, setethamount] = useState();
	

	const DepositCollateral = async () => {
		try {
			let valueToSend = web3.utils.toWei(ethamount, 'ether');
			let zeroAddress = "0x0000000000000000000000000000000000000000"
			await contract?.methods.depositCollateral(zeroAddress, valueToSend).send({ from: accounts[0] })
			
		} catch (error) {
			console.log("Send Eth Error", error)
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
								<CInput
									type="text"
									dir="rtl"
									rightText="DAI"
									bottomLineText="YOUR BALANCE 0"
								/>
								<div className="my-3"></div>
							</div>
							<div className="mt-2"></div>
							<div className="w-100  p-3 text-center">
								<FormActionButton
									color="primary"
									gradient={true}
									outline={true}
									className="mx-2"
									>
									Deposit
								</FormActionButton>
							</div>
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
			<div className={`bg-black ${styles.paddingX}  ${styles.flexStart}`}>
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
			</div>
		</>
	);
};
