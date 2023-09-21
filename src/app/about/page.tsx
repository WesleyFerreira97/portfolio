import React, { useState } from 'react'
import S from './style.module.css'
import { relative } from 'path'

const VideoBg = () => {
    return (
        <div className={S.bgContainer}>
            <video className={S.video} autoPlay loop muted>
                <source src="/videos/bg2.mp4" type='video/mp4' />
            </video>
            <div className={S.overlay} />
        </div>
    )
}
export default function About() {
    return (
        <div className={S.pageContainer}>
            <VideoBg />
            <div className={S.pageElements}>
                <h1 className={S.title}>Wesley Ferreira</h1>
            </div>
        </div>
    )
}
