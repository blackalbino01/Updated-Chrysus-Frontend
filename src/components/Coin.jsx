import { memo } from "react";
import { Link } from "react-router-dom";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-stone-900`}>
      <img loading="lazy" src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Coin = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2  style={{ color: "#846424" }}>
      About Chrysus Coin (CHC) <br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Project Chrysus aims to be a fully decentralized ecosystem revolving around Chrysus Coin. 
      Chrysus Coin (Chrysus) is an ERC20 token, deployed on the Ethereum network which is pegged 
      to the price of gold (XAU/USD) using Decentralized Finance (DeFi) best practices. 
      The ecosystem around Chrysus will involve a SWAP solution, a lending solution and an 
      eCommerce integration solution allowing for the use of Chrysus outside of the DeFi 
      ecosystem. One of the main goals of Chrysus is to not just closely follow the price of 
      gold, but also to be a cash flow generating token. This is achieved through the Chrysus 
      Governance Token (CGT) which will serve both 
      as a decentralization tool for the system and as a reward tool for Chrysus token minters.
      </p>
      <a target="_blank" href="https://chrysusofficial.medium.com/">
        <Button styles={`mt-10`} />
      </a>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default memo(Coin);
