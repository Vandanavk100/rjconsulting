import React from "react"
import Navigation from './navigation';

export default function Home() {
  return (
    <>
      <Navigation classNames='container mx-auto px-8 py-4' />
      <div className="container mx-auto px-8 py-4 flex items-center flex-[0.5]">
        <div className='w-5/12'>
          <h2 className="text-3xl mb-4"><span className="font-semibold">Welcome to <span className="text-sky-500">RJ consulting,</span></span></h2>
          <p>where we are dedicated to providing cutting-edge technology solutions to businessess in a variety of industries. Our team of experts combines creativity and technical skill to deliver top-notch results that help our clients stay ahead of the curve.</p>
        </div>
      </div>
    </>
  )
}