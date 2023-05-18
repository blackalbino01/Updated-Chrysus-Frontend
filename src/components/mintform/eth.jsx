import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FormActionButton } from "../buttons/form_action_button";
import styles from "../../style";
import { Body, H4, P } from "../typography";
import { CInput } from "../inputs/cinput";
import { useAppSelector, useAppDispatch } from '../../reducer/store';
import { loadBlockchain, updatAccount } from '../../slices/web3ContractSlice';
import { Button } from "reactstrap";

export const ETHDeposite = () => {
    const { web3, contract, accounts, socketContract } = useAppSelector((state) => state.web3Connect);
    const [ethamount, setethamount] = useState();



    const DepositCollateral = async () => {
        try {
            let valueToSend = web3.utils.toWei(ethamount, 'ether');
            let zeroAddress = "0x0000000000000000000000000000000000000000"
            await contract?.methods.depositCollateral(zeroAddress, valueToSend)
            .send({ from: accounts[0], value: valueToSend}).then(function(receipt){
                console.log(receipt);
                alert(`You Have succefully minted Chrysus Coin,
                See transaciton in https://sepolia.etherscan.io/tx/${receipt.transactionHash}`);
            });

            window.location.reload();

        } catch (error) {
            console.log("Send Eth Error", error)
        }
    }

    console.log("eth amount", ethamount)
    console.log("contract", contract)
    console.log("web3", web3)
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
                            <H4>Deposit Ethereum</H4>
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
                                    onChange={(e) => setethamount(e.target.value)} placeholder="0.00" />
                                {/* <CInput
                                    type="text"
                                    dir="rtl"
                                    rightText="ETH"
                                    bottomLineText="YOUR BALANCE 0"
                                    onChange={(e) => setethamount(e.target.value)}
                                /> */}
                                <div className="my-3"></div>
                            </div>
                            <div className="mt-2"></div>
                            <div className="w-100  p-3 text-center">
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
                                    onClick={() => DepositCollateral()}>
                                    Deposit</Button>
                                {/* <FormActionButton
                                    color="primary"
                                    gradient={true}
                                    outline={true}
                                    className="mx-2"
                                    onClick={() => DepositCollateral()}
                                >
                                    Deposit
                                </FormActionButton> */}
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
          <div className="pt-5"></div>
          <div className="pt-2"></div>
        </>
    );
};
