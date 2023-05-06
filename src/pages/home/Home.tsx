import { useRef } from "react";
import { Hero, Navbar } from "../../components";

const Home = () => {
  const ref = useRef<HTMLDivElement>(null);
  // const scrollToSection = () => {
  //     ref.current?.scrollIntoView({behavior: 'smooth'});
  // };

  const scrollToSection = (elementRef?: any) => {
    window.scrollTo({
      top: elementRef.current?.scrollIntoView({behavior: 'smooth'}),
      behavior: 'smooth'
    });
  };




  return (
    <div>
      <Navbar {...{ scrollToSection, ref }} />

      <Hero {...{scrollToSection, ref}} />
    </div>
  )
}

export default Home
