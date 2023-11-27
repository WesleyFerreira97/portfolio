import React from 'react'
import S from "./style.module.css"
import { useMenuMobileContext } from '..'
import { X } from '@phosphor-icons/react'

export const MenuMobile = () => {
    const { isMenuOpen, setIsMenuOpen } = useMenuMobileContext();
    const handleMenuClose = () => setIsMenuOpen(prev => !prev);

    let toggleOverlay = isMenuOpen ? S.bgOverlay : S.bgOverlayOut;
    let toggleMenuStatus = isMenuOpen ? S.openMenu : S.closeMenu;

    return (
        <div className={`${S.menuMobileWrap} ${toggleOverlay}`} >
            <div className={`${S.content} ${toggleMenuStatus}`}>
                <span
                    className={S.closeButton}
                    onClick={handleMenuClose}
                >
                    <X size={32} color='#090d1f' />
                </span>
                <ul className={S.menuList}>
                    <li>Inicio</li>
                    <li>Mobile</li>
                    <li>Projetos</li>
                    <li>Artigos</li>
                    <li>Contato</li>
                </ul>
            </div>
        </div>
    )
}