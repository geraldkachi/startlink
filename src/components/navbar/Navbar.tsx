import { Modal } from 'antd'
import { useState, useRef, RefObject } from 'react'
import PlaceOrder from '../placeorder/PlaceOrder'
import { Link, useNavigate } from 'react-router-dom'
// import Navicon from "../../assets/svg/navicon.png"
// import Navicon from "../../assets/svg/navTwo.png"

import Navicon from "../../assets/svg/newnewnavicon.svg"
interface Props {
    scrollToSection: (n?: RefObject<HTMLDivElement>) => void | undefined,
    ref?: RefObject<HTMLDivElement> | null
    // onUpdateActiveLink?: (n: string) => void
}
const Navbar = ({scrollToSection, ref, }: Props) => {
    const [stateNew, setStateNew] = useState<boolean>(false)
    const navigate = useNavigate()


    return (
        <div className='sm:fixed top-0 sm:top-5 w-full z-50'>
            <div className="  max-w-[1360px] bg-[#ffffff] flex flex-wrap items-center justify-between mx-auto p-4 rounded-lg shadow-sm sm:shadow-sm">
                <Link to="/" className="flex items-center">
                   <img src={Navicon} alt="nav" />
                </Link>

                <div className="hidden sm:flex md:order-2">
                    {/* <Link to="#contact"> */}

                    <button type="button" onClick={() => {
                        scrollToSection &&  scrollToSection(ref)
                        }} className="text-[#000000] bg-[#ffffff] mr-2 sm:mr-10 hover:text-[#454545] focus:outline-none">Contact Support </button>
                    {/* </Link> */}
                        {' '}
                    <button type="button" onClick={() => navigate('/placeorder')} className="flex items-center text-white bg-[#2568FF] focus:outline-none focus:ring-blue-300 font-medium rounded-md sm:rounded-lg text-sm px-4 sm:py-3 py-2 text-center mr-3 md:mr-0">Place an order

                        <svg className="ml-3" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_322)">
                                <path d="M11.2814 7.68114L7.70535 4.10514L8.64802 3.16248L13.8334 8.34781L8.64802 13.5331L7.70535 12.5905L11.2814 9.01448H3.16669V7.68114H11.2814Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_322">
                                    <rect width="16" height="16" fill="white" transform="translate(0.5 0.347778)" />
                                </clipPath>
                            </defs>
                        </svg>

                    </button>
                    {/* <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button> */}
                </div>
            </div>
            {/* </nav> */}


            <div className="overflow-hidden">
                <Modal open={stateNew} onCancel={() => setStateNew(false)} footer={null}
                    closeIcon={
                        <>
                            <svg className="icon solid text-grey-slate cursor-pointer float-right m-4 absolute top-0 right-0"

                                width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_b_1_654)">
                                    <path d="M20.0002 36.6666C29.2049 36.6666 36.6668 29.2047 36.6668 19.9999C36.6668 10.7952 29.2049 3.33325 20.0002 3.33325C10.7954 3.33325 3.3335 10.7952 3.3335 19.9999C3.3335 29.2047 10.7954 36.6666 20.0002 36.6666Z" fill="white" fill-opacity="0.3" />
                                    <path d="M20.0002 36.6666C29.2049 36.6666 36.6668 29.2047 36.6668 19.9999C36.6668 10.7952 29.2049 3.33325 20.0002 3.33325C10.7954 3.33325 3.3335 10.7952 3.3335 19.9999C3.3335 29.2047 10.7954 36.6666 20.0002 36.6666Z" stroke="#2568FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <path d="M25 15L15 25" stroke="#2568FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M15 15L25 25" stroke="#2568FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <defs>
                                    <filter id="filter0_b_1_654" x="-13.6665" y="-13.6667" width="67.3333" height="67.3333" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="8" />
                                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_654" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_654" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </>
                    }
                    maskClosable={false}
                    width={1000}
                >
                    {/* <Modal show={stateNew} closeModal={setStateNew}> */}
                    <PlaceOrder {...{ setStateNew }} />
                </Modal>
            </div>
        </div>
    )
}

export default Navbar
