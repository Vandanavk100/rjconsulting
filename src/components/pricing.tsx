import React from 'react'
import pricingIcon from "../images/pricinglogo.svg"
import Image from 'next/image'
import timeIcon from '../images/time.svg'
import fixedIcon from '../images/fix.svg'
import customIcon from '../images/custom.svg'

export default function Pricing() {
  return (
    <>
      <div className="p-4 flex flex-col items-center">
      <Image width="300" height="300" src={pricingIcon} alt="Pricing Iocn" />
        <h1 className="text-center mt-5 mb-5 text-black text-4xl font-bold  text-neutral-700">Pricing</h1>
        <p className='text-gray-400 text-center'>We understand that every project is unique, and <br />that{"'"}s why we offer flexible pricing models to suit your needs. Here are the pricing models we offer:</p>
      </div>

      <div className="p-4 w-full flex">
        <div className="bg-white rounded-2xl m-4 px-8 py-4">
          <div className="flex mb-3 justify-center">
          <Image width="62" height="62" src={timeIcon} alt="Time Iocn" />

          </div>
          <p className="font-bold mt-6">Time and Materials</p>
          <ul className="text-sm text-neutral-500 list-disc p-2">
            <li>Ideal for projects where the scope of work is evolving.</li>
            <li>You pay for the actual time spent on your project.</li>
            <li>Provides flexibility to adjust the scope of work and budget as the project progresses.</li>
            <li>Suitable for long-term or ongoing projects.</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl m-4 px-8 py-4 ">
          <div className="flex justify-center mb-3"> <Image width="70" height="70" src={fixedIcon} alt="Fixed Iocn" />
          </div>
          <p className="font-bold mt-6">Fixed Price</p>
          <ul className="text-sm text-neutral-500 list-disc p-2">
            <li>Ideal for projects where the scope of work is well-defined.</li>
            <li>We provide a detailed project plan with a fixed price for the entire project.</li>
            <li>You pay the agreed amount regardless of the actual time spent on the project.</li>
            <li>Provides predictability and certainty on project costs and timelines.</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl m-4 px-8 py-4">
          <div className="flex justify-center mb-3"> <Image width="70" height="70" src={customIcon} alt="Custom Iocn" />
          </div><p className="font-bold mt-6">Custom Pricing</p>
          <ul className="text-sm text-neutral-500 list-disc p-2">
            <li>Ideal for projects that require a unique pricing model.</li>
            <li>We work with you to find a pricing solution that best suits your project.</li>
            <li>Provides flexibility to accommodate any specific requirements or constraints of your project.</li>
            <li>Suitable for complex or large-scale projects.</li>
          </ul>
        </div>
      </div>
    </>
  )
}