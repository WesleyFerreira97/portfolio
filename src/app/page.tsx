"use client"
import React from 'react'
import S from './style.module.css'
import ProfilePic from '../../public/images/profilePic.jpeg'
import Image from 'next/image'
import { HomeVideoBg } from '@/components/HomeVideoBg'
import { MainNavbar } from '@/components/MainNavbar'
import { TypeWriter } from '@/components/TypeWriter'

export default function Home() {

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

                {/* <AboutMe /> */}
            </MainNavbar>
        </>
    )
}

const AboutMe = () => {
    return (
        <div className={S.aboutMeContainer}>
            <div className={S.aboutMeThumb}>
                <Image
                    src={ProfilePic.src}
                    fill={true}
                    alt='Profile Pic'
                />
            </div>
            <div className={S.aboutMeInfo}>
                <h1 className={S.aboutMeTitle}>
                    Engenheiro de Software em formação
                </h1>
                <p className={S.aboutMeParagraph}>Sou desenvolvedor Mobile e Front-end, voltado a Android Nativo e React Native, com conhecimento aprofundado em React JS/Next, Typescript e proficiência o suficiente para se adaptar as principais bibliotecas e frameworks front-end do mercado como Vue JS e Angular, possuo conhecimentos em design voltado a criação de layouts.</p>

                <p className={S.aboutMeParagraph}>Atualmente estou cursando ensino superior em Engenharia de Software</p>
            </div>
        </div>
    )
}