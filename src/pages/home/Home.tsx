import { format } from "date-fns";


// import Modal from "../../components/modal/Modal";
import Button from "../../components/button/Button";
import { Hero, Navbar } from "../../components";


const Home = () => {
  return (
    <div>

      <Navbar />

      <Hero />

      {/* <Modal open={stateMetric} onCancel={() => setStateMetric(false)} footer={null} maskClosable={false} closable={true} afterClose={() => setStateMetric(false)}>
        <Metric {...{ setStateMetric }} />
      </Modal> */}
    </div>
  )
}

export default Home
