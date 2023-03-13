import React, { Suspense, lazy } from 'react';
import styles from "../style";

const Hero = lazy(() => import('./Hero'));
const Coin = lazy(() => import('./Coin'));
const Ecosystem = lazy(() => import('./Ecosystem'));
const FeatureBlog = lazy(() => import('./FeatureBlog'));
const Footer = lazy(() => import('./Footer'));


const Home = () => {
  return (
    <div>

      <div className={`bg-black ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Suspense>
            <Hero />
          </Suspense>
        </div>
      </div>


      <div className={`bg-black ${styles.paddingX}  ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Suspense>
            <Coin />
          </Suspense>
          <Suspense>
            <Ecosystem />
          </Suspense>
          <Suspense>
            <FeatureBlog />
          </Suspense>
          <Suspense>
            <Footer />
          </Suspense>
        </div>
      </div>


    </div>
  )
}

export default Home;
