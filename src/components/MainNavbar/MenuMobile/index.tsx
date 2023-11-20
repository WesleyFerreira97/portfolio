import React from 'react'
import S from "./style.module.css"
import { useMenuMobileContext } from '..'

export const MenuMobile = () => {
    const { isMenuOpen, setIsMenuOpen } = useMenuMobileContext();
    const handleMenuClose = () => setIsMenuOpen(prev => !prev);

    let toggleOverlay = isMenuOpen ? S.bgOverlay : S.bgOverlayOut;
    let toggleMenuStatus = isMenuOpen ? S.openMenu : S.closeMenu;

    return (
        <div className={`${S.menuMobileWrap} ${toggleOverlay}`}>
            {/* <span className={ } /> */}
            <ul className={`${S.content} ${toggleMenuStatus}`}>
                <span
                    onClick={handleMenuClose}
                >
                    Close Menu
                </span>
                <li>Inicio</li>
                <li>Mobile</li>
                <li>Projetos</li>
                <li>Artigos</li>
                <li>Contato</li>
            </ul>
        </div>
    )
}