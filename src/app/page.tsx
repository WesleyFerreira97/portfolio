import React from 'react'
import styles from './style.module.css'
import Image from 'next/image'
import Logo from '../../public/images/logo.svg'

export default function Home() {

    return (
        <div className='flex min-h-screen bg-cover overflow-hidden bg-[#0c0c30] my-fodasea justify-center items-center flex-col'>
            <div className={styles.loading_container}>
                <span className={styles.logoCircle}>
                    {/* <div className={styles.logoCircle}> */}
                    {/* <div style={{ background: "green", width: "500px", height: "50px" }}></div> */}
                    <svg width="762" height="762" viewBox="0 0 762 762" fill="transparent" xmlns="http://www.w3.org/2000/svg"
                        style={{ zIndex: 100 }}
                    >
                        <path
                            id='W'
                            d="M174.391 263L270.151 453.38L241.651 510.38L117.771 263H174.391ZM556.292 263H612.912L460.912 567L365.151 376.62L393.651 319.62L460.912 453.38L556.292 263 Z"
                            fill="#C23373"
                        />
                        <clipPath id='logoW'>
                            <use href='#W' />
                        </clipPath>
                        <rect
                            className={styles.logoW}
                            width="100%"
                            height="100%"
                            fill='#fff'
                            clipPath='url(#logoW)'
                        />
                    </svg>
                    {/* </div> */}
                </span>
            </div>
        </div>
    )
}
