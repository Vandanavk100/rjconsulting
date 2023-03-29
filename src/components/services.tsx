import React from 'react'
import ServicesIcon from '../images/services.svg'
import Image from 'next/image'

export default function Services() {
  return (
    <>
      <div className='p-5'>
        <Image width="300" height="300" src={ServicesIcon} alt="Services" />
      </div>

      <div className="flex flex-col items-center">
        <h1 className='text-3xl text-white m-4'>Services</h1>
        <p className="text-gray-400 text-center">We offer a wide range of technology services that cater<br /> to your specific needs.</p>
      </div>

      <div className="flex w-full">
        <div id="left-accordion" className='bg-transparent flex-1 m-4'>
          <div
            className="bg-transparent bagt border bodb">
            <h2 className="mb-0 " id="left-heading-one">
              <button
                className="bagt  group relative flex w-full items-center rounded-none border-0 bg-white py-4 px-5 text-left text-xl text-white transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-white [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-white-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#left-collapse-one"
                aria-expanded="false"
                aria-controls="left-collapse-one">
                Web and mobile app development
                <span
                  className="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white rounded-t-lg">
                        <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>

                </span>
              </button>
            </h2>
            <div
              id="left-collapse-one"
              className="!visible hidden border-0"
              data-te-collapse-item
              aria-labelledby="left-heading-one"
              data-te-parent="#left-accordion">
              <div className="py-4 px-5 text-gray-400">
                From ideation to execution, we bring your ideas to life with sleek and user-friendly applications.
              </div>
            </div>
          </div>      
          <div
            className="bagt  bodb bg-white dark:border-neutral-600 dark:bg-neutral-800">
            <h2 className="mb-0" id="left-heading-three">
              <button
                className="bagt   group relative flex w-full items-center  border-0  py-4 px-5 text-left text-xl text-white transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-white [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-white-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#left-collapse-three"
                aria-expanded="false"
                aria-controls="left-collapse-three">
                Custom software development
                <span
                  className="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="left-collapse-three"
              className="!visible hidden"
              data-te-collapse-item
              aria-labelledby="left-heading-three"
              data-te-parent="#left-accordion">
              <div className="py-4 px-5 text-gray-400">
                Our team can create bespoke software solutions that fit your unique business requirements.
              </div>
            </div>
          </div>
        </div>
        <div id="right-accordion" className='flex-1 m-4'>
        <div
            className="bagt border bodb border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
            <h2 className="mb-0" id="right-heading-three">
              <button
                className="bagt  group relative flex w-full items-center rounded-none border-0 bg-white py-4 px-5 text-left text-xl text-white transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-white [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-white-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#right-collapse-three"
                aria-expanded="false"
                aria-controls="right-collapse-three">
                IIOT, MES, Industry 4.0
                <span
                  className="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="right-collapse-three"
              className="!visible hidden border-0"
              data-te-collapse-item
              aria-labelledby="right-heading-two"
              data-te-parent="#right-accordion">
              <div className="py-4 px-5 text-gray-400">
              Our team can design and implement solutions to increase efficiency, reduce costs, and optimize manufacturing processes with real-time data analysis, predictive maintenance, and more.
              </div>
            </div>
          </div>
          <div
            className="bagt  bodb border border-t-0 rounded-t-lg border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
            <h2 className="mb-0" id="right-heading-one">
              <button
                className="bagt group relative flex w-full items-center rounded-t-lg border-0 bg-white py-4 px-5 text-left text-xl text-white transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-white [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-white-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#right-collapse-one"
                aria-expanded="false"
                aria-controls="right-collapse-one">
                Cloud computing
                <span
                  className="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white rounded-t-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="right-collapse-one"
              className="!visible hidden border-0"
              data-te-collapse-item
              aria-labelledby="right-heading-one"
              data-te-parent="#right-accordion">
              <div className="py-4 px-5 text-gray-400">
                We help businesses migrate to the cloud and optimize their infrastructure to reduce costs and improve efficiency.
              </div>
            </div>
          </div>

          <div
            className="bagt border border-t-0 bodb border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
            <h2 className="mb-0" id="right-heading-two">
              <button
                className="bagt  group relative flex w-full items-center rounded-none border-0 bg-white py-4 px-5 text-left text-xl text-white transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-white [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-white-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#right-collapse-two"
                aria-expanded="false"
                aria-controls="right-collapse-two">
                Blockchain and cryptocurrency
                <span
                  className="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="right-collapse-two"
              className="!visible hidden border-0"
              data-te-collapse-item
              aria-labelledby="right-heading-two"
              data-te-parent="#right-accordion">
              <div className="py-4 px-5 text-gray-400">
                Stay ahead of your competitors by adopting distributed ledger and blockchain technology early.
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="flex justify-content-center mt-8 pb-8">
        <a href="#getintouch" 
          type="button"
          className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br navbtncol inline-block rounded-full bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
          MEET OUR TEAM
        </a>
      </div>
    </>
  )
}

