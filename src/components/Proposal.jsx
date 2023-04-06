import React from 'react'
import styles from "../style";
import Footer from './Footer';


const Proposal = () => {
    return (
        <>
            <div className='text-center bg-black'>
                <h1>Under-Construction</h1>
            </div>
            <div className="mt-5"></div>
            <div className={`bg-black ${styles.paddingX}  ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Proposal