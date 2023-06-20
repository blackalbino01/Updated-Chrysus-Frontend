import React, { useState, useEffect } from "react";
import { FormActionButton } from "../buttons/form_action_button";
import { Table } from "../table";
import { Body, H4, P } from "../typography";
import { Info } from "react-feather";
// import { COLORS } from "src/assets/styles/theme";
import { CInput } from "../inputs/cinput";
import { Link, useLocation } from "react-router-dom";
import { Chrysus } from "../../assets";
import Utils from "../../utilities";
import { ethers } from "ethers";
import ERC20 from "../../abis/ERC20.json";
import loan from "../../abis/MockLending.json";
import { DAI, ETH, LOAN } from "../../constant";

export const BorrowCHC = () => {
  const [collateralAmount, setCollateralAmount] = useState(0);
  const [eth_lend, setEth_Lend] = useState(0);
  const [dai_lend, setDai_Lend] = useState(0);
  const addrees = localStorage.getItem("accounts");
  const [amount, setAmount] = useState(null);
  const location = useLocation();
  const { collateral } = location.state;
  const [interestRate, setInterestRate] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Utils.getLendPosition(addrees, "DAI").then(function (data) {
      setDai_Lend(Utils.toFixedNoRounding(Number(data.lendAmount) / 1e18, 3));
    });

    Utils.getLendPosition(addrees, "ETH").then(function (data) {
      setEth_Lend(Utils.toFixedNoRounding(Number(data.lendAmount) / 1e18, 3));
    });

    Utils.interestRate().then(function (data) {
      setInterestRate(Number(data));
    });
  });

  if (amount !== null) {
    const interestAmount = (amount * interestRate) / 1e18;
    const totalAmount = Number(amount) + Number(interestAmount);
    Utils.collateralAmount(totalAmount.toString(), collateral).then(function (
      data
    ) {
      collateral == "DAI"
        ? setCollateralAmount(Utils.toFixedNoRounding(Number(data) * 1e7, 3))
        : setCollateralAmount(Utils.toFixedNoRounding(Number(data), 3));
    });
  }

  const borrow = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        let chainId = await ethereum.request({ method: "eth_chainId" });
        console.log("Connecteds to chains " + chainId);
        const provider = new ethers.providers.Web3Provider(ethereum);
        const _signer = provider.getSigner();
        const token = new ethers.Contract(DAI, ERC20.abi, _signer);
        const loanContract = new ethers.Contract(LOAN, loan.abi, _signer);

        const _collateral = collateral == "DAI" ? DAI : ETH;

        if (collateral == "DAI") {
          let Txn = await token.approve(
            LOAN,
            ethers.utils.parseUnits(String(collateralAmount))
          );
          setLoading(true);
          await Txn.wait();
        }

        if (collateral == "ETH") {
          let Txn = await loanContract.borrow(
            ethers.utils.parseUnits(String(amount)),
            _collateral,
            {
              from: _signer.address,
              value: ethers.utils.parseUnits(String(amount)),
            }
          );

          setLoading(true);
          await Txn.wait();
          setLoading(false);
          window.location.reload();
        }

        let Txn = await loanContract.borrow(
          ethers.utils.parseUnits(String(amount)),
          _collateral
        );
        //setLoading(true);
        await Txn.wait();
        setLoading(false);
        console.log("Borrow successfully!");
        window.location.reload();
      }
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
    }
  };

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
          <H4>Borrow</H4>
          <div className="d-flex flex-column align-items-start">
            <P className="m-0">How much would you like to Borrow?</P>
            <div className="my-3" />
            <label className="form-label text-primary">
              Avaliable to Borrow : {}
              {collateral == "DAI" ? dai_lend : eth_lend}CHC
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
            <label className="form-label text-primary">
              Estimated Collateral Amount To Pay
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
                disabled
                placeholder={collateralAmount}
              />
              <span
                style={{
                  backgroundColor: "#1A1917",
                  color: "#846424",
                }}
                className="input-group-text"
              >
                Amount
              </span>
            </div>
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
              onClick={() => borrow()}
            >
              {loading ? "Processing...." : "Continue"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
