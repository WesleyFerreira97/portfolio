import React, { useState } from 'react'
import S from './style.module.css'
import { relative } from 'path'
import ProfilePic from '../../../public/images/profilePic.jpeg'
import Image from 'next/image'

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
        <>
            <div className={S.pageContainer}>
                <VideoBg />
                {/* Animação inicial será aplicada ao page elements, com alguma transição para o videoBg */}
                <div className={S.pageElements}>
                    <div className={S.mainNavbar}>
                        <span className={S.logo}>
                            W
                        </span>
                        <ul className={S.mainMenu}>
                            <li>Inicio</li>
                            <li>Quem sou eu</li>
                            <li>Projetos</li>
                            <li>Artigos</li>
                            <li>Contato</li>
                        </ul>
                    </div>
                    <h1 className={S.title}>Wesley Ferreira</h1>
                    <span className={S.subtitle}>Desenvolvedor FrontEnd</span>
                </div>
            </div>

            <AboutMe />
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