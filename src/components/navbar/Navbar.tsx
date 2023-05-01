import { useState } from 'react'
// import Modal from '../modal/Modal'
import PlaceOrder from '../placeorder/PlaceOrder'
import { useNavigate } from 'react-router-dom'
import { Modal } from 'antd'
const Navbar = () => {
    const [stateNew, setStateNew] = useState<boolean>(false)
    const navigate = useNavigate()

    return (
        <div>
            {/* <nav className="bg-white  fixed w-full z-20 top-0 left-0 border-b border-gray-200 shadow-xl"> */}
            <div className="max-w-[1360px] flex flex-wrap items-center justify-between mx-auto p-4 rounded-lg shadow-sm sm:shadow-xl">
                <a href="/" className="flex items-center">
                    <svg width="41" height="49" viewBox="0 0 41 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40.4999 22.1215C40.4999 17.5192 40.4961 12.9207 40.4999 8.31844C40.4999 7.56698 40.5607 6.57624 39.8087 6.36314C39.1668 6.17995 38.9048 7.1819 38.5401 7.69783C37.4122 9.30544 36.3449 10.9542 35.2131 12.5581C34.7764 13.1749 34.5751 13.803 34.5789 14.5545C34.5941 20.8354 34.5751 27.1163 34.6055 33.3972C34.6093 34.186 34.37 34.6608 33.6712 35.0459C29.4517 37.3601 25.2511 39.7042 21.0506 42.0484L20.9974 42.0633C20.8227 42.1605 20.6632 42.2091 20.5075 42.2091C20.348 42.2054 20.1885 42.1605 20.0176 42.0633C15.8094 39.7155 11.5975 37.3788 7.37798 35.0496L7.35519 35.0534C7.35139 35.0496 7.3438 35.0459 7.34 35.0459C6.63738 34.6608 6.4019 34.186 6.4057 33.3972C6.43609 27.1163 6.4171 20.8354 6.43229 14.5545C6.43609 13.803 6.23479 13.1749 5.79803 12.5581C4.66624 10.9542 3.59902 9.30544 2.47103 7.69783C2.10642 7.17816 1.84437 6.17621 1.20251 6.36314C0.439125 6.57624 0.499892 7.56698 0.499892 8.31844C0.50369 12.917 0.50369 17.5192 0.499892 22.1215C0.499892 26.8321 0.50369 31.5428 0.496094 36.2535C0.496094 37.5358 1.06579 38.4555 2.21277 39.0575C2.64953 39.2855 3.0825 39.5173 3.51167 39.7491C4.26746 40.1641 5.02325 40.5828 5.77904 40.9978C10.1505 43.4242 14.5105 45.8618 18.8896 48.2732C19.4099 48.5611 19.953 48.7031 20.4961 48.6956C21.0392 48.7031 21.5823 48.5611 22.1026 48.2732C26.4817 45.8618 30.8455 43.4242 35.2131 40.9978C35.9689 40.5828 36.7247 40.1641 37.4805 39.7491C37.9135 39.5136 38.3465 39.2855 38.7794 39.0575C39.9264 38.4593 40.4961 37.5358 40.4961 36.2535C40.4961 31.5428 40.4999 26.8321 40.4999 22.1215Z" fill="#2568FF" />
                        <path d="M20.3897 0.00377124C21.267 -0.0523082 22.0342 0.366418 22.828 0.594475C27.5982 1.97777 32.3494 3.41714 37.1082 4.84904C38.0236 5.12569 38.0501 5.25655 37.5108 6.03418C36.6449 7.28662 35.7828 8.53906 34.9434 9.80646C34.6814 10.2028 34.3965 10.2813 33.9559 10.1504C29.7364 8.8718 25.5131 7.61562 21.2974 6.32953C20.7049 6.15008 20.158 6.16129 19.5769 6.33701C15.4106 7.60067 11.2404 8.84563 7.07406 10.1168C6.6335 10.2514 6.30308 10.214 6.05241 9.84011C5.11432 8.46803 4.17243 7.10343 3.26092 5.71266C2.83175 5.0584 3.46221 4.96867 3.8458 4.8453C5.12191 4.43405 6.40942 4.06392 7.69313 3.67884C11.6506 2.49744 15.6081 1.30855 19.5693 0.130885C19.8314 0.0523734 20.1162 0.0448962 20.3897 0.00377124Z" fill="#2568FF" />
                        <path d="M29.6947 16.7528C28.3009 16.3453 26.907 15.9415 25.517 15.5303C24.0206 15.0854 22.5242 14.633 21.0278 14.1843C20.6442 14.0685 20.2568 14.0572 19.8694 14.1694C17.1159 14.9882 14.3586 15.792 11.6127 16.6444C11.0582 16.8163 10.7012 16.7191 10.3974 16.2668C9.53903 14.9769 8.68069 13.6871 7.81476 12.4085C7.45395 11.8739 7.66284 11.6271 8.21734 11.4664C10.4657 10.8046 12.7065 10.1279 14.9511 9.45124C16.0715 9.11477 17.2071 8.8082 18.3123 8.42312C19.6226 7.96701 20.9063 7.90719 22.247 8.31844C25.6879 9.37647 29.144 10.3822 32.5888 11.4215C33.4813 11.6907 33.5307 11.8664 33.0217 12.6253C32.2052 13.8404 31.3772 15.0517 30.5493 16.2593C30.348 16.5546 30.1391 16.8687 29.6947 16.7528Z" fill="#3C83EC" />
                        <path d="M20.5075 15.8892C21.5861 15.9565 22.6685 16.45 23.8003 16.7378C25.2322 17.1005 26.645 17.5529 28.054 17.9977C28.9579 18.2819 28.9959 18.4539 28.487 19.2016C27.6932 20.368 26.8957 21.5308 26.1285 22.7122C25.7677 23.2655 25.3727 23.3963 24.7194 23.172C23.4281 22.7271 22.1026 22.3794 20.7961 21.9831C20.4505 21.8784 20.1391 21.957 19.8125 22.0542C18.5592 22.4355 17.2982 22.7981 16.0449 23.187C15.5892 23.329 15.2473 23.2879 14.9625 22.8617C14.1232 21.5943 13.2572 20.3456 12.4027 19.0894C12.1406 18.7081 11.9659 18.3193 12.5964 18.1286C15.0536 17.3884 17.5147 16.6593 19.9758 15.934C20.1087 15.8854 20.2568 15.9041 20.5075 15.8892Z" fill="#44AFFF" />
                        <path d="M23.3598 25.7479C23.3598 27.4415 22.1863 28.6229 20.5 28.6341C18.9086 28.6416 17.5414 27.3406 17.511 25.7853C17.4806 24.2936 18.901 22.8916 20.4696 22.8692C21.9166 22.8467 23.5725 24.1702 23.3598 25.7479Z" fill="#33D9FF" />
                    </svg>
                </a>
                <div className="flex md:order-2">
                    <button type="button" onClick={() => setStateNew(true)} className="text-[#000000] bg-[#ffffff] mr-2 sm:mr-10 hover:text-[#454545] focus:outline-none">Contact Support </button>{' '}
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
