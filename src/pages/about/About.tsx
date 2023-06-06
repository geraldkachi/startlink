import { Ref, forwardRef } from "react"
import { Navbar } from "../../components"
import ContactSection from "../../components/contact-section/ContactSection"
import Footer from "../../components/navbar/Footer"
interface Props {
  scrollToSectionAbout: () => void
}
const About = forwardRef(({ scrollToSectionAbout }: Props, ref: Ref<HTMLDivElement>) => {
  return (
    <>
      <Navbar {...{ scrollToSectionAbout }} />

      <div className="grid md:grid-cols-5 gap-5 max-w-7xl mx-auto pt-10 sm:mt-24 p-4">

        <div className="md:col-span-3 neue">
          <h1 className="neue text-[4rem] text-[#141313] mb-4 font-semibold">About Us</h1>

          <p className="font-medium text-xl text-[#77808B]">Welcome to Umoyanet, where connectivity knows no boundaries. We are a leading data service reseller, specializing in providing reliable and innovative connectivity services. We bring reliable, high-speed internet access to governments, enterprise businesses, MSMEs, and individuals/ personal users.
            <p className="leading-6 pt-2">
              At Umoyanet, we are driven by a passion for connecting people and bridging the digital divide. Through our innovative approach, operational efficiency, and unwavering commitment to customer satisfaction, we strive to make a positive impact on the world through our services as your trusted partner for seamless connectivity solutions.
            </p>
            <p className="leading-6 pt-2">

              With our cutting-edge satellite technology, we deliver seamless and fast internet access to even the most remote and underserved regions. Our solutions are designed to overcome geographical limitations and connect individuals, businesses, and communities to the digital world.
            </p>
            <p className="leading-6 pt-2">
              Experience the power of connectivity with Umoyanet. Join our growing network of satisfied customers who have unlocked new possibilities through our reliable and cutting-edge services.</p>
          </p>
        </div>

        <div className="md:col-span-2 flex items-center justify-center">
          <img src="/aboutpageimg.svg" className="rounded-xl" alt="about" />
        </div>
      </div>


      <div className="relative grid md:grid-cols-2 gap-5 max-w-[1200px] mx-auto pt-10 sm:mt-24 p-4 sm:p-14 neue bg-[url(/markabout.svg)] bg-center bg-cover bg-no-repeat bg-[#2568FF] rounded-3xl text-white my-20 ">
        <div className="flex flex-col justify-start flex-1 p-6 z-10">
          <span className="text-[2rem] uppercase font-semibold">Our Mission</span>
          <p className="my-6 text-xl font-medium">Our mission at Umoyanet is to empower connectivity beyond borders. We are dedicated to bridging the digital divide and connecting people to the boundless opportunities of the global economy. Through our innovative solutions, we aim to make a meaningful difference in the lives of individuals, businesses, and communities.</p>
        </div>

        <div className="flex flex-col justify-start flex-1 p-6 z-10">
          <span className="text-[2rem] uppercase font-semibold">Our Vision</span>
          <p className="my-6 text-xl font-medium">Our vision is to be the driving force behind universal connectivity. We envision a world where everyone has equal access to high-speed internet, regardless of their geographical location. By leveraging technology, fostering partnerships, and embracing innovation, we strive to create a more inclusive and connected digital future..</p>
        </div>
      </div>

      {/* Three Section Box */}
      <section>
        <div className="xl:max-w-3xl pb-10 text-center mx-auto neue">
          <h1 className="font-semibold leading-[2.688rem] text-[2rem] text-[#283646 ]">Our Values</h1>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-7xl mx-auto pt-10">
          <div className="flex flex-col justify-start flex-1 p-6 text-[#283646]">
            <div className="flex items-start gap-x-5">
              <div className="flex flex-col justify-start flex-1 text-[#B3D5FF] text-xl font-bold">01</div>
              <div>
                <span className="text-xl uppercase font-semibold">Reliability</span>
                <p className="my-6 text-xl font-medium">We value the importance of providing consistently reliable and stable high-speed internet services to our customers, no matter where they are located.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-start flex-1 p-6 text-[#283646]">
            <div className="flex items-start gap-x-5">
              <div className="flex flex-col justify-start flex-1 text-[#B3D5FF] text-xl font-bold">02</div>

              <div>
                <span className="text-xl uppercase font-semibold">Innovation</span>
                <p className="my-6 text-xl font-medium">We believe in pushing the boundaries of what's possible with satellite technology, and are committed to investing in new solutions that will continue to transform the way people connect and communicate.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-start flex-1 p-6 text-[#283646]">
            <div className="flex items-start gap-x-5">
              <div className="flex flex-col justify-start flex-1 text-[#B3D5FF] text-xl font-bold">03</div>

              <div>
                <span className="text-xl uppercase font-semibold">Customer Satisfaction</span>
                <p className="my-6 text-xl font-medium">We prioritize the needs of our customers above all else, and are dedicated to providing exceptional customer service and support to ensure that their experience with our services is positive and seamless.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection ref={ref} />
      <Footer />
    </>
  )
})

export default About
