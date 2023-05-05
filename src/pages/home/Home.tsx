import { useEffect, useRef, useState } from "react";
import { Hero, Navbar } from "../../components";

const Home = () => {
  const ref = useRef<HTMLDivElement>(null);
  // const scrollToSection = () => {
  //     ref.current?.scrollIntoView({behavior: 'smooth'});
  // };

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    });
  };



  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <div className={scrolled ? "scrolled" : ""}>
      <Navbar {...{ scrollToSection, ref, onUpdateActiveLink }} />

      <Hero {...{scrollToSection, ref}} />
    </div>
  )
}

export default Home
