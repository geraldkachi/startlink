import { Dispatch, SetStateAction } from "react"
interface Props {
    setStateNew?: Dispatch<SetStateAction<boolean>>
}
const YourDevice = ({ setStateNew }: Props) => {
    return (
        <section>
            <div className='bg-[#020722] py-10 sm:py-20 text-white'>
                <h1 className="text-5xl font-semibold leading-none sm:text-7xl xl:max-w-3xl pb-10 text-center mx-auto neue">How to get your device</h1>
                <div className="max-w-7xl mx-auto">

                    <div className="grid md:grid-cols-3 gap-5 p-3">
                        <div className="flex space-x-2 sm:space-x-4">
                            <svg width="57" height="69" viewBox="0 0 57 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.98334 21.9844L26 9.27303L48.0167 21.9844V47.407L26 60.1183L3.98334 47.407V21.9844Z" fill="url(#paint0_linear_1_420)" stroke="#2568FF" />
                                <g filter="url(#filter0_b_1_420)">
                                    <path d="M33 12.6957L53.7846 24.6957V48.6957L33 60.6957L12.2154 48.6957V24.6957L33 12.6957Z" fill="url(#paint1_linear_1_420)" />
                                    <path d="M33.25 12.2627L33 12.1183L32.75 12.2627L11.9654 24.2627L11.7154 24.407V24.6957V48.6957V48.9844L11.9654 49.1287L32.75 61.1287L33 61.273L33.25 61.1287L54.0346 49.1287L54.2846 48.9844V48.6957V24.6957V24.407L54.0346 24.2627L33.25 12.2627Z" stroke="url(#paint2_linear_1_420)" />
                                </g>
                                <path d="M24.2122 40.6957V0.624678H31.8502V40.6957H24.2122ZM16.3462 7.35068V0.624678H31.2802V7.35068H16.3462Z" fill="white" />
                                <defs>
                                    <filter id="filter0_b_1_420" x="6.21533" y="6.54098" width="53.5693" height="60.3094" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="2.5" />
                                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_420" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_420" result="shape" />
                                    </filter>
                                    <linearGradient id="paint0_linear_1_420" x1="0.453158" y1="7.36235" x2="57.5584" y2="14.1873" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#2568FF" />
                                        <stop offset="1" stopColor="#001137" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_1_420" x1="33" y1="12.6957" x2="33" y2="60.6957" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="white" stopOpacity="0.63" />
                                        <stop offset="1" stopColor="white" stopOpacity="0" />
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_1_420" x1="22.3846" y1="12.6957" x2="33" y2="60.6957" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="white" stopOpacity="0" />
                                        <stop offset="1" stopColor="white" stopOpacity="0.62" />
                                    </linearGradient>
                                </defs>
                            </svg>


                            {/* <Grid1Icon className="mx-3" /> */}
                            <div className="space-y-2 neue">
                                <p className="text-xl lg:text-[32px] whitespace-nowrap font-semibold leading-snug">Place order</p>
                                <p className="leading-snug font-normal text-base">Fill the order creation form on our website.</p>
                            </div>
                        </div>

                        <div className="flex space-x-2 sm:space-x-4">
                            <svg width="69" height="69" viewBox="0 0 57 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.98334 22.9844L26 10.273L48.0167 22.9844V48.407L26 61.1183L3.98334 48.407V22.9844Z" fill="url(#paint0_linear_1_428)" stroke="#2568FF" />
                                <g filter="url(#filter0_b_1_428)">
                                    <path d="M33 13.6957L53.7846 25.6957V49.6957L33 61.6957L12.2154 49.6957V25.6957L33 13.6957Z" fill="url(#paint1_linear_1_428)" />
                                    <path d="M33.25 13.2627L33 13.1183L32.75 13.2627L11.9654 25.2627L11.7154 25.407V25.6957V49.6957V49.9844L11.9654 50.1287L32.75 62.1287L33 62.273L33.25 62.1287L54.0346 50.1287L54.2846 49.9844V49.6957V25.6957V25.407L54.0346 25.2627L33.25 13.2627Z" stroke="url(#paint2_linear_1_428)" />
                                </g>
                                <path d="M10.7291 37.2497L25.8341 21.4607C26.8981 20.3207 27.7531 19.3137 28.3991 18.4397C29.0831 17.5277 29.5771 16.6727 29.8811 15.8747C30.1851 15.0387 30.3371 14.2027 30.3371 13.3667C30.3371 11.6947 29.7861 10.3837 28.6841 9.43368C27.6201 8.48368 26.2331 8.00868 24.5231 8.00868C22.7751 8.00868 21.2171 8.46468 19.8491 9.37668C18.5191 10.2887 17.2651 11.7327 16.0871 13.7087L10.7861 9.20568C12.3821 6.50768 14.3581 4.47468 16.7141 3.10668C19.1081 1.70068 21.8441 0.997676 24.9221 0.997676C27.5441 0.997676 29.8241 1.51068 31.7621 2.53668C33.7381 3.56268 35.2581 4.98768 36.3221 6.81168C37.3861 8.63568 37.9181 10.7637 37.9181 13.1957C37.9181 14.8297 37.7091 16.3117 37.2911 17.6417C36.9111 18.9717 36.2461 20.3017 35.2961 21.6317C34.3841 22.9237 33.1111 24.3867 31.4771 26.0207L20.4761 37.2497H10.7291ZM10.7291 41.6957V37.2497L17.3411 34.9697H38.7731V41.6957H10.7291Z" fill="white" />
                                <defs>
                                    <filter id="filter0_b_1_428" x="6.21533" y="7.54098" width="53.5693" height="60.3094" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="2.5" />
                                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_428" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_428" result="shape" />
                                    </filter>
                                    <linearGradient id="paint0_linear_1_428" x1="0.453158" y1="8.36235" x2="57.5584" y2="15.1873" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#2568FF" />
                                        <stop offset="1" stopColor="#001137" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_1_428" x1="33" y1="13.6957" x2="33" y2="61.6957" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="white" stopOpacity="0.63" />
                                        <stop offset="1" stopColor="white" stopOpacity="0" />
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_1_428" x1="22.3846" y1="13.6957" x2="33" y2="61.6957" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="white" stopOpacity="0" />
                                        <stop offset="1" stopColor="white" stopOpacity="0.62" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            {/* <Grid2Icon className="mx-3" /> */}
                            <div className="space-y-2 neue">
                                <p className="text-xl lg:text-[32px] whitespace-nowrap font-semibold leading-snug">Confirm order</p>
                                <p className="leading-snug font-normal text-base">A contact person will reach out to confirm your order.</p>
                            </div>
                        </div>

                        <div className="flex space-x-2 sm:space-x-4">
                            <svg className='w-24 h-16 flex' width="57" height="69" viewBox="0 0 57 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.98334 21.9844L26 9.27303L48.0167 21.9844V47.407L26 60.1183L3.98334 47.407V21.9844Z" fill="url(#paint0_linear_1_436)" stroke="#2568FF" />
                                <g filter="url(#filter0_b_1_436)">
                                    <path d="M33 12.6957L53.7846 24.6957V48.6957L33 60.6957L12.2154 48.6957V24.6957L33 12.6957Z" fill="url(#paint1_linear_1_436)" />
                                    <path d="M33.25 12.2627L33 12.1183L32.75 12.2627L11.9654 24.2627L11.7154 24.407V24.6957V48.6957V48.9844L11.9654 49.1287L32.75 61.1287L33 61.273L33.25 61.1287L54.0346 49.1287L54.2846 48.9844V48.6957V24.6957V24.407L54.0346 24.2627L33.25 12.2627Z" stroke="url(#paint2_linear_1_436)" />
                                </g>
                                <path d="M23.5236 41.2657C20.8256 41.2657 18.3556 40.7907 16.1136 39.8407C13.8716 38.8527 11.9906 37.4467 10.4706 35.6227L15.6006 30.5497C16.3606 31.6897 17.4436 32.6017 18.8496 33.2857C20.2556 33.9697 21.7756 34.3117 23.4096 34.3117C24.9296 34.3117 26.2406 34.0457 27.3426 33.5137C28.4446 32.9437 29.2996 32.1647 29.9076 31.1767C30.5536 30.1507 30.8766 28.9727 30.8766 27.6427C30.8766 26.2367 30.5536 25.0397 29.9076 24.0517C29.2996 23.0637 28.4066 22.3037 27.2286 21.7717C26.0506 21.2397 24.6446 20.9737 23.0106 20.9737C22.2886 20.9737 21.5476 21.0307 20.7876 21.1447C20.0276 21.2207 19.3816 21.3537 18.8496 21.5437L22.2696 17.2117C23.2196 16.9077 24.1506 16.6607 25.0626 16.4707C26.0126 16.2427 26.8866 16.1287 27.6846 16.1287C29.7366 16.1287 31.5796 16.6227 33.2136 17.6107C34.8856 18.5607 36.1966 19.9287 37.1466 21.7147C38.1346 23.4627 38.6286 25.5337 38.6286 27.9277C38.6286 30.5877 38.0016 32.9247 36.7476 34.9387C35.4936 36.9147 33.7266 38.4727 31.4466 39.6127C29.2046 40.7147 26.5636 41.2657 23.5236 41.2657ZM18.8496 21.5437V17.0977L29.1096 5.18468L38.0016 5.07068L27.3996 17.2117L18.8496 21.5437ZM12.6936 7.35068V0.624678H38.0016V5.07068L31.6746 7.35068H12.6936Z" fill="white" />
                                <defs>
                                    <filter id="filter0_b_1_436" x="6.21533" y="6.54098" width="53.5693" height="60.3094" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="2.5" />
                                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_436" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_436" result="shape" />
                                    </filter>
                                    <linearGradient id="paint0_linear_1_436" x1="0.453158" y1="7.36235" x2="57.5584" y2="14.1873" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#2568FF" />
                                        <stop offset="1" stopColor="#001137" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_1_436" x1="33" y1="12.6957" x2="33" y2="60.6957" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="white" stopOpacity="0.63" />
                                        <stop offset="1" stopColor="white" stopOpacity="0" />
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_1_436" x1="22.3846" y1="12.6957" x2="33" y2="60.6957" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="white" stopOpacity="0" />
                                        <stop offset="1" stopColor="white" stopOpacity="0.62" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            {/* <Grid3Icon className="mx-3" /> */}
                            <div className="space-y-2 neue">
                                <p className="text-xl lg:text-[32px] whitespace-nowrap font-semibold leading-snug">Receive Starlink device</p>
                                <p className="leading-snug font-normal text-base">After the order is confirmed, device is shipped to you.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 max-w-6xl mx-auto flex items-start justify-center">

                        <button type="button" onClick={() => setStateNew && setStateNew(prev => !prev)} className="flex items-center justify-center m-2 text-white bg-[#2568FF] font-semibold focus:outline-none focus:ring-blue-300 rounded-md sm:rounded-lg text-sm px-6 md:px-20 sm:py-4 py-2 text-center mr-3 md:mr-0">Place an order

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
                    </div>

                </div>
            </div>
        </section>
    )
}

export default YourDevice
