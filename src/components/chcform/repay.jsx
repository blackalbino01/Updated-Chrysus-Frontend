import React, { useEffect, useState } from "react";
import { FormActionButton } from "../buttons/form_action_button";
import { Table } from "../table";
import { Body, H4, P } from "../typography";
import { Info } from "react-feather";
// import { COLORS } from "src/assets/styles/theme";
import { CInput } from "../inputs/cinput";
import { Link, useLocation } from "react-router-dom";
import { Chrysus } from "../../assets";
import styles from "../../style";
import Utils from "../../utilities";
import { ethers } from "ethers";
import loan from "../../abis/MockLending.json";
import chrysus from "../../abis/Chrysus.json";
import { DAI, ETH, LOAN, CHRYSUS } from "../../constant";

export const Repay = () => {
  const [dai_chcBalance, setDai_chcBalance] = useState(0);
  const [eth_chcBalance, setEth_chcBalance] = useState(0);
  const addrees = localStorage.getItem("accounts");
  const location = useLocation();
  const { collateral } = location.state;
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Utils.getLendPosition(addrees, "DAI").then(function (data) {
      setDai_chcBalance(
        Utils.toFixedNoRounding(Number(data.borrowedAmount) / 1e18, 3)
      );
    });

    Utils.getLendPosition(addrees, "ETH").then(function (data) {
      setEth_chcBalance(
        Utils.toFixedNoRounding(Number(data.borrowedAmount) / 1e18, 3)
      );
    });
  });

  const repay = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        let chainId = await ethereum.request({ method: "eth_chainId" });
        console.log("Connecteds to chains " + chainId);
        const provider = new ethers.providers.Web3Provider(ethereum);
        const _signer = provider.getSigner();
        const token = new ethers.Contract(CHRYSUS, chrysus.abi, _signer);
        const loanContract = new ethers.Contract(LOAN, loan.abi, _signer);

        const _collateral = collateral == "DAI" ? DAI : ETH;

        let Txn = await token.approve(
          LOAN,
          ethers.utils.parseUnits(String(amount))
        );
        setLoading(true);
        await Txn.wait();

        Txn = await loanContract.repay(
          _collateral,
          ethers.utils.parseUnits(String(amount))
        );
        await Txn.wait();
        setLoading(false);
        console.log("Repayed successfully!");
        window.location.reload();
      }
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
    }
  };

  return (
    <>
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
            <H4>Repay CHC Fund</H4>
            <div className="d-flex flex-column align-items-start">
              <P className="m-0">How much would you like to Repay?</P>
              <div className="my-3" />
              <label className="form-label text-primary">
                Total Borrow : {}
                {collateral == "DAI"
                  ? Utils.toFixedNoRounding(dai_chcBalance, 3)
                  : Utils.toFixedNoRounding(eth_chcBalance, 3)}
                CHC
              </label>
              <div
                className="input-group"
                style={{
                  backgroundColor: "#1A1917",
                  color: "#846424",
                }}
              >
                <input
                  type="text"
                  className="form-control"
                  style={{
                    backgroundColor: "#1A1917",
                    color: "#846424",
                  }}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                />
                <span
                  style={{
                    backgroundColor: "#1A1917",
                    color: "#846424",
                  }}
                  className="input-group-text"
                >
                  <img loading="lazy" src={Chrysus} alt="meta" />
                </span>
              </div>
              <div className="my-1" />
              {/* <P className="m-0">Please Enter an amount would you like to Borrow</P>
						<Body className="m-0">
							Generate an amount that is safety above the liquidation ratio.
						</Body> */}
              {/* <div className="my-3"></div> */}
              {/* <label className="form-label text-primary">Your Blanace 0.123</label>
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
							}} className="input-group-text">Amount</span>
						</div> */}
            </div>
            <div
              className="w-100"
              style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}
            />
            <div className="w-100 d-flex flex-row justify-content-start p-3">
              {/* Form Actions */}
              <Link to={"/accounts/loan"}>
                <FormActionButton color="white" outline>
                  Back
                </FormActionButton>
              </Link>
              <button
                style={{
                  borderRadius: "40px",
                  background:
                    "linear-gradient(270deg, #EDC452 0.26%, #846424 99.99%, #846424 100%), #846424",
                  // Fonts
                  fontStyle: "normal",
                  padding: "10px",
                  fontWeight: "700",
                  fontSize: "14px",
                  lineHeight: "24px",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: "black",
                }}
                onClick={() => repay()}
              >
                {loading ? "Processing...." : "Continue"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5" />
      <div className="pt-5" />
    </>
  );
};
