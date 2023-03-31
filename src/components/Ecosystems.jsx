import React from 'react'
import { EcosystemImage } from '../assets'
import Navbar from './Navbar'
import styles from "../style";
import Footer from './Footer';


const Ecosystems = () => {
    return (
        <>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center">
                <p style={{ fontWeight: "600", fontSize: "44px", color: "#846424", marginTop: "70px", marginBottom: "60px" }}>
                    Governance </p>
                <p className="text-white text-center col-8">
                Chrysus is a comprehensive decentralized application (dApp) that seamlessly integrates 
                a range of financial services, such as loans, swaps, and more, to create a unified 
                platform for its users. The Chrysus Governance Token (CGT) empowers token holders by
                 granting them the ability to actively participate in decision-making processes, s
                 teering the platform's future trajectory. As an added incentive, users who engage
                  in various services on the platform, like loans and swaps, can earn rewards in CGT, 
                  further enhancing the decentralized 
                experience and fostering a collaborative ecosystem driven by its community members.
                </p>
                {/* <img src={EcosystemImage} /> */}
            </div>
            <div className={`bg-black ${styles.paddingX}  ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Ecosystems