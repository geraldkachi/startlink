import { Ref, forwardRef } from "react";
import { Hero, Navbar } from "../../components";
interface Props {
  scrollToSection: () => void
}
const Home = forwardRef(({ scrollToSection }: Props, ref: Ref<HTMLDivElement>) => {
  // const ref = useRef<HTMLDivElement>(null);

  // const scrollToSection = () => {
  //   ref.current?.scrollIntoView({ behavior: 'smooth' });
  // };

  // const scrollToSection = (elementRef: unknown) => {
  //   console.log('scrollToSection')
  //   window.scrollTo({
  //     top: elementRef.current.offsetTop,
  //     // top: elementRef.current?.scrollIntoView({behavior: 'smooth'}),
  //     behavior: 'smooth'
  //   });
  // };


  return (
    <div>
      <Navbar {...{ scrollToSection }} />

      <Hero {...{ scrollToSection, ref }} />
    </div>
  )
})

export default Home
