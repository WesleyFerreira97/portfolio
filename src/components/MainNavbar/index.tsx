import React, { ReactNode, SetStateAction, createContext, useState, useContext } from 'react'
import LogoSVG from '../../../public/images/logo.svg'
import Image from 'next/image'
import { List } from '@phosphor-icons/react'
import { MenuMobile } from './MenuMobile'
import { MenuOptions } from './data'
import { Typography } from '@/components/Ui/Typography'

type MainNavbarProps = {
    children: ReactNode,
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
    const { setIsMenuOpen } = useMenuMobileContext();

    const handleMenuOpen = () => setIsMenuOpen(prev => !prev);

    return (
        <div className="w-full flex justify-between items-center pt-4 px-8 lg:px-16 pb-0">
            <span className="h-20 w-12 md:w-16 flex flex-row relative text-2xl font-bold font-primary mr-8">
                <Image
                    src={LogoSVG}
                    alt='Logo Portfólio'
                    fill={true}
                    className="max-h-full"
                />
            </span>
            <div
                onClick={handleMenuOpen}
                className="block lg:hidden"
            >
                <List size={24} color='#fff' />
            </div>
            <ul className="hidden lg:flex gap-7">
                {MenuOptions.map((value, index) => (
                    <Typography
                        key={index}
                        as='li'
                        size='md'
                        style={{
                            type: "text",
                            color: "white",
                            weight: "light"
                        }}
                    >
                        <a href={value.path} target='_blank'>{value.label}</a>
                    </Typography>
                ))}
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


