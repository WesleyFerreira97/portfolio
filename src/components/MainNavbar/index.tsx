import React from 'react'
import LogoSVG from '../../../public/images/logo.svg'
import Image from 'next/image'
import S from "./styles.module.css"

export default function MainNavbar() {
    return (
        <div className={S.mainNavbar}>
            <span className={S.logo}>
                <Image src={LogoSVG} alt='Logo Portfólio' fill={true} />
            </span>
            <ul className={S.mainMenu}>
                <li>Inicio</li>
                <li>Quem sou eu</li>
                <li>Projetos</li>
                <li>Artigos</li>
                <li>Contato</li>
            </ul>
        </div>
    )
}

