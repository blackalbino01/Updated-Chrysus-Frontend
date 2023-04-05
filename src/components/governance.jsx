import React from 'react'
import { Outlet } from 'react-router-dom'
import DaoNav from './DaoNav'
import styles from "../style";

const Governance = () => {
    return (
        <div>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`} >
                    <DaoNav />
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Governance