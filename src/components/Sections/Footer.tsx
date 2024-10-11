import React, { useState } from 'react'
import Image from 'next/image'
import LogoSVG from '../../../public/images/logo.svg'
import { GithubIcon } from '@/assets/GithubIcon'
import { LinkedinIcon } from '@/assets/LinkedinIcon'
import { MailIcon } from '@/assets/MailIcon'
import { CVIcon } from '@/assets/CVIcon'

type ItemProps = {
    Icon: any;
    link?: string
    isActive: boolean;
    onClick: () => void;
}

const ListItem = ({ Icon, ...props }: ItemProps) => {
  
    return (
      <div
        className='flex flex-col items-center w-[40px] xl:w-[80px] relative group cursor-pointer'
        onClick={props.onClick}
      >
        <Icon color='#fff' />
        <span
          className={`w-full h-[6px] bg-primary absolute -bottom-4 transition-opacity duration-300 ${
            props.isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}
        />
      </div>
    );
  };

export function Footer() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null); 
    const [currentBarText, setCurrentBarText] = useState<string>()

    const handleItemClick = (index: number, text: string, link?: string) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
      setCurrentBarText(text);

      if(link) {
        window.open(link, '_blank')
      }
     };

  return (
    <div className='w-full flex flex-col xl:flex-row justify-center h-full xl:h-[50vh] xl:min-h-[400px] bg-[#090D1F] overflow-hidden'>
        <div className='h-full w-full xl:w-[40%] bg-primary flex justify-center items-center gap-4 p-7'>
            <div className='w-[80px] h-[80px] relative'>
                <Image
                    src={LogoSVG}
                    alt='Logo Portfólio'
                    fill={true}
                    className="max-h-full"
                />
            </div>
            <div>
                <h3 className='text-2xl text-white font-primary font-bold uppercase whitespace-nowrap'>
                    Wesley Ferreira
                </h3>
                <span className='text-sm text-white font-primary font-semibold uppercase'>
                    Desenvolvedor
                </span>
            </div>
        </div>
        <div className='relative h-full min-h-[150px] xl:min-h-[300px] w-full xl:w-[60%] max-xl:pb-8 bg-secondary flex flex-col justify-center items-center gap-9'>
            <div className='flex items-center justify-center gap-x-12 xl:gap-x-24'>
            <ListItem
                Icon={GithubIcon}
                isActive={activeIndex === 0} 
                onClick={() => handleItemClick(
                    0, 
                    "Github: @WesleyFerreira97",
                    'https://github.com/Wesleyferreira97'
                )} 
            />
            <ListItem
                Icon={LinkedinIcon}
                isActive={activeIndex === 1}
                onClick={() => handleItemClick(
                    1, 
                    "LinkedIn: @WesleyFerreira97",
                    "https://www.linkedin.com/in/wesleyferreira97/"
                )}
            />
            <ListItem
                Icon={MailIcon}
                isActive={activeIndex === 2}
                onClick={() => handleItemClick(
                    2, 
                    'Wesleyferreira97@outlook.com'
                )}
            />
            <ListItem
                Icon={CVIcon}
                isActive={activeIndex === 3}
                onClick={() => handleItemClick(
                    3,
                    "Download Currículo",
                    "/portfolio/cv-wesley.docx"
                )}
            />
            </div>
            <div className='max-xl:absolute max-xl:bottom-0 w-full flex justify-center items-center bg-[#191B2F] text-white text-center'>
                <span className='p-3 flex font-primary text-[#ABABAB] text-sm font-semibold'>
                    {currentBarText}
                </span>
            </div>
        </div>
    </div>
  )
}

