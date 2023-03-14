import React from 'react'
import styles from "../style";
import { JumboButton } from './buttons/jumbo_button';
import GetStarted from "./GetStarted";
import { LeafGold, UmbrellaGold, CartGold, SwapGold, CCoinGold } from '../assets';
const Services = () => {
    return (
        <section className={`flex md:flex-row flex-col ${styles.paddingY} sm:my-16 my-6`}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-5 sm:px-16 px-6`}>
                <div className="flex flex-row ">
                    <div className="services-side  left-side position-relative d-flex flex-column  justify-content-between">
                        <div
                            className="text-white services-left-top"
                            style={{ opacity: "0.5" }}
                        >
                            Connect your wallet & Mint your CHC token now
                        </div>
                        <div
                            className="text-white  services-left-bottom "
                            style={{ opacity: "0.5" }}
                        >
                            Individuals with long-term investments in Ether and tokens (“Hodlers”)
                            can use a money market as a source of additional returns on their investment.
                        </div>
                    </div>

                    <div className="ss:flex hidden md:ml-5">
                        <div className="jumbotron-actions">
                            <JumboButton
                                className="action top-left"
                                text="MINT"
                                icon={
                                    <img
                                        className="jumbo-button-icon"
                                        src={LeafGold}
                                        alt="leaf-gold"
                                    />
                                }
                            />
                            <JumboButton
                                className="action bottom-left"
                                text="LOAN"
                                icon={
                                    <img
                                        className="jumbo-button-icon"
                                        src={UmbrellaGold}
                                        alt="umbrella-gold"
                                    />
                                }
                            />
                            <JumboButton
                                className="action top-right"
                                text="SWAP"
                                icon={
                                    <img
                                        className="jumbo-button-icon"
                                        src={SwapGold}
                                        alt="swap-gold"
                                    />
                                }
                            />
                            <JumboButton
                                className="action bottom-right"
                                text="BUY"
                                icon={
                                    <img
                                        className="jumbo-button-icon"
                                        src={CartGold}
                                        alt="card-gold"
                                    />
                                }
                            />
                            <span className="action action-center coin-rotating">
                                <img src={CCoinGold} alt="c-coin-gold.sg" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`flex-1 flex ${styles.flexCenter}  md:my-0 my-0 relative sm:px-16 px-6`}>
                <div className={`services-side d-flex flex-column justify-content-between`}>
                    <div className="text-white services-right " style={{ opacity: "0.5" }}>
                        Swap your CHC tokens with other cryptocurrencies
                    </div>
                    <div className="text-white services-right" style={{ opacity: "0.5" }}>
                        With the ever increasing use of the internet and its popularity among all demographic
                        segments, electronic commerce is by all means the way to go for virtually all businesses.
                    </div>
                </div>
            </div>

            <div className={`ss:hidden ${styles.flexCenter} mt-5`}>
                <div className="jumbotron-actions mt-5">
                    <JumboButton
                        className="action top-left"
                        text="MINT"
                        icon={
                            <img
                                className="jumbo-button-icon"
                                src={LeafGold}
                                alt="leaf-gold"
                            />
                        }
                    />
                    <JumboButton
                        className="action bottom-left"
                        text="LOAN"
                        icon={
                            <img
                                className="jumbo-button-icon"
                                src={UmbrellaGold}
                                alt="umbrella-gold"
                            />
                        }
                    />
                    <JumboButton
                        className="action top-right"
                        text="SWAP"
                        icon={
                            <img
                                className="jumbo-button-icon"
                                src={SwapGold}
                                alt="swap-gold"
                            />
                        }
                    />
                    <JumboButton
                        className="action bottom-right"
                        text="BUY"
                        icon={
                            <img
                                className="jumbo-button-icon"
                                src={CartGold}
                                alt="card-gold"
                            />
                        }
                    />
                    <span className="action action-center coin-rotating">
                        <img src={CCoinGold} alt="c-coin-gold.sg" />
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Services