import React from 'react'
import S from "./styles.module.css"

export function HomeVideoBg() {
    return (
        <div className={S.bgContainer}>
            <video className={S.video} autoPlay loop muted>
                <source src="/videos/bg2.mp4" type='video/mp4' />
            </video>
            <div className={S.overlay} />
        </div>
    )
}
