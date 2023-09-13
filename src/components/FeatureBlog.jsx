import React from 'react'
import { Link } from "react-router-dom";
import { pic1,SendDarkIcon } from '../assets';
import { useWindowSize } from "../hooks";
import {PrimaryGradientButton} from "../components/buttons";
import { ReadButton } from "./buttons";

const blocardList = [
    { image: pic1, image2: pic1, title: 'Featured Blog' },
];

const FeatureBlog = () => {
    const [width, height] = useWindowSize();

    return (
        
        <div className="page-content">
        <section className="content-inner bg-black">
          <div className="container">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-[60%] lg:mr-8">
                <div className="flex flex-col space-y-8">
                  {blocardList.map((item, index) => (
                    <div className="mb-8" key={index}>
                      <div className="dz-card style-1 blog-half bg-gradient-to-r from-[#262522] to-[#262522] p-4 rounded-lg">
                        <div className="dz-media">
                          <Link to="#">
                            <img src={item.image} alt="" className="rounded-lg" />
                          </Link>
                        </div>
                        <div className="dz-info">
                          <h4 className="text-yellow-500 text-2xl font-semibold mb-2">
                            <Link to="#" className="text-[#846424]">
                              {item.title}
                            </Link>
                          </h4>
                          <p className="text-white text-base leading-6 mb-4">
                            Ethereum, and other digital currencies to create a secure, fast, and reliable digital asset for global payments.
                          </p>
                          <span className="text-white">7 April, 2022</span>
                          <div>
                          <a style={{ color: "#846424" }} target="_blank" href="https://chrysusofficial.medium.com/">
                            <ReadButton className="my-3 mb-5 " />
                          </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-[40%] flex items-center justify-between">
                <div className="flex flex-col">
                  <h1 className="text-white text-2xl font-semibold mb-4">Subscribe</h1>
                  <p className="text-[#EDC452] mb-4">
                    Enter your email below for the latest blogs and news
                  </p>
                  <div className="flex items-center justify-between border border-yellow-500 rounded-full bg-transparent p-2">
                    <input
                      type="email"
                      placeholder="Email"
                      className="outline-none border-none pl-4 font-montserrat font-light text-base text-white bg-transparent flex-grow"
                    />
                    {width <= 460 ? (
                      <PrimaryGradientButton className="text-uppercase" onClick={() => { }}>
                        <img src={SendDarkIcon} alt="send-dark.svg" />
                      </PrimaryGradientButton>
                    ) : (
                      <PrimaryGradientButton className="text-uppercase" onClick={() => { }}>
                        Subscribe
                      </PrimaryGradientButton>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
        
    )
}

export default FeatureBlog