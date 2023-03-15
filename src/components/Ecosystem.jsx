import { apple, google, EcosystemImage } from "../assets";
import { memo } from "react";
import styles, { layout } from "../style";
import { ReadButton } from "./buttons";

const Ecosystem = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img loading="lazy" src={EcosystemImage} alt="Ecosystem" className="w-[100%] h-[100%] relative z-[5]" />

    </div>

    <div className={layout.sectionInfo}>
      <h2 style={{ color: "#846424" }} >
        Chrysus Ecosystem<br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        The Chrysus ecosystem is a blockchain-based financial infrastructure that enables users to earn yield,
        borrow and lend, and access DeFi liquidity through a single, unified platform. It utilizes Chrysus Protocols to
        create a secure, transparent, and efficient system for exchanging digital assets and fiat currency. The Chrysus coin
        ecosystem is powered by Chrysus tokens, which are used to govern the network, incentivize user
        engagement, and facilitate transactions within the platform.
      </p>
      <a style={{ color: "#846424" }} target="_blank" href="https://chrysusofficial.medium.com/">
       <ReadButton className="my-3 mb-5 "/>
      </a>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        {/* <img loading="lazy" src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img loading="lazy" src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" /> */}
      </div>
    </div>
  </section>
);

export default memo(Ecosystem);
