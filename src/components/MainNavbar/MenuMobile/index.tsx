import React from 'react'
import S from "./style.module.css"
import { useMenuMobileContext } from '..'

export const MenuMobile = () => {
    const { isMenuOpen, setIsMenuOpen } = useMenuMobileContext();

    const handleMenuClose = () => setIsMenuOpen(false);

    return (
        <div className={S.menuMobileWrap}>
            <ul className={S.content}>
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