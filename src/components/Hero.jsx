import React, { lazy } from 'react'
import styles from "../style";
import { Link } from "react-router-dom";
import { logo } from "../assets";
import GetStarted from "./GetStarted";
import { memo } from "react";
import { LeafGold } from '../assets';
import { UmbrellaGold } from '../assets';
import { SwapGold } from '../assets';
import { CartGold } from '../assets';
import { CCoinGold } from '../assets';
import { JumboButton } from './buttons/jumbo_button';
import { PlayTourButton } from './buttons';

// import { LazyLoadImage } from 'react-lazy-load-image-component';

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>


        <div className="flex flex-row justify-between items-center w-full">
          <h1  className="text-gradient flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100.8px] leading-[75px]">
            Decenterlized <br className="sm:block hidden" />{" "}
            <span className="text-gradient">All-Rounder</span>{" "}
          </h1>
          {/* <Link to="/marketplace">
            <div className="ss:flex hidden md:mr-4 mr-0">
              <GetStarted />
            </div>
          </Link> */}

        </div>

        <div className="flex flex-row items-center py-[6px] px-1  rounded-[10px] mb-2">
          <img loading="lazy" src={logo} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} mt-3 ml-2`}>
            <span className="text-white">Innovative,</span> secure and smart ecosystem{" "}
            {/* <span className="text-white">smart ecosystem</span> */}
          </p>
        </div>
        <PlayTourButton className="my-3 mb-5 " />
        {/* <h1 className="font-poppins font-semibold ss:text-[28px] text-[22px] text-yellow-500 ss:leading-[100.8px] leading-[75px] w-full">
          About Chrysus Coin (CHC)
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] `}>
          Project Chrysus aims to be a fully decentralized ecosystem revolving around Chrysus Coin.
          Chrysus Coin (Chrysus) is an ERC20 token, deployed on the Ethereum network which is pegged
          to the price of gold (XAU/USD) using Decentralized Finance (DeFi) best practices.
        </p>
        <a target="_blank" href="https://chrysusofficial.medium.com/"
          className="my-5"
          style={{
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "16px",
            letterSpacing: "1px",
            textDecorationLine: "underline",
            color: "#846424",
          }}
        >
          Explore the Technology
        </a> */}
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        {/* <img  loading="lazy" src={house} alt="billing" className="w-[100%] h-[75%] relative z-[5]" /> */}
        <div className="jumbotron-actions">
          {/* <img src={JumbotronImage} alt="jumbotron" /> */}
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

      {/* <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div> */}
    </section>
  );
};

export default memo(Hero);
