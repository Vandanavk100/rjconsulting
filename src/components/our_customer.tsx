import React from 'react'
import Carousel from "react-multi-carousel";


export default function OurCustomer() {
    return (
        <>
           <div className="p-4 flex flex-col items-center">
            <svg width="335" height="116" viewBox="0 0 335 116" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M177.667 14.5C172.35 14.5 168 18.85 168 24.1667V67.6667L182.5 53.1667H206.667C211.984 53.1667 216.334 48.8167 216.334 43.5V24.1667C216.334 18.85 211.984 14.5 206.667 14.5H177.667ZM177.667 24.1667H206.667V43.5H177.667V24.1667ZM143.834 43.5C135.704 43.5 129.334 49.8655 129.334 58C129.334 66.1345 135.704 72.5 143.834 72.5C151.963 72.5 158.334 66.1345 158.334 58C158.334 49.8655 151.963 43.5 143.834 43.5ZM143.834 53.1667C146.637 53.1667 148.667 55.2015 148.667 58C148.667 60.7985 146.637 62.8333 143.834 62.8333C141.03 62.8333 139 60.7985 139 58C139 55.2015 141.03 53.1667 143.834 53.1667ZM143.834 77.3333C130.054 77.3333 119.667 84.3695 119.667 93.693V101.5H168V93.693C168 84.3695 157.613 77.3333 143.834 77.3333ZM143.834 87C150.934 87 155.866 89.436 157.626 91.8333H130.042C131.801 89.436 136.733 87 143.834 87Z" fill="#279BE9" />
              <g opacity="0.2">
                <path d="M125.598 31.7549L84.0376 6.79592L42.4807 31.7549L0 6.29204L1.67961 3.50388L42.4236 27.9624L84.0141 3L125.574 27.9624L167.182 3L208.742 27.9624L250.356 3L291.916 27.9624L332.66 3.50388L334.347 6.29204L291.95 31.7549L250.39 6.79592L208.829 31.7549L167.272 6.79592L125.598 31.7549ZM250.356 46.9353L291.916 71.8943L334.357 46.4314L332.701 43.613L291.957 68.0681L250.4 43.1091L208.839 68.0681L167.279 43.1091L125.722 68.0681L84.1619 43.1091L42.6016 68.0681L1.67961 43.613L0 46.4314L42.4236 71.8943L83.9805 46.9353L125.541 71.8943L167.101 46.9353L208.658 71.8943L250.356 46.9353ZM250.356 87.0746L291.916 112.034L334.357 86.5707L332.67 83.7859L291.923 108.241L250.366 83.282L208.806 108.241L167.246 83.282L125.689 108.241L84.1283 83.282L42.568 108.241L1.82406 83.7859L0 86.5707L42.4236 112.034L83.9805 87.0746L125.541 112.034L167.101 87.0746L208.658 112.034L250.356 87.0746Z" fill="#279BE9" />
              </g>
            </svg>
            <h1 className="text-center mt-10 mb-0 text-black text-4xl font-bold text-neutral-700">What Our Customers are Saying</h1>
          </div>

          <div className="flex justify-center w-2/4">
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={true}
              responsive={{
                superLargeDesktop: {
                  // the naming can be any, depends on you.
                  breakpoint: { max: 4000, min: 1500 },
                  items: 1
                },
                desktop: {
                  breakpoint: { max: 1500, min: 1024 },
                  items: 1
                },
                tablet: {
                  breakpoint: { max: 1024, min: 660 },
                  items: 1
                },
                mobile: {
                  breakpoint: { max: 660, min: 0 },
                  items: 1
                }
              }}
              ssr={false} // means to render carousel on server-side.
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={2000}
              keyBoardControl={true}
              transitionDuration={500}
              containerClass="carousel-container w-full h200 pt-[25px] pt-[25px]"
              deviceType={"desktop"}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >

              <div className="rounded-3xl select-none px-16 py-8 bg-white abwocs max-lg:w-3/4 m-10">
                <p className='text-neutral-500'>
                  I had a great experience working with ABC App Development on my latest project. They were able to take my concept and turn it into a fully functional app that is both user-friendly and visually appealing. Their attention to detail and responsiveness to feedback was impressive, and I appreciated their commitment to ensuring that the app met my specific needs. I would definitely work with them again on future projects.
                </p>
                <p className="text-right font-bold mt-10">Alfonzo Messina</p>
                <p className="text-right">VP, XYZ Company</p>
              </div>
              <div className="rounded-3xl px-16 py-8  select-none  bg-white abwocs max-lg:w-3/4  m-10">
                <p className='text-neutral-500'>
                  I had a great experience working with ABC App Development on my latest project. They were able to take my concept and turn it into a fully functional app that is both user-friendly and visually appealing. Their attention to detail and responsiveness to feedback was impressive, and I appreciated their commitment to ensuring that the app met my specific needs. I would definitely work with them again on future projects.
                </p>
                <p className="text-right font-bold mt-10">12 Alfonzo Messina</p>
                <p className="text-right">VP, XYZ Company</p>
              </div>
            </Carousel>
          </div>
        </>
    )
}