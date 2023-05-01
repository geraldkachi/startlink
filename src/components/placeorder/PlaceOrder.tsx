import { Dispatch, SetStateAction } from "react"
import PlaceIconTv from "../../assets/svg/PlaceIconTv"
import ContactInfo from "../contactinfo/ContactInfo"

interface Props {
  setStateNew?: Dispatch<SetStateAction<boolean>>
}
const PlaceOrder = ({ setStateNew }: Props) => {
  return (
    <div className='my-10'>
      <p className='text-[#031744] text-3xl sm:text-5xl font-semibold p-3'>Place Order</p>


      <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
        <PlaceIconTv />

        <div>
          <ContactInfo {...{setStateNew}} />
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
