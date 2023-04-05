import React from 'react'
import { Link } from 'react-router-dom';
import { EcosystemImage, pic6, pic3, pic4, pic5, G1,G2,G3,G4 } from '../assets'
import Navbar from './Navbar'
import styles from "../style";
import Footer from './Footer';
import { Button } from 'react-bootstrap';


const ImageBox = ({ image, changeClass }) => {
    return (

        <div className="col-6">
            <div className={`image-box ${changeClass}`}>
                <img src={image} alt="" />
            </div>
        </div>

    )
}

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

                <div className="page-content">
                    <section className="content-inner about-sec">
                        <div className="container">
                            <div className="row about-bx2 style-1 align-items-center">
                                <div className="col-lg-6">
                                    <div className="dz-media"
                                        style={{
                                            borderRadius: "25px",
                                            overflow: "hidden",
                                            marginBottom: "30px",
                                        }}
                                    >
                                        <div className="row align-items-end" >
                                            <ImageBox image={G1} changeClass="image-box-1" />
                                            <ImageBox image={G2} changeClass="image-box-2" />
                                        </div>
                                        <div className="row">
                                            <ImageBox image={G3} changeClass="image-box-3" />
                                            <ImageBox image={G4} changeClass="image-box-4" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 about-content ps-lg-5 m-b30">
                                    <div className="section-head" >
                                        <h2 className="title" style={{
                                            color: "#846424",
                                        }}>Get Started with ChrysusDAO</h2>
                                        <p className="m-0 lh-base">ChrysusDAO was founded with a simple mission of making everyone a part of a fair and inclusive Chrysus ecosystem</p>
                                    </div>
                                    <Link to={"/governance"} className="btn btn-lg btn-primary btn-shadow"
                                        style={{
                                            backgroundColor: "#211f21",
                                            borderRadius: "16px",
                                            color: "#846424",
                                        }}
                                    >
                                        {/* <Button>ChysusDAO</Button> */}
                                        ChysusDAO
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>
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