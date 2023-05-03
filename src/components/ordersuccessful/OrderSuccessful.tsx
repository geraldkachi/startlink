import OrderSuccessIcon from '../../assets/svg/OrderSuccessIcon'
// import SuccessIcon from '../../assets/svg/successIcon.png'
import NewSuccessIcon from '../../assets/svg/newSucc.svg'

const OrderSuccessful = () => {
    return (
        <div className='my-10'>
            <p className='text-[#031744] text-3xl sm:text-5xl font-semibold p-3'>Order #4343 placed successfully</p>


            <div className="max-w-lg mx-auto my-auto">
                <div className="flex items-center justify-center">
                    {/* <OrderSuccessIcon /> */}
                    <img src={NewSuccessIcon} alt="SuccessIcon" />
                </div>

                <div className="mx-auto text-center">
                    <p className="my-5 text-lg font-bold">Success</p>
                    <p className="my-2 text-sm font-medium">Your order has been placed successfully, kindly check your email for order details and estimated delivery date</p>
                </div>
                <div className="mx-auto mt-10 text-center">
                    <div className="mb-2">
                        <button type="button" onClick={() => {
                        }} className="text-white text-base font-medium w-full bg-[#2568FF] hover:bg-[#2568FF] border-[#2568FF] rounded-lg focus:outline-none px-5 py-4 text-center flex items-center justify-center">
                            <span>Download Receipt</span>
                            <svg className="ml-5" width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.78135 5.02901L5.20535 1.45301L6.14802 0.510345L11.3334 5.69568L6.14802 10.881L5.20535 9.93835L8.78135 6.36235H0.666687V5.02901H8.78135Z" fill="white" />
                            </svg>
                        </button>
                        <button type="button" onClick={() => {
                        }} className="text-[#2568FF] text-base font-medium mt-3 w-full bg-[#ffff] border-[#2568FF] border hover:bg-[#ececef] rounded-lg focus:outline-none px-5 py-4 text-center">
                            <span>Place a new order</span>
                        </button>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default OrderSuccessful
