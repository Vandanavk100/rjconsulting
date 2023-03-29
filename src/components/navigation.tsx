/**
 * Navigation component
 * Used to render rjc consulting menu
 */
import classNames from "classnames";
import Image from 'next/image'

type NavigationProps = {
  classNames?: string,
  id?: string,
}

export default function Navigation(props: NavigationProps) {

  return (
    <nav
      className={classNames("flex-no-wrap flex navbgcol w-full items-center justify-content-center fixed", props.classNames)}
      data-te-navbar-ref
    >
      <div className="flex w-full flex-wrap items-center justify-between justify-content-center container mx-auto px-8 py-4">
        <button
          className="block border-0 bg-transparent py-2 px-2.5 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-black-200 lg:hidden"
          type="button"
          data-te-collapse-init
          data-te-target="#navbarSupportedContent1"
          aria-controls="navbarSupportedContent1"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="[&>svg]:w-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-7 w-7">
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd" />
            </svg>
          </span>
        </button>
        <div>
        
          <Image className="image" src="/images/logo.jpg" width="100" height="75" alt="" />
       
        </div>
        <div
          className="!visible hidden flex-grow basis-[100%] justify-center items-center lg:!flex lg:basis-auto"
          id="navbarSupportedContent1"
          data-te-collapse-item>
          <a
            className="mt-2 mr-2 flex items-center text-black-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-black-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mt-0"
            href="#">
          </a>
          <ul
            className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row contents"
            data-te-navbar-nav-ref>
            <li className="lg:pr-2" data-te-nav-item-ref>
              <a
                className="text-xs text-neutral-500 hover:text-sky-700 focus:text-neutral-700 disabled:text-black/30 dark:text-black-200 dark:hover:text-sky-400 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
                href="#services"
                data-te-nav-link-ref
              >SERVICES</a>
            </li>
            <li className="lg:pr-2" data-te-nav-item-ref>
              <a
                className="text-xs text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-black-200 dark:hover:text-sky-400 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                href="#domain"
                data-te-nav-link-ref
              >DOMAINS</a >
            </li>
            <li className="lg:pr-2" data-te-nav-item-ref>
              <a
                className="text-xs text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-black-200 dark:hover:text-sky-400 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                href="#pricing"
                data-te-nav-link-ref
              >PRICING</a>
            </li>
            <li className="lg:pr-2" data-te-nav-item-ref>
              <a
                className="text-xs text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-black-200 dark:hover:text-sky-400 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                href="#aboutus"
                data-te-nav-link-ref
              >ABOUT US</a>
            </li>
            <li className="lg:pr-2" data-te-nav-item-ref>
              <a
                className="text-xs text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-black-200 dark:hover:text-sky-400 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                href="#contactus"
                data-te-nav-link-ref
              >CONTACT US</a>
            </li>
          </ul>
        </div>
        <div className="relative flex items-center">
          <div className="relative">
            <a href="#getintouch" type="button" className=" text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800  nonenavbtn navbtncol text-white   focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-t-3xl rounded-l-3xl text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">GET IN TOUCH</a>
          </div>
        </div>
      </div>
    </nav>
  )
}