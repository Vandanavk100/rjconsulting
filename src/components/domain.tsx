import React from 'react'
import Carousel from "react-multi-carousel";
import DomainIcon from '../images/domain.svg'
import Image from 'next/image';
import Fintech_icon from '../images/Flintech.svg'
import ecommerce from '../images/Ecommerce.svg'
import healthcare from '../images/healthcare.svg'
import gaming from '../images/gaming.svg'
import greentech from '../images/greentech.svg'
import powerandenergy from '../images/powerandenergy.svg'
import manufacturing from '../images/manufaturing.svg'
import blockchain from '../images/blockchain.svg'
import crypto from '../images/crypto.svg'


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1500 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 1500, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 660 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 660, min: 0 },
    items: 1
  }
};

export default function Domain() {
  return (
    <>
      <div className='domain'>
      <Image width="300" height="300" src={DomainIcon} alt="DomainIcon" />
        <h1 className="text-center mt-10 mb-10 text-black text-4xl font-bold text-neutral-700">Domains</h1>
      </div>
      <div className="w-full ">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={false} // means to render carousel on server-side.
          infinite={true}
          autoPlay={false}
          arrows={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          transitionDuration={500}
          containerClass="carousel-container w-full h500 pt-[25px] pt-[25px]"
          deviceType={"desktop"}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {/* item 1 */}
          <div className="domain-box select-none ease-in-out relative mx-auto h-full">
            <div className="domain-icon  absolute px-1 py-[1rem] flex justify-center items-center top-[-2.5rem] ">
            <Image className='' width="70" height="70" src={Fintech_icon} alt="fintechIcon" />
            </div>
            <div className='domain-content rounded-2xl bg-white p-4 px-[2rem] pt-[3rem] h-full '>
              <p className="font-bold">Fintech</p>
              <ul className="text-sm text-neutral-500 list-disc p-2"><li>Customized Software for Financial Institutions</li>
                <li>Digital Solutions to Enhance Customer Experience</li>
                <li>Fraud Detection and Prevention Software</li>
                <li>Data Analytics to Optimize Financial</li>
                <li>Technology Solutions for Secure Transactions</li></ul>
            </div>
          </div>

          {/* item 2 */}
          <div className="domain-box select-none ease-in-out relative mx-auto h-full">
            <div className="domain-icon absolute px-1 py-[1rem] flex justify-center items-center top-[-2.5rem] ">
            <Image className='' width="70" height="70" src={ecommerce} alt="fintechIcon" />
            </div>
            <div className='domain-content rounded-2xl bg-white p-4 px-[2rem] pt-[3rem] h-full'>
              <p className="font-bold">E-commerce</p>
              <ul className="text-sm list-disc text-neutral-500 p-2"><li>Customized E-commerce Platform Development</li>
                <li>Mobile App Development for E-commerce</li>
                <li>Payment Gateway Integration Services</li>
                <li>Shopping Cart Optimization for Increased Sales</li>
                <li>Supply Chain Management Solutions for E-commerce</li>
              </ul>
            </div>
          </div>

          {/* item 3 */}
          <div className="domain-box select-none ease-in-out relative mx-auto h-full">
            <div className="domain-icon  absolute px-1 py-[1rem] flex justify-center items-center top-[-2.5rem] ">
            <Image className='' width="70" height="70" src={healthcare} alt="fintechIcon" />
            </div>
            <div className='domain-content rounded-2xl bg-white p-4 px-[2rem] pt-[3rem] h-full'>
              <p className="font-bold">Healthcare</p>
              <ul className="text-sm list-disc text-neutral-500 p-2"><li>Telemedicine Solutions for Remote Patient Care</li>
                <li>Electronic Health Record (EHR) Management Software</li>
                <li>Health Analytics to Improve Patient Outcomes and Operations</li>
                <li> Custom Healthcare Software Solutions for Clinics and Hospitals</li>
              </ul>
            </div>
          </div>

          {/* item 4 */}
          <div className="domain-box select-none ease-in-out relative mx-auto h-full">
            <div className="domain-icon absolute px-1 py-[1rem] flex justify-center items-center top-[-2.5rem] ">
            <Image className='' width="70" height="70" src={gaming} alt="fintechIcon" />
            </div>
            <div className='domain-content rounded-2xl bg-white p-4 px-[2rem] pt-[3rem] h-full'>
              <p className="font-bold">Gaming</p>
              <ul className="text-sm list-disc text-neutral-500 p-2"><li>Game Development Services for PC and Mobile</li>
                <li>Virtual Reality and Augmented Reality Game Development</li>
                <li>Multiplayer Game Development and Integration Services</li>
                <li>Game Monetization Strategies and  Purchases</li>
              </ul>
            </div>
          </div>

            {/* item 5 */}
            <div className="domain-box select-none ease-in-out relative mx-auto h-full">
            <div className="domain-icon absolute px-1 py-[1rem] flex justify-center items-center top-[-2.5rem] ">
            <Image className='' width="70" height="70" src={greentech} alt="fintechIcon" />
            </div>
            <div className='domain-content rounded-2xl bg-white p-4 px-[2rem] pt-[3rem] h-full'>
              <p className="font-bold">Greentech</p>
              <ul className="text-sm list-disc text-neutral-500 p-2"><li>Custom Software Solutions for Renewable Energy Management</li>
                <li>IoT-Enabled Energy Monitoring and Management</li>
                <li>Sustainable Supply Chain Management Solutions</li>
                <li>Carbon Footprint Tracking and Management Software</li>
                <li>Environmental Data Analytics and Reporting Solutions</li>
              </ul>
            </div>
          </div>

            {/* item 6 */}
            <div className="domain-box select-none ease-in-out relative mx-auto h-full ">
            <div className="domain-icon absolute px-1 py-[1rem] flex justify-center items-center top-[-2.5rem] ">
            <Image className='' width="70" height="70" src={powerandenergy} alt="fintechIcon" />
            </div>
            <div className='domain-content rounded-2xl bg-white h-full  p-4 px-[2rem] pt-[3rem] h-full'>
              <p className="font-bold">Power & Energy</p>
              <ul className="text-sm list-disc text-neutral-500 p-2"><li>Power Grid Management Software Solutions</li>
                <li>Renewable Energy Monitoring and Management Software</li>
                <li>Power Plant Management and Optimization Software</li>
                <li>Energy Storage and Battery Management Solutions</li>
                <li>Demand Response Management and Optimization</li>
              </ul>
            </div>
          </div>

           {/* item 7 */}
           <div className="domain-box select-none ease-in-out relative mx-auto h-full">
            <div className="domain-icon absolute px-1 py-[1rem] flex justify-center items-center top-[-2.5rem] ">
            <Image className='' width="70" height="70" src={manufacturing} alt="fintechIcon" />
            </div>
            <div className='domain-content rounded-2xl bg-white p-4 px-[2rem] pt-[3rem] h-full'>
              <p className="font-bold">Manufacturing</p>
              <ul className="text-sm list-disc text-neutral-500 p-2"><li>Custom Manufacturing Software Solutions for Streamlined Operations</li>
                <li>Real-Time Production Monitoring and Analytics</li>
                <li>Quality Control Management Software for Defect Reduction</li>
                <li>Supply Chain Management Solutions for Lean Operations</li>
                <li>IoT-Enabled Manufacturing Solutions for Industry 4.0</li>
              </ul>
            </div>
          </div>

             {/* item 8 */}
             <div className="domain-box select-none ease-in-out relative mx-auto h-full">
            <div className="domain-icon absolute px-1 py-[1rem] flex justify-center items-center top-[-2.5rem] ">
            <Image className='' width="70" height="70" src={blockchain} alt="fintechIcon" />

            </div>
            <div className='domain-content rounded-2xl bg-white p-4 px-[2rem] pt-[3rem] h-full'>
              <p className="font-bold">Blockchain</p>
              <ul className="text-sm list-disc text-neutral-500 p-2"><li>Blockchain Development and Consulting Services</li>
                <li>Decentralized Application (DApp) Development Services</li>
                <li>Smart Contract Development and Audit Services</li>
                <li>Supply Chain Management Solutions using Blockchain</li>
                <li>Blockchain-Based Identity Management and Authentication Solutions</li>
              </ul>
            </div>
          </div>

           {/* item 9 */}
           <div className="domain-box select-none ease-in-out relative mx-auto h-full">
            <div className="domain-icon absolute px-1 py-[1rem] flex justify-center items-center top-[-2.5rem] ">
            <Image className='' width="70" height="70" src={crypto} alt="fintechIcon" />
            </div>
            <div className='domain-content rounded-2xl bg-white p-4 px-[2rem] pt-[3rem] h-full'>
              <p className="font-bold">Crypto</p>
              <ul className="text-sm list-disc text-neutral-500 p-2"><li>Cryptocurrency Exchange Development and Integration Services</li>
                <li>Wallet Development and Management Solutions</li>
                <li>Crypto Trading Bot Development and Integration Services</li>
                <li>Blockchain-Based Token Development Services</li>
                <li>Crypto Payment Gateway Integration Services</li>
              </ul>
            </div>
          </div>
        </Carousel>
      </div>

    </>

  )

}
