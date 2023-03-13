import React, { Suspense, lazy } from 'react'
import styles from "./style";
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import NotFound from "./components/NotFound";
import "react-toastify/dist/ReactToastify.css";
// import About from './components/about/About';
import About from './components/About';

const Home = lazy(() => import('./components/Home'));

const App = () => {



  function Loading() {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <button type="button" className="flex items-center rounded-lg bg-green-700 px-4 py-2 text-white" disabled>
          <svg className="mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="font-medium"> Processing... </span>
        </button>
      </div>
    )
  }

  return (
    <div className='bg-black w-full overflow-hidden'>
      <BrowserRouter>

        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Suspense fallback={<Loading />}><Home /></Suspense>} />
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App