import React, { ReactNode, SetStateAction, createContext, useState, Dispatch, useContext } from 'react'
import LogoSVG from '../../../public/images/logo.svg'
import Image from 'next/image'
import S from "./styles.module.css"
import { List } from '@phosphor-icons/react'
import { MenuMobile } from './MenuMobile'

type MainNavbarProps = {
    children: ReactNode
}

type TypeMenuMobileContext = {
    isMenuOpen: boolean;
    // setIsMenuOpen: (value: string) => void
    setIsMenuOpen: React.Dispatch<SetStateAction<boolean>>;
}

const initialValue = {
    isMenuOpen: false,
    setIsMenuOpen: () => { }
}
const MenuMobileContext = createContext<TypeMenuMobileContext>(initialValue)

export const useMenuMobileContext = () => {
    const { isMenuOpen, setIsMenuOpen } = useContext(MenuMobileContext);

    return { isMenuOpen, setIsMenuOpen }
}

const Navbar = () => {
    const { isMenuOpen, setIsMenuOpen } = useMenuMobileContext();

    const handleMenuOpen = () => setIsMenuOpen(prev => !prev);
    console.log(isMenuOpen);

    return (
        <div className={S.mainNavbar}>
            <span className={S.logo}>
                <Image src={LogoSVG} alt='Logo Portfólio' fill={true} />
            </span>
            <div
                onClick={handleMenuOpen}
                className={S.menuMobileButton}
            >
                <List size={24} color='#fff' weight='fill' />
            </div>
            <ul className={S.menuDesktop}>
                <li>Inicio</li>
                <li>Desktop</li>
                <li>Projetos</li>
                <li>Artigos</li>
                <li>Contato</li>
            </ul>
        </div>
    )
}


function MainNavbar({ children }: MainNavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <MenuMobileContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
                {children}
            </MenuMobileContext.Provider>
        </>
    )
}



MainNavbar.Navbar = Navbar;
MainNavbar.MenuMobile = MenuMobile;

export { MainNavbar }


