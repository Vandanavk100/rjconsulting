import Image from 'next/image'
import React from 'react'



export default function Blog() {
  return (
    <>
      <div className="p-4">
        <svg width="336" height="109" viewBox="0 0 336 109" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.2">
            <mask id="mask0_97_466" maskUnits="userSpaceOnUse" x="0" y="0" width="336" height="109">
              <path d="M0 0H335.385V109H0V0Z" fill="white" />
            </mask>
            <g mask="url(#mask0_97_466)">
              <path d="M125.897 28.7549L84.3365 3.79592L42.7795 28.7549L0.298828 3.29204L1.97844 0.503883L42.7224 24.9624L84.3129 0L125.873 24.9624L167.481 0L209.041 24.9624L250.655 0L292.215 24.9624L332.959 0.503883L334.645 3.29204L292.249 28.7549L250.688 3.79592L209.128 28.7549L167.571 3.79592L125.897 28.7549ZM250.655 43.9353L292.215 68.8943L334.656 43.4314L332.999 40.613L292.255 65.0681L250.699 40.1091L209.138 65.0681L167.578 40.1091L126.021 65.0681L84.4607 40.1091L42.9005 65.0681L1.97844 40.613L0.298828 43.4314L42.7224 68.8943L84.2794 43.9353L125.84 68.8943L167.4 43.9353L208.957 68.8943L250.655 43.9353ZM250.655 84.0746L292.215 109.034L334.656 83.5707L332.969 80.7859L292.222 105.241L250.665 80.282L209.105 105.241L167.544 80.282L125.987 105.241L84.4272 80.282L42.8669 105.241L2.12289 80.7859L0.298828 83.5707L42.7224 109.034L84.2794 84.0746L125.84 109.034L167.4 84.0746L208.957 109.034L250.655 84.0746Z" fill="#279BE9" />
            </g>
          </g>
          <path d="M152 19C147.628 19 144 22.6277 144 27V43H132V51H128V59H132V83C132 87.3723 135.628 91 140 91H196C200.372 91 204 87.3723 204 83V59H208V51H204V43H192V27C192 22.6277 188.372 19 184 19H152ZM152 27H184V43H176V51H180V59H156V51H160V43H152V27ZM140 51H148V59C148 63.3723 151.628 67 156 67H180C184.372 67 188 63.3723 188 59V51H196V83H140V51Z" fill="#279BE9" />
        </svg>
        <h1 className="text-center mt-10 mb-10 text-black text-4xl font-bold text-neutral-700">Blog</h1>
      </div>

      <div className="grid grid-cols-3 max-lg:grid-cols-1 pb-10 gap-12 max-xl:gap-8 mt-5">
        <div className="bg-white rounded-2xl ">
          <div><Image width="200" height="200" src="/images/blog1.jpg" alt="" className="blogimg" /></div>
          <div className="p-5">
            <p className="font-bold p-2">Discovery and Consultation</p>
            <p className="text-sm list-disc p-2 text-neutral-500">We{"'"}ll start by getting to know your business and understanding your unique requirements. Our team of experts will work with you to identify your goals, challenges, and opportunities.</p>
            <button className="font-sm text-sky-400 p-2">view more</button></div></div>

        <div className="bg-white rounded-2xl ">
        <div><Image width="200" height="200" src="/images/blog2.webp" alt="" className="blogimg" /></div>
          <div className="p-5">

            <p className=" p-2 font-bold ">Proposal and Planning</p>
            <p className="text-sm list-disc p-2  text-neutral-500">Based on the information gathered during the discovery phase, we{"'"}ll provide you with a proposal outlining our recommended solutions, timeline, and costs. Once the proposal is approved, we{"'"}ll move on to the planning phase.</p>
            <button className="font-sm text-sky-400 p-2">view more</button></div>
        </div>

        <div className="bg-white rounded-2xl">
          <div>
          <div><Image width="200" height="200" src="/images/blog3.png" alt="" className="blogimg" /></div>
            <p className="p-2 font-bold ">Design and Development</p>
            <p className="text-sm list-disc p-2  text-neutral-500">Our team of designers and developers will work on creating a solution that meets your specific requirements. We{"'"}ll keep you updated throughout the process and seek your feedback at every stage to ensure we{"'"}re meeting your expectations.</p>
            <button className="font-sm text-sky-400 p-2">view more</button></div>
        </div>
      </div>
    </>
  )
}