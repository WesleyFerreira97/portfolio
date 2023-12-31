"use client"
import React from 'react'
import S from "./style.module.css"
import { Typography } from '@/components/Typography'

const Testado = () => {
    return (
        <div className='h-screen w-screen bg-secondary flex justify-center items-center'>
            <div className='w-4/5 h-64 flex'>
                <div className='w-[60%] bg-primary'></div>
                <div className='w-[40%] bg-secondaryAlt'></div>
            </div>
        </div>
    )
}

export default Testado

// function About() {
//     const text = "The quick brown fox"
//     const text2 = "The quick brown fox jumps over the lazy dog"

//     return (
//         <div className={S.pageContainer}>
//             <div className={S.titlesContainer}>
//                 <Typography type="heading" size="xlg">
//                     Xlg Title - {text}
//                 </Typography>
//                 <Typography type="heading" size="lg">
//                     lg Title - {text}
//                 </Typography>
//                 <Typography type="heading" size="md">
//                     md Title - {text}
//                 </Typography>
//                 <Typography type="heading" size="default">
//                     Default Title - {text}
//                 </Typography>
//                 <Typography type="heading" size="sm">
//                     sm Title - {text}
//                 </Typography>
//             </div>

//             <div className={S.paragraphsContainer}>
//                 <Typography type="text" size="xlg">
//                     xLg Text - {text2}
//                 </Typography>
//                 <Typography type="text" size="lg">
//                     LG Text - {text2}
//                 </Typography>
//                 <Typography type="text" size="md">
//                     MD Text - {text2}
//                 </Typography>
//                 <Typography type="text" size="default">
//                     Default Text - {text2}
//                 </Typography>
//                 <Typography type="text" size="sm">
//                     SM Text - {text2}
//                 </Typography>
//             </div>
//         </div>
//     )
// }