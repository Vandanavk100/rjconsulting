import React from 'react'
import Image from 'next/image'
import about_us_icon from "../images/about_us_icon.svg"
import customer from '../images/customer.svg'
import expertise from '../images/expertise.svg'
import experience from '../images/integrity.svg'


export default function AboutUs() {
    return (
        <>
         <div className='p-2'>
         <Image width="300" height="300" src={about_us_icon} alt="About Us" />
            <h1 className="text-center mt-10 mb-10 text-black text-4xl font-bold text-neutral-700">About Us</h1>
          </div>

          <div className="flex justify-center mb-20">
            <p className="abwocs rounded-3xl p-5 w-2/4 text-center text-neutral-500">
            RJ Consulting was founded to solve complex business problems and deliver exceptional value to clients. Our purpose is to provide innovative and cutting-edge software solutions that help businesses of all sizes achieve their goals.
            </p>
          </div>

          <div className="flex gap-8">

            <div className="bg-sky-200 rounded-2xl p-5 relative">
              <div className="mrmlmb1 bg-white p-3 flex justify-center rounded-md absolute top-[-2rem] w-[20%] left-[20%]">
              <Image width="40" height="40" src={customer} alt="Customer" />
              </div>
              <p className="font-bold mt-8">Excellence</p>
              <p className="text-sm  text-neutral-500">We are committed to delivering exceptional service and solutions that exceed our client{"'"}s expectations, every time. Our focus on excellence ensures that we are delivering the best possible outcomes.</p>
            </div>

            <div className="bg-sky-200 rounded-2xl p-5 relative">
              <div className="mrmlmb1 bg-white p-3 flex justify-center rounded-md absolute top-[-2rem] w-[20%] left-[20%]">
              <Image width="40" height="40" src={expertise} alt="expertise" />
              </div>
              <p className="font-bold mt-8">Expertise</p>
              <p className="text-sm  text-neutral-500">Our team consists of highly skilled and experienced professionals who are experts in their respective fields. We bring a wealth of knowledge and expertise to every project, ensuring that we deliver the best possible results.</p>
            </div>


            <div className="bg-sky-200 rounded-2xl p-5 relative">
              <div className="mrmlmb1 bg-white p-3 flex justify-center rounded-md absolute top-[-2rem] w-[20%] left-[20%]">
              <Image width="40" height="40" src={experience} alt="experience" />
              </div>
              <p className="font-bold mt-8">Experience</p>
              <p className="text-sm  text-neutral-500">With years of experience in the industry, we have developed a deep understanding of our client{"'"}s unique needs and challenges. Our experience enables us to provide tailored solutions that are specifically designed to meet their requirements.</p>
            </div>

           
          </div>
        </>
    )
}