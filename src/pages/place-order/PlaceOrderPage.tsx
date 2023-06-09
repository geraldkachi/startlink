import {  Navbar, PlaceOrder } from '../../components'
import Footer from '../../components/navbar/Footer'
import ContactInfo from '../../components/contactinfo/ContactInfo'
import { useState } from 'react'
import Image from "../../assets/svg/conimg.png"
import { Modal } from 'antd'
import useAuth from '../../hooks/useAuth'
import OrderSuccessful from '../../components/ordersuccessful/OrderSuccessful'

const PlaceOrderPage = () => {
    const [stateNew, setStateNew] = useState<boolean>(false)
    const [stateSuccess, setStateSuccess] = useState<boolean>(false)
    const count = useAuth(state => state.count)
    const costFee = useAuth(state => state.costFee)

     const formatKoboAmountForDisplay = (amount: number): string => {
        return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(amount);
     };
     const increaseCount = useAuth((state) => state.increaseCount)
     const decreaseCount = useAuth((state) => state.decreaseCount)


    return (
        <>
            <Navbar />
        <div className="mt-10 sm:mt-24">
            <div className='mb-10'>
                <p className=' max-w-5xl mx-auto text-[#031744] text-3xl sm:text-5xl font-semibold p-3'>Place Order</p>

                <div className="grid md:grid-cols-2 gap-x-4 max-w-5xl mx-auto">
                    <div className='p-3'>
                        {/* <PlaceIconTv className='w-1/2' /> */}
                        <img src={Image} alt="star" />
                        <div className="my-">
                            <div className="text-[#031744] text-4xl font-semibold">Starlink Standard Kit</div>

                            <div className="my-2">
                                <div className=" flex items-center justify-center max-w-fit bg-[#F6F6F6] rounded-lg p-2">
                                    <button onClick={decreaseCount} disabled={count === 1} >
                                    <svg className='cursor-pointer px-1' width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect y="0.569946" width="40" height="40" rx="5" fill="#E1E1E1" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M30 19.5699V21.5699H10V19.5699H30Z" fill="#5E5E6D" />
                                    </svg>
                                    </button>
                                    <p className="mx-2 border text-center w-8">{count}</p>

                                    {/* <input className="mx-2 border text-center w-8" type="text" value={count} onChange={(e: ChangeEvent<HTMLInputElement & EventTarget>) => setCount(e.target.value)} /> */}

                                    <svg onClick={increaseCount} className='cursor-pointer px-1' width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect y="0.569946" width="40" height="40" rx="5" fill="#2568FF" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M21.5 19.0699H29V22.0699H21.5V29.5699H18.5V22.0699H11V19.0699H18.5V11.5699H21.5V19.0699Z" fill="white" />
                                    </svg>

                                </div>
                            </div>
                                <p className="mt-10 text-[#031744] font-semibold text-2xl sm:text-3xl">{formatKoboAmountForDisplay(count * costFee)}</p>

                                <p className="mt-5 text-[#031744] text-lg font-normal neue">
                                High-speed, low-latency broadband internet in remote and rural locations across the globe. NGN19,260/mo with a one-time hardware cost of NGN268,584.
                            </p>
                        </div>
                    </div>

                    <ContactInfo {...{ setStateSuccess }} />
                </div>

            </div>
            <Footer />


            <Modal open={stateNew} onCancel={() => setStateNew(false)} footer={null}
             closeIcon={
                <>
                    <svg className="icon solid text-grey-slate cursor-pointer float-right m-4 absolute top-0 right-0"

                        width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_b_1_654)">
                            <path d="M20.0002 36.6666C29.2049 36.6666 36.6668 29.2047 36.6668 19.9999C36.6668 10.7952 29.2049 3.33325 20.0002 3.33325C10.7954 3.33325 3.3335 10.7952 3.3335 19.9999C3.3335 29.2047 10.7954 36.6666 20.0002 36.6666Z" fill="white" fillOpacity="0.3" />
                            <path d="M20.0002 36.6666C29.2049 36.6666 36.6668 29.2047 36.6668 19.9999C36.6668 10.7952 29.2049 3.33325 20.0002 3.33325C10.7954 3.33325 3.3335 10.7952 3.3335 19.9999C3.3335 29.2047 10.7954 36.6666 20.0002 36.6666Z" stroke="#2568FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <path d="M25 15L15 25" stroke="#2568FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15 15L25 25" stroke="#2568FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <defs>
                            <filter id="filter0_b_1_654" x="-13.6665" y="-13.6667" width="67.3333" height="67.3333" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
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

            {/* Success */}
            <Modal open={stateSuccess} onCancel={() => setStateSuccess(false)} footer={null}
             closeIcon={
                <>
                    <svg className="icon solid text-grey-slate cursor-pointer float-right m-4 absolute top-0 right-0"

                        width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_b_1_654)">
                            <path d="M20.0002 36.6666C29.2049 36.6666 36.6668 29.2047 36.6668 19.9999C36.6668 10.7952 29.2049 3.33325 20.0002 3.33325C10.7954 3.33325 3.3335 10.7952 3.3335 19.9999C3.3335 29.2047 10.7954 36.6666 20.0002 36.6666Z" fill="white" fillOpacity="0.3" />
                            <path d="M20.0002 36.6666C29.2049 36.6666 36.6668 29.2047 36.6668 19.9999C36.6668 10.7952 29.2049 3.33325 20.0002 3.33325C10.7954 3.33325 3.3335 10.7952 3.3335 19.9999C3.3335 29.2047 10.7954 36.6666 20.0002 36.6666Z" stroke="#2568FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <path d="M25 15L15 25" stroke="#2568FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15 15L25 25" stroke="#2568FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <defs>
                            <filter id="filter0_b_1_654" x="-13.6665" y="-13.6667" width="67.3333" height="67.3333" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
                <OrderSuccessful />
            </Modal>
        </div>
        </>
    )
}

export default PlaceOrderPage
