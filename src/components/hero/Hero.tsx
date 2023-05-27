import LeftIocnHero from '../../assets/svg/LeftIocnHero'
import RightIconHero from '../../assets/svg/RightIconHero'
// import Grid2Icon from '../../assets/svg/Grid2Icon'
// import Grid1Icon from '../../assets/svg/Grid1Icon'
// import Grid3Icon from '../../assets/svg/Grid3Icon'
import Footer from '../navbar/Footer'
// import CompanyList from './CompanyList'
// import GlowHeroIcon from '../../assets/svg/GlowHeroIcon'
import GlowImage from '../../assets/svg/glow.png'
import { Modal } from "antd";
import { Ref, forwardRef, useState } from 'react'
import PlaceOrder from '../placeorder/PlaceOrder'
import WhyStarlink from '../why-starlink/WhyStarlink'
import OurClient from '../our-client/OurClient'
import SimpleSelf from '../simple-self/SimpleSelf'
import FinancialPartners from '../financial-partners/FinancialPartners'
import YourDevice from '../your-device/YourDevice'
import ContactSection from '../contact-section/ContactSection'

interface Props {
    scrollToSection?: () => void
}

const Hero = forwardRef(({ scrollToSection }: Props, ref: Ref<HTMLDivElement>) => {
    const [stateNew, setStateNew] = useState<boolean>(false)



    return (
        <div className="sm:mt-20">
            <section className='max-w-screen-2xl mx-auto'>
                <div className="d relative">
                    <svg className='absolute hidden xl:block 2xl:block left-[480px] top-[340px]' width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M38.9376 10.5831C30.9018 9.53512 22.6632 10.519 16.159 15.9542C10.2882 20.8602 8.64858 28.0057 16.34 32.061C19.9809 33.9806 25.581 33.823 28.2968 30.373C31.3225 26.5293 25.7727 23.3157 22.5285 23.1977C14.9511 22.9218 7.32738 28.5335 6.36158 36.7852C5.21785 46.5571 15.3318 46.1651 15.3071 46.1025" stroke="#141313" strokeWidth="2" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M33.6207 3.28648C33.7941 4.16587 34.3118 4.87689 34.792 5.61291C36.3686 8.02987 38.8391 10.1289 41.7085 10.8112C38.5251 11.0818 34.4831 12.506 32.992 15.5139" stroke="#141313" strokeWidth="2" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {/* <GlowHeroIcon className=' fixed hidden xl:block right-0 top-0 -z-50' /> */}
                    <img src={GlowImage} alt="glow image" className='absolute hidden xl:block right-0 -top-32 -z-50' />

                    <RightIconHero className='absolute hidden xl:block left-16 top-52 z-20' />
                    <LeftIocnHero className='absolute hidden xl:block right-10 top-44 z-20' />
                    {/* <div className="max-w-7xl  flex flex-col items-center px-4 py-10 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32"> */}
                    <div className="max-w-7xl  flex flex-col items-center px-4 py-10 pb-10 mx-auto text-center  md:py- md:px-10 lg:px-32">
                        <h1 className="text-5xl font-semibold leading-none sm:text-7xl xl:max-w-3xl neue">Enterprise reseller of <span className="animate-text text-transparent bg-clip-text bg-gradient-to-r from-[#1460DD] from-10% via-sky-500 via-70% to-[#1460DD] 10% to-90% whitespace-nowrap">Starlink Kit</span> in Nigeria</h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-2xl">High-speed, low-latency broadband internet in remote and rural locations across the globe. ₦32,680/month with a one-time hardware cost of ₦510,720 only.</p>
                        <div className="flex flex-wrap justify-center">
                            <button onClick={() => setStateNew(prev => !prev)} type="button" className="flex items-center m-2 text-white bg-[#2568FF] focus:outline-none focus:ring-blue-300 font-semibold rounded-md sm:rounded-lg text-sm px-6 sm:py-3 py-2 text-center mr-3 md:mr-0">Place an order

                                <svg className="ml-3" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_1_322)">
                                        <path d="M11.2814 7.68114L7.70535 4.10514L8.64802 3.16248L13.8334 8.34781L8.64802 13.5331L7.70535 12.5905L11.2814 9.01448H3.16669V7.68114H11.2814Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_322">
                                            <rect width="16" height="16" fill="white" transform="translate(0.5 0.347778)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </button>
                            <button onClick={() => {
                                scrollToSection && scrollToSection()
                                // setStateNew(true)
                            }} type="button" className="flex items-center text-[#141313] border-[#141313] border m-2 bg-[#ffffff] focus:outline-none focus:ring-blue-300 font-medium rounded-md sm:rounded-lg text-sm px-6 sm:py-3 py-2 text-center mr-3 md:mr-0">Contact Support</button>
                        </div>

                        <div className="flex flex-col items-center justify-center my-3 sm:mt-48">
                            {/* <div className="block text-center">Trusted By 500+ Companies</div>
                            <div>
                                <svg width="120" height="25" viewBox="0 0 120 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_0_1)">
                                        <path d="M12 17.6957L6.12199 21.2857L7.71999 14.5857L2.48999 10.1057L9.35499 9.55568L12 3.19568L14.645 9.55568L21.511 10.1057L16.28 14.5857L17.878 21.2857L12 17.6957Z" fill="#EFB00D" />
                                    </g>
                                    <g clipPath="url(#clip1_0_1)">
                                        <path d="M36 17.6957L30.122 21.2857L31.72 14.5857L26.49 10.1057L33.355 9.55568L36 3.19568L38.645 9.55568L45.511 10.1057L40.28 14.5857L41.878 21.2857L36 17.6957Z" fill="#EFB00D" />
                                    </g>
                                    <g clipPath="url(#clip2_0_1)">
                                        <path d="M60 17.6957L54.122 21.2857L55.72 14.5857L50.49 10.1057L57.355 9.55568L60 3.19568L62.645 9.55568L69.511 10.1057L64.28 14.5857L65.878 21.2857L60 17.6957Z" fill="#EFB00D" />
                                    </g>
                                    <g clipPath="url(#clip3_0_1)">
                                        <path d="M84 17.6957L78.122 21.2857L79.72 14.5857L74.49 10.1057L81.355 9.55568L84 3.19568L86.645 9.55568L93.511 10.1057L88.28 14.5857L89.878 21.2857L84 17.6957Z" fill="#EFB00D" />
                                    </g>
                                    <g clipPath="url(#clip4_0_1)">
                                        <path d="M108 17.6957L102.122 21.2857L103.72 14.5857L98.49 10.1057L105.355 9.55568L108 3.19568L110.645 9.55568L117.511 10.1057L112.28 14.5857L113.878 21.2857L108 17.6957Z" fill="#EFB00D" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_0_1">
                                            <rect width="24" height="24" fill="white" transform="translate(0 0.695679)" />
                                        </clipPath>
                                        <clipPath id="clip1_0_1">
                                            <rect width="24" height="24" fill="white" transform="translate(24 0.695679)" />
                                        </clipPath>
                                        <clipPath id="clip2_0_1">
                                            <rect width="24" height="24" fill="white" transform="translate(48 0.695679)" />
                                        </clipPath>
                                        <clipPath id="clip3_0_1">
                                            <rect width="24" height="24" fill="white" transform="translate(72 0.695679)" />
                                        </clipPath>
                                        <clipPath id="clip4_0_1">
                                            <rect width="24" height="24" fill="white" transform="translate(96 0.695679)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </div> */}
                        </div>

                    </div>
                    <div className="pb-10 lg:pb-24">
                        {/* <CompanyList /> */}
                    </div>
                    <OurClient />
                </div>
            </section>

            <WhyStarlink {...{ setStateNew }} />
            <SimpleSelf {...{ setStateNew }} />
            <YourDevice />
            <FinancialPartners />
            <ContactSection {...{ ref }} />
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
        </div>
    )
})

export default Hero
