import React from 'react'
import styled from "styled-components";

const Overview = () => {
    return (
        <div className="page-content mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 m-b30 wow fadeInUp" data-wow-delay="0.2s" >
                    <div className=" icon-bx-wraper style-1 box-hover"
                        style={{
                            backgroundColor: "#211f21",
                            borderRadius: "16px",
                            color: "#846424",
                        }}
                    >
                        <div className=" justify-between items-center">
                            {/* <img src={data.image} alt="" /> */}
                            <div className="icon-info">
                                <h5 className="title">Staked</h5>
                            </div>
                        </div>
                        <div className="icon-content">
                            <ul className="price ">
                                <li>
                                    <p className="mb-0 amount">CGT</p>
                                    <span className='text-white'>180,8484</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 m-b30 wow fadeInUp" data-wow-delay="0.2s" >
                    <div className=" icon-bx-wraper style-1 box-hover"
                        style={{
                            backgroundColor: "#211f21",
                            borderRadius: "16px",
                            color: "#846424",
                        }}
                    >
                        <div className=" justify-between items-center">
                            {/* <img src={data.image} alt="" /> */}
                            <div className="icon-info">
                                <h5 className="title">Lock time</h5>
                            </div>
                        </div>
                        <div className="icon-content">
                            <ul className="price ">
                                <li>
                                    <p className="mb-0 amount">Average Time</p>
                                    <span className='text-white'>5mo 15d 7h 44m 21s</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-12 col-md-6 m-b30 wow fadeInUp" data-wow-delay="0.2s" >
                <div className="style-1 box-hover"
                    style={{
                        backgroundColor: "#211f21",
                        borderRadius: "16px",
                        color: "#846424",
                    }}
                >
                    <div className=" justify-between items-center">
                        {/* <img src={data.image} alt="" /> */}
                        <div className="icon-info">
                            <h5 className="title">Voter Weights</h5>
                        </div>
                    </div>
                    <div className="icon-content">
                        <ul className="price ">
                            <li>
                                <p className="mb-0 amount">Average Time</p>
                                <span className='text-white'>5mo 15d 7h 44m 21s</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview
