"use client"
import React, { useState, useRef } from 'react'
import S from './style.module.css'
import { relative } from 'path'
import ProfilePic from '../../../public/images/profilePic.jpeg'
import LogoSVG from '../../../public/images/logo.svg'
import Image from 'next/image'
import { } from "@/components/random"
import { HomeVideoBg } from '@/components/HomeVideoBg'
import MainNavbar from '@/components/MainNavbar'

export default function About() {
    const skills = useRef(null)

    const ex = () => {
        setTimeout(() => {
            console.log("Executou");

        }, 1000)
    }
    ex()

    return (
        <>
            <div className={S.mainContent}>
                <HomeVideoBg />

                <div className={S.mainContentWrap}>
                    <MainNavbar />
                    |
                    <div className={S.homeNameContainer}>
                        <span className={S.barDetail} />
                        <h1 className={S.title}>Wesley</h1>
                        <span className={S.surNameContainer}>
                            <h1 className={S.title2}>Ferreira</h1>
                        </span>
                    </div>

                    <p className={S.subtitle}>Desenvolvedor
                        <span className={S.subtitleTransition}
                            ref={skills} on
                        >
                            FrontEnd
                        </span>
                    </p>
                </div>
            </div>

            {/* <AboutMe /> */}
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