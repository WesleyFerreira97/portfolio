import React from 'react'
import { Container } from '../Layout/Container'
import { GithubLogo, LinkedinLogo, At, ReadCvLogo } from '@phosphor-icons/react'
import { Icon } from '@phosphor-icons/react'
import Image from 'next/image'
import LogoSVG from '../../../public/images/logo.svg'
// import CVIcon from '../../../public/images/icons/cv-icon.svg'
// import GithubIcon from '../../../public/images/icons/github-icon.svg'
// import LinkedinIcon from '../../../public/images/icons/linkedin-icon.svg'
import MainIcon from '../../../public/images/icons/mail-icon.svg'
import { GithubIcon } from '@/assets/GithubIcon'
import { LinkedinIcon } from '@/assets/LinkedinIcon'
import { MailIcon } from '@/assets/MailIcon'
import { CVIcon } from '@/assets/CVIcon'

type ItemProps = {
    // Icon: Icon
    Icon: any;
    title: string
    subtitle: string;
}

const ListItem = ({Icon, ...props}: ItemProps) => {
    return (
        <div className='flex flex-col items-center'>
            <Icon fill='#fff' stroke='#fff' color='#fff' width="80px" height="80px" />
        </div>
    )
}

export function Footer() {
  return (
    <div className='w-full flex flex-col xl:flex-row justify-center h-[40vh] min-h-[400px] bg-[#090D1F]'>
        <div className='h-full w-full xl:w-[40%] bg-primary flex justify-center items-center flex-col text-center gap-4 p-7'>
            <div className='w-[80px] h-[80px] relative'>
                <Image
                    src={LogoSVG}
                    alt='Logo Portfólio'
                    fill={true}
                    className="max-h-full"
                />
                </div>
            <div>
                <h3 className='text-2xl text-white font-primary font-semibold uppercase'>
                    Wesley Ferreira
                </h3>
                <span className='text-sm text-white font-primary font-semibold uppercase'>
                    Desenvolvedor
                </span>
            </div>
        </div>
        <div className='relative h-full min-h-[300px] w-full xl:w-[60%] bg-secondary flex flex-col justify-center items-center gap-16'>
            <div className='flex items-center justify-center gap-x-24'>
                <ListItem title='Github' subtitle='@Wesleyferreira97' Icon={GithubIcon} />
                <ListItem title='LinkedIn' subtitle='@Wesleyferreira97' Icon={LinkedinIcon} />
                <ListItem title='E-mail' subtitle='Wesleyferreira97@outlook.com' Icon={MailIcon} />
                <ListItem title='Currículo' subtitle='Download' Icon={CVIcon} />
            </div>
            <div className='max-xl:absolute max-xl:bottom-0 w-full flex justify-center items-center bg-[#191B2F] text-white text-center'>
                <span className='p-2 flex font-primary text-[#ABABAB] text-sm font-semibold'>E-mail -  Wesleyferreira97@outlook.com</span>
            </div>
        </div>
    </div>
  )
}

