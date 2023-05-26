import { Navbar } from "../../components"
import ContactSection from "../../components/contact-section/ContactSection"

const About = () => {
  return (
    <>
      <Navbar />

      <div className="grid md:grid-cols-5 gap-5 max-w-7xl mx-auto pt-10 sm:mt-24 p-4">

        <div className="md:col-span-3 neue">
          <h1 className="neue text-[4rem] text-[#141313] mb-4 font-semibold">About Us</h1>

          <p className="text-sm font-medium md:text-xl text-[#77808B]">Welcome to Umoyanet, where connectivity knows no boundaries. We are a leading data service reseller, specializing in providing reliable and innovative connectivity services. We bring reliable, high-speed internet access to governments, enterprise businesses, MSMEs, and individuals/ personal users.
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

        <div className="md:col-span-2">
          <img src="/aboutpageimg.svg" alt="aboutpageimg" />
        </div>
      </div>


      <div className="grid md:grid-cols-2 gap-5 max-w-7xl mx-auto pt-10 sm:mt-24 p-4 neue bg-[url(/markabout.svg)] bg-center bg-cover bg-[#2568FF] rounded-3xl text-white my-20 bg-">
        <div className="flex flex-col justify-center flex-1 p-6 text-[#]">
          <span className="text-[2rem] uppercase font-semibold">Our Mission</span>
          <p className="my-6 text-xl font-medium">Our mission at Umoyanet is to empower connectivity beyond borders. We are dedicated to bridging the digital divide and connecting people to the boundless opportunities of the global economy. Through our innovative solutions, we aim to make a meaningful difference in the lives of individuals, businesses, and communities.</p>
        </div>

        <div className="flex flex-col justify-center flex-1 p-6 text-[#]">
          <span className="text-[2rem] uppercase font-semibold">Our Vision</span>
          <p className="my-6 text-xl font-medium">Our vision is to be the driving force behind universal connectivity. We envision a world where everyone has equal access to high-speed internet, regardless of their geographical location. By leveraging technology, fostering partnerships, and embracing innovation, we strive to create a more inclusive and connected digital future..</p>
        </div>
      </div>

      <ContactSection />
    </>
  )
}

export default About
