import * as yup from "yup";
import { Select } from "antd"
import { toast } from "react-toastify";

import { useMutation } from "react-query"
import { Dispatch, FormEvent, SetStateAction, useState } from "react"

import useAuth from "../../hooks/useAuth"
import { CreatePayType } from "../../../types"
import { createPayUrl } from "../../server/createPaymenturl"
import { Helmet } from "react-helmet";

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

let schema = yup.object().shape({
    // email: yup.string(),
    // password: yup.string().required("Enter a valid password").min(6).nullable(),
});

const ContactInfo = ({ setStateNew, setStateSuccess }: Props) => {
    const [state, setState] = useState()
    const [loading, setLoading] = useState(false)
    const count = useAuth(state => state.count)
    const costFee = useAuth(state => state.costFee)
    const totalFee = useAuth(state => state.totalFee)
    const shippingFee = useAuth(state => state.shippingFee)
    const [selectedOption, setSelectedOption] = useState('');
    const mutation = useMutation(createPayUrl)


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
    const onFinish = (e: FormEvent) => {
        e.preventDefault()
        // const values = {
        //     // @ts-ignore
        //     radio: e.target["radio-value"].value,
        // }
        if (selectedOption === "sterling") {
            console.log('start')
            setLoading(true)
            // @ts-ignore
            getpaidSetup({
                PBFPubKey: "FLWPUBK_TEST-92193f83194f12fd9a3b8793c42cbc6c-X",
                custom_title: "Umoyanet Limited",
                customer_email: "info@umoyanet.com",
                amount: (Number(((count * costFee) + shippingFee).toFixed(2))),
                currency: "NGN",
                custom_logo: "",
                txref: "FLWSECK_TEST527940907e08",
                txRef: "FLWSECK_TEST527940907e08",
                country: "NG",
                payment_options: 'card,banktransfer,ussd',
                meta: [],
                //exclude_banks: exclude_banks,
                onclose: () => window.location.href = import.meta.env.VITE_SPECTA_CALLBACKURL,
                callback: () => window.location.href = import.meta.env.VITE_SPECTA_CALLBACKURL,
            })
            console.log("finish")

        }

        const spectaPayment: CreatePayType = {
            callBackUrl: import.meta.env.VITE_SPECTA_CALLBACKURL,
            reference: "unique_ref_buscuit_123",
            merchantId: import.meta.env.VITE_SPECTA_Merchant_ID,
            description: "Ten cartons of buscuit",
            amount: (Number(((count * costFee) + shippingFee).toFixed(2)))
        }

        schema
            // .validate((selectedOption) === "specta" ? spectaPayment : sterlingPayment)
            .validate(spectaPayment)
            .then((_val) => {
                // if ((selectedOption || values?.radio) === "specta") {
                if ((selectedOption) === "specta") {
                    mutation.mutate(spectaPayment, {
                        onSuccess: (data) => {
                            console.log(data, 'data  aa')
                            if (data?.result) {
                                window.location.href = data?.result
                                return
                            }
                            toast.error('unable to initiate your payment. please try again!')
                        },
                        onError: (e: unknown) => {
                            if (e instanceof Error) {
                                toast.error(e.message)
                            }
                        }
                    });
                }

                // if ((selectedOption || values?.radio) === "sterling") {
                // if ((selectedOption) === "sterling") {
                //     mutation.mutate(sterlingPayment, {
                //         onSuccess: (data) => {
                //             console.log(data, 'data  aa')
                //             // toast.success('Payment Url Created Successfully')
                //             if (data?.result) {
                //                 window.location.href = data?.result
                //                 return
                //             }
                //             toast.error('unable to initiate your payment. please try again!')
                //             // setStateSuccess && setStateSuccess(true)
                //         },
                //         onError: (e: unknown) => {
                //             if (e instanceof Error) {
                //                 toast.error(e.message)
                //             }
                //         }
                //     });
                // }

            })

    }


    const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value; // Store the new value in a variable
        setSelectedOption(newValue); // Update the state with the new value
    };

    return (
        <div className="p-3">
            <Helmet>
                <script type="text/javascript" src="https://sterlingcheckout.herokuapp.com//inline-rave.js?" />
                <script src="https://checkout.flutterwave.com/v3.js"></script>
            </Helmet>
            <p className="text-2xl font-semibold my-5 neue">Contact Information</p>
            <form className='' onSubmit={onFinish}>
                <div className="grid grid-cols-2 gap-4">
                    <div className="mb-2">
                        <label className="block mb-2 text-sm font-semibold text-gray-900">First Name</label>
                        <input type="text" name='firstName' id="first name" className="shadow-sm rounded-lg bg-gray-50 border border-[#D9DDE3] text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-3 placeholder-[#111113]::placeholder" placeholder="" required />
                    </div>
                    <div className="mb-2">
                        <label className="block mb-2 text-sm font-semibold text-gray-900">Last Name</label>
                        <input type="text" name='lastName' id="lastName" className="shadow-sm rounded-lg bg-gray-50 border border-[#D9DDE3] text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-3 placeholder-[#111113]::placeholder" placeholder="" required />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="mb-2">
                        <label className="block mb-2 text-sm font-semibold text-gray-900">Phone Number</label>
                        <input type="tel" name="phone" id="phone" className="shadow-sm rounded-lg bg-gray-50 border border-[#D9DDE3] text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-3 placeholder-[#111113]::placeholder" placeholder="" required />
                    </div>
                    <div className="mb-2">
                        <label className="block mb-2 text-sm font-semibold text-gray-900">Email Address</label>
                        <input type="email" name='email' id="email" className="shadow-sm rounded-lg bg-gray-50 border border-[#D9DDE3] text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-3 placeholder-[#111113]::placeholder" placeholder="" required />
                    </div>
                </div>

                <div className="my-3">
                    <p className="text-2xl font-semibold my-5 neue">Shipping Information</p>

                    <div className="mb-2">
                        <label className="block mb-2 text-sm font-semibold text-gray-900">Shipping Address</label>
                        <input type="text" id="address" className="shadow-sm rounded-lg bg-gray-50 border border-[#D9DDE3] text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-3 placeholder-[#111113]::placeholder" placeholder="" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="mb-2">
                            <label className="block mb-2 text-sm font-semibold text-gray-900">City</label>
                            <input type="text" id="city" className="shadow-sm rounded-lg bg-gray-50 border border-[#D9DDE3] text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-3 placeholder-[#111113]::placeholder" placeholder="" required />
                        </div>
                        <div className="mb-2">
                            <label className="block mb-2 text-sm font-semibold text-gray-900">State</label>
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

                <div className="neue my-2">
                    <p className="text-[#031744] text-2xl mb-2 font-semibold">Payment Method</p>
                    <p className="font-normal text-xl">Select Payment Method</p>

                    <div onChange={handleOptionChange} className={`${selectedOption === "sterling" ? "border-[#031744]" : ""} neue flex items-center cursor-pointer pl-4 border border-[#D9DDE3] hover:border-[#031744] rounded-lg my-3`}>
                        {/* <input type="radio" value={"sterling"} name="radio-value" className="cursor-pointer w-4 h-4 border-[#D9DDE3]" /> */}
                        <input type="radio" value={"sterling"} checked={selectedOption === 'sterling'} onChange={e => setSelectedOption(e.target.value)} className="cursor-pointer w-4 h-4 border-[#D9DDE3]" />
                        <label htmlFor="bordered-radio-1" className="w-full py-2 mx-4 text-sm font-medium text-gray-900 cursor-pointer">
                            <div className="flex items-center justify-between text-[#003E51]">
                                <div>
                                    <div className="w-full text-base font-semibold">Pay with Card</div>
                                    <div className="w-full sm:text-base font-normal">Accepts all debit/credit cards</div>
                                </div>

                                <img src="/visaimg.svg" alt="visa" />
                            </div>
                        </label>
                    </div>

                    <div onChange={handleOptionChange} className={`${selectedOption === "specta" ? "border-[#031744]" : ""} neue flex items-center cursor-pointer pl-4 border border-[#D9DDE3] hover:border-[#031744] rounded-lg my-3`}>
                        {/* <input type="radio" value={"specta"} name="radio-value" className="cursor-pointer w-4 h-4 border-[#D9DDE3]" /> */}
                        <input type="radio" required value={"specta"} checked={selectedOption === 'specta'} onChange={e => setSelectedOption(e.target.value)} className="cursor-pointer w-4 h-4 border-[#D9DDE3]" />
                        <label htmlFor="bordered-radio-2" className="w-full py-2 mx-4 text-sm font-medium text-gray-900 cursor-pointer">
                            <div className="flex items-center justify-between text-[#003E51]">
                                <div>
                                    <div className="w-full text-base font-semibold">Pay with Specta</div>
                                    <div className="w-full sm:text-base font-normal">Pay ₦128,989/month for 3 months</div>
                                </div>
                                <img src="/spectaimg.svg" alt="specta" />
                            </div>
                        </label>
                    </div>
                </div>


                <div className="mb-2">
                    <button type="submit" disabled={mutation.isLoading}
                        className={`${(mutation.isLoading || loading) && 'bg-slate-500'} text-white w-full bg-[#2568FF] rounded-lg focus:outline-none font-semibold text-sm sm:text-xl px-5 py-4 text-center flex items-center justify-between`}>
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
// function getpaidSetup(arg0: {
//     PBFPubKey: string; custom_title: string; customer_email: string; amount: number; currency: string; custom_logo: string; txref: string; txRef: string; country: string; payment_options: string; meta: never[];
//     //exclude_banks: exclude_banks,
//     onclose: () => any; callback: () => any;
// }) {
//     throw new Error("Function not implemented.");
// }

