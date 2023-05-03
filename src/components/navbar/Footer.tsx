import FooterIcon from "../../assets/svg/newnewfootericon.svg"
const Footer = () => {
    return (
        <div className='bg-[#001648]'>
            <footer className="footer items-center flex-wrap">
                <div className="flex justify-between items-center max-w-7xl mx-auto p-4">
                    <div className=''>
                       <img src={FooterIcon} alt="FooterIcon" />
                    </div>
                    <p className='text-base text-[#FFFFFF] opacity-50 my-3 hidden  sm:block'>A Subsidiary of PRUNEDGE</p>{' '}
                    <p className='text-xs  sm:text-base text-[#FFFFFF] opacity-50 my-3 whitespace-nowrap'>© UmoyaNet 2023 all rights reserved</p>
                </div>

            </footer>
        </div>
    )
}

export default Footer

