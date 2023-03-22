import React from 'react'
import styles from "../style";
import { Picture } from '../assets';
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
    return (
        <>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>
            <div className={`bg-black ${styles.padding}`}>
                <div className={`${styles.boxWidth}`}>
                    <h1 className='text-center' style={{ color: "#846424" }}>About Us</h1>
                    <a className={`text-white text-center ${styles.flexCenter}`} style={{ fontWeight: "300", fontSize: "18px", marginTop: "50px", marginBottom: "60px" }}>Project Chrysus aims to be a fully decentralized ecosystem revolving around Chrysus Coin.
                        Chrysus Coin (Chrysus) is an ERC20 token, deployed on the Ethereum network which is pegged
                        to the price of gold (XAU/USD) using Decentralized Finance (DeFi) best practices.
                        The ecosystem around Chrysus will involve a SWAP solution, a lending solution and an
                        eCommerce integration solution allowing for the use of Chrysus outside of the DeFi
                        ecosystem. One of the main goals of Chrysus is to not just closely follow the price of
                        gold, but also to be a cash flow generating token. This is achieved through the Chrysus
                        Governance Token (CGT) which will serve both as a decentralization tool for the system
                        and as a reward tool for Chrysus token minters. Fees collected through the different
                        components of the Project Chrysus ecosystem will be re-distributed to CGT token
                        holders who actively participate in the stability mechanisms of the platform.
                    </a>
                    < p className='text-center' style={{ fontWeight: "600", fontSize: "44px", color: "#846424", marginTop: "100px", marginBottom: "60px" }}>Our Roadmap</p>
                    <img src={Picture} alt="picture.png" />
                </div>
            </div>
            <div className={`bg-black ${styles.paddingX}  ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default About