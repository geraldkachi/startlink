import { Dispatch, SetStateAction } from "react"

interface Props {
    setStateNew?: Dispatch<SetStateAction<boolean>>
}
const SimpleSelf = ({ setStateNew }: Props) => {
    return (
        <section className="py-10 text-[#1B2435]">
            <section className="py-10 max-w-5xl mx-auto p-4 gap-x-10 grid md:grid-cols-2">
                <div className="flex items-start flex-col neue justify-center my-4">
                    <h1 className="text-3xl md:text-[64px] font-semibold leading-tight text-start">Simple Self-installation</h1>
                    <p className="text-xl font-normal my-4">Your Starlink Kit arrives with everything you need to get online in minutes..</p>
                    <p className=" font-semibold text-xl">What&apos;s in the box</p>
                    <ul className="ml-6 text-xl my-3 list-disc leading-6">
                        <li>Starlink</li>
                        <li>Base</li>
                        <li>Router</li>
                        <li>50ft (15.2m) Starlink cable </li>
                        <li>6ft (1.8m) AC Cable</li>
                    </ul>

                    <button type="button" onClick={() => setStateNew && setStateNew(prev => !prev)} className="flex items-center text-white bg-[#2568FF] focus:outline-none focus:ring-blue-300 font-semibold rounded-md sm:rounded-lg text-sm px-6 sm:py-3 py-2 text-center mr-3 md:mr-0">Place an order

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

                <img src="/simple-selfimg.svg" alt="" />
            </section>
        </section>
    )
}

export default SimpleSelf
