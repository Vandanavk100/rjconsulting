/**
* Home Page
* @returns 
*/
import Navigation from '../components/navigation';
import Footer from './footer';
import React, { useEffect, useRef, useState } from "react";
import Services from '@/components/services';
import Domain from '@/components/domain';
import WORK from '@/components/how_we_work';
import Pricing from '@/components/pricing';
import AboutUs from '@/components/about_us';
import MeetOurTeam from '@/components/meet_our_team';
import OurCustomer from '@/components/our_customer';
import Blog from '@/components/blog';
import GetInTouch from '@/components/get_in_touch';
import classNames from 'classnames';

export default function Home() {
  const mainWrapperRef = useRef<HTMLDivElement | null>(null);
  const [highLightNavbar, setHighLightNavbar] = useState(false);
  useEffect(() => {

    if (mainWrapperRef.current) {
      const handleScroll = () => {
        if (Number(mainWrapperRef.current?.scrollTop) > 50) {
          setHighLightNavbar(true);
        } else {
          setHighLightNavbar(false);
        }
      };

      mainWrapperRef.current.addEventListener('scroll', handleScroll);

      return () => {
        mainWrapperRef.current?.removeEventListener('scroll', handleScroll);
      };
    }

  }, []);

  const handleClick = () => {
    mainWrapperRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const content = (
    <>

<section id="home" className="page-section flex flex-col snap-start w-screen h-screen justify-center">
  <div className="container mx-auto px-8 py-4 flex items-center md:flex-row flex-col md:flex-1" id="homepage">
    <div className="w-full md:w-5/12">
      <h2 className="text-3xl mb-4"><span className="font-semibold">Looking for the Best Software for Your Business? </span></h2>
      <h2 className="text-3xl mb-4"><span className="font-semibold text-sky-500">Let Us Build it for You!</span></h2>
      <p className="text-neutral-500 mb-6 md:mr-6">At RJ Consulting, we bring in-depth knowledge and experience working with early-stage startups as well as large enterprises to provide cutting-edge technology solutions across various domains.</p>
      <div className="relative">
        <a href="#getintouch" type="button" className="mt-6 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 nonenavbtn navbtncol text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-r-3xl rounded-b-3xl text-xs px-5 py-2.5 text-center md:mr-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">START YOUR PROJECT</a>
      </div>
    </div>
  </div>
</section>



      {/* section two - services */}
      <section id="services" className="page-section flex flex-col snap-start bg-amber-200 w-screen h-screen justify-center" >
        <div className='container mx-auto px-8 py-4 flex-1 flex flex-col justify-center items-center'>
          <Services />
        </div>
      </section>

      {/* domain section  */}
      <section id="domain" className="page-section bg-sky-50 flex flex-col snap-start  w-screen h-screen justify-center" >
        <div className='container mx-auto px-8 flex-1 flex flex-col justify-center items-center'>
          <Domain />
        </div>
      </section>

      {/* how we work section */}
      <section className="page-section bg-sky-50 flex flex-col snap-start w-screen h-screen justify-center" >
        <div className='container mx-auto px-8 py-4 flex-1 flex flex-col justify-center items-center'>
          <WORK />
        </div>
      </section>

      {/* pricing */}
      <section id="pricing" className="page-section bg-sky-50 flex flex-col snap-start w-screen h-screen justify-center">
        <div className='container mx-auto px-8 py-4 flex-1 flex flex-col justify-center items-center'>
          <Pricing />
        </div>
      </section>

      {/*about Us section  */}
      <section id="aboutus" className="page-section bg-sky-50 flex flex-col snap-start w-screen h-screen justify-center" >
        <div className='container mx-auto px-8 py-4 flex-1 flex flex-col justify-center items-center'>
          <AboutUs />
        </div>
      </section>

      {/* 10 person section */}
      <section className="page-section bg-sky-50 flex flex-col snap-start w-screen h-screen justify-center" >
        <div className='container mx-auto px-8 py-4 flex-1 flex flex-col justify-center items-center'>
          <MeetOurTeam />
        </div>
      </section>

      {/* {Our Customer} */}
      {<section className="page-section bg-sky-50 flex flex-col hidden">
        <div className='container mx-auto px-8 py-4 flex-1 flex flex-col justify-center items-center'>
          <OurCustomer />
        </div>
      </section>}

      {/* blog */}
      {<section className="page-section bg-sky-50  flex flex-col hidden">
        <div className='container mx-auto px-8 py-4 flex-1 flex flex-col justify-center items-center'>
          <Blog />
        </div>
      </section>}

      {/* get in touch */}
      <section id="getintouch" className="page-section bg-sky-50  flex flex-col snap-start justify-center" >
        <div className='container mx-auto px-8 py-4 flex-1 flex flex-col justify-evenly'>
          <GetInTouch />
        </div>
      </section>
      {/* </div> */}
    </>
  )

  return (
    <>
      <div ref={mainWrapperRef} className='snap-y snap-mandatory h-screen overflow-y-auto overflow-x-hidden' style={{ scrollSnapType: 'y mandatory', willChange: 'scroll-position' }}>
        <Navigation classNames={
          classNames({
            "shadow-md": highLightNavbar
          })
        } />
        {content}
        <Footer id="contactus" />
        <div>
          <button
            className={`fixed bottom-8 right-8 bg-sky-500 text-white rounded-full p-4 shadow-lg transition-opacity duration-300 hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 ${highLightNavbar ? 'visible' : 'invisible'}`}
            onClick={handleClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              strokeWidth="2.5"
              stroke="white"
              className="h-4 w-4">
              <path
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
                clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}
