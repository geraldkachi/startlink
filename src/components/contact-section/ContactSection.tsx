import { FormEvent, Ref, forwardRef } from 'react'

const ContactSection = forwardRef((props, ref: Ref<HTMLDivElement>) => {
    const onFinish = (e: FormEvent) => {
        e.preventDefault()
    }
    return (
        <div ref={ref} id="contact">
            <div className='bg-[#F9FBFD] text-white py-10 neue'>
                <div className="max-w-4xl mx-auto gap-x-5 p-5 grid md:grid-cols-5 bg-[#020722]">
                    <div className='md:col-span-2 my-4'>
                        <h1 className="text-5xl leading-10 md:leading-[9rem] sm:text-5xl pb-8 sm:pb-0  font-semibold neue">Contact Us</h1>

                        <div className="flex items-center gap-x-3 font-normal  sm:text-xl py-3 sm:py-2">
                            <span>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.5 2C16.37 2 19.5 5.13 19.5 9C19.5 14.25 12.5 22 12.5 22C12.5 22 5.5 14.25 5.5 9C5.5 5.13 8.63 2 12.5 2ZM7.5 9C7.5 11.85 10.42 16.21 12.5 18.88C14.62 16.19 17.5 11.88 17.5 9C17.5 6.24 15.26 4 12.5 4C9.74 4 7.5 6.24 7.5 9ZM12.5 11.5C11.1193 11.5 10 10.3807 10 9C10 7.61929 11.1193 6.5 12.5 6.5C13.8807 6.5 15 7.61929 15 9C15 10.3807 13.8807 11.5 12.5 11.5Z" fill="white" />
                                </svg>
                            </span>

                            <p>32, Ade Ajayi Street, Ogudu GRA, Lagos</p>
                        </div>

                        <div className="flex items-center gap-x-3 font-normal  sm:text-xl py-3 sm:py-2">
                            <span>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M22.5 6C22.5 4.9 21.6 4 20.5 4H4.5C3.4 4 2.5 4.9 2.5 6V18C2.5 19.1 3.4 20 4.5 20H20.5C21.6 20 22.5 19.1 22.5 18V6ZM20.5 6L12.5 11L4.5 6H20.5ZM20.5 18H4.5V8L12.5 13L20.5 8V18Z" fill="white" />
                                </svg>

                            </span>

                            <p>info@umoyanet.com</p>
                        </div>

                        <div className="flex items-center gap-x-3 font-normal  sm:text-xl py-3 sm:py-2">
                            <span>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.04 5C7.1 5.89 7.25 6.76 7.49 7.59L6.29 8.79C5.88 7.59 5.62 6.32 5.53 5H7.04ZM16.9 17.02C17.75 17.26 18.62 17.41 19.5 17.47V18.96C18.18 18.87 16.91 18.61 15.7 18.21L16.9 17.02ZM8 3H4.5C3.95 3 3.5 3.45 3.5 4C3.5 13.39 11.11 21 20.5 21C21.05 21 21.5 20.55 21.5 20V16.51C21.5 15.96 21.05 15.51 20.5 15.51C19.26 15.51 18.05 15.31 16.93 14.94C16.83 14.9 16.72 14.89 16.62 14.89C16.36 14.89 16.11 14.99 15.91 15.18L13.71 17.38C10.88 15.93 8.56 13.62 7.12 10.79L9.32 8.59C9.6 8.31 9.68 7.92 9.57 7.57C9.2 6.45 9 5.25 9 4C9 3.45 8.55 3 8 3Z" fill="white" />
                                </svg>

                            </span>

                            <p>+234(0) 806 199 9591</p>
                        </div>
                    </div>

                    <form onSubmit={onFinish} className='md:col-span-3 rounded-xl p-6 bg-white'>
                        <div className="mb-2">
                            <div className="mb-2">
                                <label className="block mb-2 text-sm font-semibold text-gray-900">First Name</label>
                                <input type="text" name='firstName' id="first name" className="shadow-sm rounded-lg bg-gray-50 border border-[#D9DDE3] text-gray-900 text-sm block w-full p-3 placeholder-[#111113]::placeholder" placeholder="" required />
                            </div>
                        </div>
                        <div className="mb-2">
                            <div className="mb-2">
                                <label className="block mb-2 text-sm font-semibold text-gray-900">Email Address</label>
                                <input type="email" name='email' id="email" className="shadow-sm rounded-lg bg-gray-50 border border-[#D9DDE3] text-gray-900 text-sm block w-full p-3 placeholder-[#111113]::placeholder" placeholder="" required />
                            </div>
                        </div>
                        <div className="mb-2">
                            <div className="mb-2">
                                <label className="block mb-2 text-sm font-semibold text-gray-900">Phone Number</label>
                                <input type="tel" name="phone" id="phone" className="shadow-sm rounded-lg bg-gray-50 border border-[#D9DDE3] text-gray-900 text-sm block w-full p-3 placeholder-[#111113]::placeholder" placeholder="" required />
                            </div>
                        </div>

                        <div className="mb-2">
                            <label className="block mb-2 text-sm font-semibold text-gray-900">Message</label>
                            <textarea rows={9} className="shadow-sm rounded-lg bg-gray-50 border border-[#D9DDE3] text-gray-900 text-sm block w-full p-3 placeholder-[#111113]::placeholder" placeholder=""></textarea>
                        </div>
                        <div className="mb-2 text-center">
                            <button type="submit" className="text-white w-full bg-[#2568FF] hover:bg-[#2568FF] rounded-lg focus:outline-none font-sem text-sm px-5 py-4 text-center flex items-center justify-center">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
})

export default ContactSection



// return (
//     <div ref={ref} id="contact">
//         <div className='bg-[#F9FBFD] pt-10'>
//             <h1 className="text-5xl leading-none sm:text-5xl xl:max-w-3xl pb-10 text-center mx-auto font-medium neue">Contact Us</h1>
//             <div className="max-w-2xl mx-auto p-5 bg-[#F2F3F8]">
//                 <form onSubmit={onFinish}>
//                     <div className="mb-2">
//                         <input type="text" name='first name' id="full name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-4 placeholder-[#111113]::placeholder" placeholder="Name" required />
//                     </div>
//                     <div className="mb-2">
//                         <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-4 placeholder-[#111113]::placeholder" placeholder="Email Address" required />
//                     </div>
//                     <div className="mb-2">
//                         <input type="tel" id="phone" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-4 placeholder-[#111113]::placeholder" placeholder="Phone Number" required />
//                     </div>

//                     <div className="mb-2">
//                         <textarea rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Message"></textarea>
//                     </div>
//                     <div className="mb-2">
//                         <button type="submit" className="text-white w-full bg-[#2568FF] hover:bg-[#2568FF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-4 text-center">Send Message</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     </div>
// )
