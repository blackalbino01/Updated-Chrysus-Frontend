import React from "react";
import { FormActionButton } from "../buttons/form_action_button";
import { Table } from "../table";
import { Body, H4, P } from "../typography";
import { Info } from "react-feather";
// import { COLORS } from "src/assets/styles/theme";
import { CInput } from "../inputs/cinput";
import { Link } from "react-router-dom";
import { Chrysus } from "../../assets";
import styles from "../../style";
import styled from "styled-components";



export const WthdrawLending = () => {
    return (
        <Section>
            <div className="row w-100" style={{ borderRadius: "16px" }}>
                <div className="col ">
                    <div
                        className="w-100 d-flex flex-column align-items-center text-center"

                        style={{
                            backgroundColor: "#211f21",
                            borderRadius: "16px",
                            color: "#846424",
                        }}>
                        <div className="mt-5"></div>
                        <H4>Withdraw CHC Fund</H4>
                        <div className="d-flex flex-column align-items-start">
                            <P className="m-0">
                                How much would you like to Withdraw?
                            </P>
                            <Body className="m-0">
                                Please Enter an amount would you like to Withdraw
                            </Body>
                            <div className="my-3"></div>
                            <label className="form-label text-primary">Total Withdraw 00.0</label>
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
            <div className="mt-5"></div>
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
    margin-top: 0rem;
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
