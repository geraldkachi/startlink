import { Dispatch, SetStateAction, useState } from "react"
import useAuth from "../../hooks/useAuth"
import { Select } from "antd"
// import Select from 'react-select'
interface Props {
    setStateNew?: Dispatch<SetStateAction<boolean>>
    setStateSuccess?: Dispatch<SetStateAction<boolean>>
}
const rolesOption = [
    { label: "Abia", value: "ABIA" },
    { label: "Abuja", value: "ABUJA" },
    { label: "Adamawa", value: "ADAMAWA" },
    { label: "Akwa Ibom", value: "AKWA IBOM" },
    { label: "Anambra", value: "ANAMBRA" },
    { label: "Bauchi", value: "BAUCHI" },
    { label: "Bayelsa", value: "BAYELSA" },
    { label: "Benue", value: "BENUE" },
    { label: "Borno", value: "BORNO" },
    { label: "Cross River", value: "CROSS RIVER" },
    { label: "Delta", value: "DELTA" },
    { label: "Ebonyi", value: "EBONYI" },
    { label: "Edo", value: "EDO" },
    { label: "Ekiti", value: "EKITI" },
    { label: "Enugu", value: "ENUGU" },
    { label: "Gombe", value: "GOMBE" },
    { label: "Imo", value: "IMO" },
    { label: "Jigawa", value: "JIGAWA" },
    { label: "Kaduna", value: "KADUNA" },
    { label: "Kano", value: "KANO" },
    { label: "Katsina", value: "KATSINA" },
    { label: "Kebbi", value: "KEBBI" },
    { label: "Kogi", value: "KOGI" },
    { label: "Kwara", value: "KWARA" },
    { label: "Lagos", value: "LAGOS" },
    { label: "Nasarawa", value: "NASARAWA" },
    { label: "Niger", value: "NIGER" },
    { label: "Ogun", value: "OGUN" },
    { label: "Ondo", value: "ONDO" },
    { label: "Osun", value: "OSUN" },
    { label: "Oyo", value: "OYO" },
    { label: "Plateau", value: "PLATEAU" },
    { label: "Rivers", value: "RIVERS" },
    { label: "Sokoto", value: "SOKOTO" },
    { label: "Taraba", value: "TARABA" },
    { label: "Yobe", value: "YOBE" },
    { label: "Zamfara", value: "ZAMFARA" },
];

const ContactInfo = ({ setStateNew, setStateSuccess }: Props) => {
    const count = useAuth(state => state.count)
    const costFee = useAuth(state => state.costFee)
    const shippingFee = useAuth(state => state.shippingFee)
    const totalFee = useAuth(state => state.totalFee)
    const [state, setState] = useState()

    const formatKoboAmountForDisplay = (amount: number): string => {
        return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(amount);
    };

    // const customStyles = {
    //     option: (defaultStyles, state) => ({
    //       ...defaultStyles,
    //       color: state.isSelected ? "#212529" : "#fff",
    //       ...defaultStyles,
    //         backgroundColor: state.isSelected ? "#abb1b8" : "#ffffff",

    //     }),

    //     control: (defaultStyles) => ({
    //       ...defaultStyles,
    //       backgroundColor: "#ffffff",
    //         padding: "3px",
    //       marginTop: "10px",
    //       border: "1px solid #D9DDE3",
    //         boxShadow: "none",
    //       borderRadius: '8px'
    //     }),
    //     singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#fff" }),
    //   };


    return (
        <div className="p-3">
            <p className="text-2xl font-semibold my-5 neue">Contact Information</p>
            <form className=''>
                <div className="grid grid-cols-2 gap-4">
                    <div className="mb-2">
                        <label className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">First Name</label>
                        <input type="text" name='firstName' id="first name" className="shadow-sm rounded-lg bg-gray-50 border border-[#D9DDE3] text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-3 placeholder-[#111113]::placeholder" placeholder="" required />
                    </div>
                    <div className="mb-2">
                        <label className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Last Name</label>
                        <input type="text" name='lastName' id="lastName" className="shadow-sm rounded-lg bg-gray-50 border border-[#D9DDE3] text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-3 placeholder-[#111113]::placeholder" placeholder="" required />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="mb-2">
                        <label className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Phone Number</label>
                        <input type="tel" name="phone" id="phone" className="shadow-sm rounded-lg bg-gray-50 border border-[#D9DDE3] text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-3 placeholder-[#111113]::placeholder" placeholder="" required />
                    </div>
                    <div className="mb-2">
                        <label className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Email Address</label>
                        <input type="email" name='email' id="email" className="shadow-sm rounded-lg bg-gray-50 border border-[#D9DDE3] text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-3 placeholder-[#111113]::placeholder" placeholder="" required />
                    </div>
                </div>

                <div className="my-3">
                    <p className="text-2xl font-semibold my-5 neue">Shipping Information</p>

                    <div className="mb-2">
                        <label className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Shipping Address</label>
                        <input type="email" id="address" className="shadow-sm rounded-lg bg-gray-50 border border-[#D9DDE3] text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-3 placeholder-[#111113]::placeholder" placeholder="" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="mb-2">
                            <label className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">City</label>
                            <input type="text" id="city" className="shadow-sm rounded-lg bg-gray-50 border border-[#D9DDE3] text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-3 placeholder-[#111113]::placeholder" placeholder="" required />
                        </div>
                        <div className="mb-2">
                            <label className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">State</label>
                            <Select
                                placeholder="Select State"
                                style={{ width: "100%", padding: '2px' }}
                                size="large"
                                onChange={(e) => setState(e)}
                                value={state}
                                options={rolesOption}
                                className="shadow-sm rounded-lg bg-gray-50 border border-[#D9DDE3] text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full placeholder-[#111113]::placeholder"
                            />
                             {/* <Select options={rolesOption} styles={customStyles} /> */}
                            {/* <input type="text" id="state" className="shadow-sm rounded-lg bg-gray-50 border border-[#D9DDE3] text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-3 placeholder-[#111113]::placeholder" placeholder="Lagos" required /> */}
                        </div>
                    </div>
                </div>

                <div className="my-5 bg-[#D1DDFA] p-5 neue">

                    <div className="flex items-center justify-between mt-3">
                        <p className='font-semibold text-base'>SubTotal</p>
                        <p className='text-base font-normal'>{formatKoboAmountForDisplay(count * costFee)}</p>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                        <p className='font-semibold text-base'>Shipping</p>
                        <p className='text-base font-normal'>{formatKoboAmountForDisplay(shippingFee)}</p>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                        <p className='font-semibold text-base'>Total</p>
                        <p className='text-base font-semibold'>{formatKoboAmountForDisplay(Number(((count * costFee) + shippingFee).toFixed(2)))}</p>
                    </div>
                </div>


                <div className="mb-2">
                    <button type="button" onClick={() => {
                        // setStateNew && setStateNew(true)
                        setStateSuccess && setStateSuccess(true)
                    }} className="text-white w-full bg-[#2568FF] hover:bg-[#2568FF] rounded-lg focus:outline-none font-medium text-sm px-5 py-4 text-center flex items-center justify-between">
                        <span>Checkout</span>

                        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.78135 5.02901L5.20535 1.45301L6.14802 0.510345L11.3334 5.69568L6.14802 10.881L5.20535 9.93835L8.78135 6.36235H0.666687V5.02901H8.78135Z" fill="white" />
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ContactInfo
