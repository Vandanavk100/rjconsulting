import React from 'react'
import Image from 'next/image'
import how_we_work_icon from "../images/how_we_work_icon.svg"
import discovery_icon from '../images/Discovery.svg'
import Solutioning from '../images/Solutioning.svg'
import delivery_icon from '../images/delivery.svg'
export default function WORK() {
    return (
        <>
        <div className="p-4">
        <Image width="300" height="300" src={how_we_work_icon} alt="How We Work" />
            <h1 className="text-center mt-10 mb-10 text-black text-4xl font-bold  text-neutral-700">How We Work</h1>
          </div>

          <div className="p-4 w-full flex">
            <div className="bg-white rounded-2xl m-4 p-4">
              <div className="flex mb-3 justify-center">
              <Image width="75" height="75" src={discovery_icon} alt="Discovery Icon" />
              </div>
              <p className="font-bold px-2 mt-6">Discovery</p>
              <p className="text-sm list-disc p-2 text-neutral-500">We {"'"}ll start by getting to know your business and understanding your unique requirements. Our team of experts will work with you to identify your goals, challenges, and opportunities.</p>
            </div>

            <div className="bg-white rounded-2xl m-4 p-4">
              <div className="flex justify-center mb-3"> <Image width="70" height="70" src={Solutioning} alt="Solutioning Icon" /></div>
              <p className="font-bold px-2 mt-6">Solutioning</p>
              <p className="text-sm list-disc p-2 text-neutral-500">Based on the information gathered during the discovery phase, we{"'"}ll provide you with a proposal outlining our recommended solutions, timeline, and costs. Once the proposal is approved, we{"'"}ll move on to the planning phase.</p>
            </div>

            <div className="bg-white rounded-2xl m-4 p-4">
              <div className="flex justify-center mb-3"> <Image width="70" height="70" src={delivery_icon} alt="Delivery Icon" />
</div><p className="font-bold px-2 mt-6">Delivery</p>
              <p className="text-sm list-disc p-2 text-neutral-500">Our team of designers and developers will work on creating a solution that meets your specific requirements. We{"'"}ll keep you updated throughout the process and seek your feedback at every stage to ensure we{"'"}re meeting your expectations.</p>
            </div>
          </div>
        </>
    )}