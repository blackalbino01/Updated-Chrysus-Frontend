import React from 'react';
import styles from '../style';
import { logoo } from "../assets";
import { memo } from "react";
import { footerLinks, socialMedia } from '../constants';

const Footer = () => (
    <section className={`${styles.flexCenter} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col w-full`}>
        <div className='flex-1 flex flex-col justify-start mr-10'>
          <img src={logoo} alt="hoobank" className='w-[266px] h-[72px] object-contain' />
          <div className='border-t-[1px] border-t-[#846424] w-[380px] mt-[20px]'> 
          <p className={`${styles.paragraph} mt-3 `}>
          Developed by <b> BlocksGenie Technologies</b>
          </p>
          </div>
        </div>

        <div className='flex-[1.5px] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 '>
          {footerLinks.map((footerLink) => (
            <div key={footerLink.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
              <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-[#846424]'>
                {footerLink.title}
              </h4>
              <ul className='list-none mt-4'>
                {footerLink.links.map((link, index) => (
                  <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-[#846424] cursor-pointer ${index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'}`}>
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='w-full flex justify-between items-center md:flex-row flex-col py-6 border-t-[1px] border-t-[#846424]'>
        <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white mb-0'>
          Copyright Ⓒ 2023 <span className="text-[#EDC452]"> Chrysus</span>. 2022, All Rights Reserved.
        </p>
        <div className='flex flex-row md:mt-0 mt-6'>
          {socialMedia.map((social, index) => (
            <a href={social.link}>
            <img key={social.id} src={social.icon} alt={social.id} className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}/>
            </a>
          ))}
        </div>
      </div>
    </section>
  )


export default memo(Footer)