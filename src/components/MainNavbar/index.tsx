import React, { ReactNode } from 'react'
import LogoSVG from '../../../public/images/logo.svg'
import Image from 'next/image'
import S from "./styles.module.css"
import { List } from '@phosphor-icons/react'

type MainNavbarProps = {
    children: ReactNode
}

const MenuDesktop = () => {
    return (
        <ul className={S.mainMenu}>
            <li>Inicio</li>
            <li>Desktop</li>
            <li>Projetos</li>
            <li>Artigos</li>
            <li>Contato</li>
        </ul>
    )
}

const MenuMobile = () => {
    return (
        <ul className={S.mainMenu}>
            <li>Inicio</li>
            <li>Mobile</li>
            <li>Projetos</li>
            <li>Artigos</li>
            <li>Contato</li>
        </ul>
    )
}

const Navbar = () => {
    return (
        <div className={S.mainNavbar}>
            <span className={S.logo}>
                <Image src={LogoSVG} alt='Logo Portfólio' fill={true} />
            </span>
            <div className={S.menuMobile}>
                <List size={24} color='#fff' weight='fill' />
            </div>
            <MenuDesktop />
        </div>
    )
}


function MainNavbar({ children }: MainNavbarProps) {
    return (
        <>
            {children}
        </>
    )
}

MainNavbar.Navbar = Navbar;
MainNavbar.MenuDesktop = MenuDesktop;

export { MainNavbar }


