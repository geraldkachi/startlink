import { Dispatch, SetStateAction, useState } from "react"
import PlaceIconTv from "../../assets/svg/PlaceIconTv"
import ContactInfo from "../contactinfo/ContactInfo"
import Image from "../../assets/svg/conimg.png"
import useAuth from "../../hooks/useAuth"


interface Props {
  setStateNew?: Dispatch<SetStateAction<boolean>>
}

const PlaceOrder = ({ setStateNew }: Props) => {
 // const [count, setCount] = useState<number>(1)
 const count = useAuth(state => state.count)
 const costFee = useAuth(state => state.costFee)

 console.log(count )


  const formatKoboAmountForDisplay = (amount: number): string => {
     return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(amount);
  };
  const increaseCount = useAuth((state) => state.increaseCount)
  const decreaseCount = useAuth((state) => state.decreaseCount)


  return (
    <div className='my-10'>
      <p className='text-[#031744] text-3xl sm:text-5xl font-semibold p-3'>Place Order</p>


      <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
        <div>
          <img src={Image} alt="" />

          <div className='p-3'>
            {/* <PlaceIconTv className='w-1/2' /> */}
            {/* <img src={Image} alt="star" /> */}
            <div className="my-10">
              <div className="text-[#031744] text-4xl font-semibold">Starlink</div>

              <p className="mt-5 text-[#031744]">
                High-speed, low-latency broadband internet in remote and rural locations across the globe. NGN19,260/mo with a one-time hardware cost of NGN268,584.
              </p>

              <div className="my-5">
                <div className=" flex items-center justify-center max-w-fit bg-[#F6F6F6] rounded-lg p-2">
                  <svg onClick={decreaseCount} className='cursor-pointer px-1' width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.569946" width="40" height="40" rx="5" fill="#E1E1E1" />
                    <path fill-rule="evenodd" clipRule="evenodd" d="M30 19.5699V21.5699H10V19.5699H30Z" fill="#5E5E6D" />
                  </svg>
                  <p className="mx-2 border text-center w-8">{count}</p>

                  {/* <input className="mx-2 border text-center w-8" type="text" value={count} onChange={(e: ChangeEvent<HTMLInputElement & EventTarget>) => setCount(e.target.value)} /> */}

                  <svg onClick={increaseCount} className='cursor-pointer px-1' width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.569946" width="40" height="40" rx="5" fill="#2568FF" />
                    <path fill-rule="evenodd" clipRule="evenodd" d="M21.5 19.0699H29V22.0699H21.5V29.5699H18.5V22.0699H11V19.0699H18.5V11.5699H21.5V19.0699Z" fill="white" />
                  </svg>

                </div>
              </div>
              <p className="mt-10 text-[#031744] font-semibold text-2xl sm:text-3xl">{formatKoboAmountForDisplay(count * costFee)}</p>
            </div>
          </div>
        </div>


        <div>
          <ContactInfo {...{ setStateNew }} />
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
