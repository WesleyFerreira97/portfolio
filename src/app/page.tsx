"use client"
import React from 'react'
import S from './style.module.css'
import { HomeVideoBg } from '@/components/HomeVideoBg'
import { MainNavbar } from '@/components/Sections/MainNavbar'
import { TypeWriter } from '@/components/TypeWriter'
import { AboutMe } from '@/components/Sections/AboutMe'
import { Container } from '@/components/Layout/Container'
import { Skills } from '@/components/Sections/Skills'
import { Articles } from '@/components/Sections/Articles'


export default function Temp() {
    return (
        <div style={{ background: "#e2e2e2" }}>
            <Skills />
        </div>
    )
}

function Home() {

    return (
        <>
            <MainNavbar>
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

                <AboutMe />
                <Skills />
                <Articles />
                <MainNavbar.MenuMobile />
            </MainNavbar>
        </>
    )
}
