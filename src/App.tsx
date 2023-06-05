import './App.css'
import { Suspense, useRef } from 'react'
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import Home from './pages/home/Home';
import About from './pages/about/About';
import OrderSuccessful from './components/ordersuccessful/OrderSuccessful';

const App: React.FC = () => {
  const twentyFourHoursInMs = 1000 * 60 * 60 * 24;
  const refDiv = useRef<HTMLDivElement>(null);
  const refD = useRef<HTMLDivElement>(null);

  const scrollToSection = () => {
    if (window.location.pathname === '/about') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    refDiv && refDiv.current?.scrollIntoView({ behavior: 'smooth' });

  };
  const scrollToSectionAbout = () => {
    if (window.location.pathname === '/about') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    // refD && refD.current?.scrollIntoView({ behavior: 'smooth' })
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  const ref = useRef<QueryClient>();
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        retry: false,
        staleTime: twentyFourHoursInMs,
      },
    },
  })
  ref.current = queryClient;

  return (
    <>
      <QueryClientProvider client={ref.current}>
        <ToastContainer />
        <Suspense fallback={"Loading"}>
          <Routes>
            <Route path='/' element={<Home ref={refDiv} {...{ scrollToSection }} />} />
            <Route path='/about' element={<About ref={refD} {...{scrollToSectionAbout}} />} />
            <Route path='/success' element={<OrderSuccessful />} />
          </Routes>
        </Suspense>

      </QueryClientProvider>
    </>
  )
}

export default App
// const sentence = ['Hello ', 'my ', 'is ', 'Gerald ']
// for (let i = 0; i < sentence.length; i++) {
//   const element = sentence[i];
//   const elementOptize = +sentence[i] + ' ';
//   console.log(elementOptize, 'elementOptize')
// }
