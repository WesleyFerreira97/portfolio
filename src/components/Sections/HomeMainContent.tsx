import React from 'react'
import S from './tempMainContent.module.css'
import { HomeVideoBg } from '../HomeVideoBg'
import { MainNavbar } from '../MainNavbar'
import { TypeWriter } from '../TypeWriter'

export function HomeMainContent() {
    return (
        <div className={S.mainContent} >
            <div className={S.videoBg}>
                <HomeVideoBg />
            </div>

            <div className={S.mainContentWrap}>

                <div className={S.mainNavbar}>
                    <MainNavbar.Navbar />
                </div>

                <div className={S.homeNameContainer}>
                    {/* Ultimo Elemento */}
                    <span className={S.barDetail} />

                    {/* Primeiro Elemento  */}
                    <div className={S.nameContainer}>
                        <span className={S.animationBlock}></span>
                        <h1 className={S.name}>Wesley</h1>
                    </div>

                    {/* Segundo Elemento */}
                    <span className={S.surNameContainer}>
                        <span className={S.animationBlock2}></span>
                        <h1 className={S.surName}>Ferreira</h1>
                    </span>
                </div>

                {/* Terceiro Elemento */}
                <p className={S.subtitleContainer}>
                    <span className={S.subtitle}>
                        {/* <span className={S.subtitleDesktop}>Desenvolvedor</span>
        <span className={S.subtitleMobile}>Dev</span> */}
                        Desenvolvedor
                        <span className={S.subtitleTransition} >
                            <TypeWriter textArray={["Front-End", "Mobile"]} />
                        </span>
                    </span>
                </p>
            </div>
        </div>
    )
}
