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
    )
}
