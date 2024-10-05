import React from 'react'
import { Container } from '../Layout/Container'
import { GithubLogo } from '@phosphor-icons/react'

type ItemProps = {
    icon: React.ReactNode
    title: string
    subtitle: string
}

const ListItem = (props: ItemProps) => {
    return (
        <div className='flex flex-col ext-center items-center'>
            <GithubLogo size={96} alt='github-logo' color='#121a41'/>
            <span className='text-primary font-primary font-semibold pb-1 pt-2 text-base'>
                {props.title}
            </span>
            <span className='text-white font-primary font-normal text-xs tracking-wide'>
                {props.subtitle}
            </span>
        </div>
    )
}

export function Footer() {
  return (
    <div className='flex justify-center h-[55vh] min-h-[400px] bg-secondary '>
        <div className='w-full h-full max-w-[95%] md:max-w-[90%] lg:max-w-[80%] xl:max-w-[75%] relative flex justify-center items-center flex-col gap-14'>
            <h3 className='text-[#fff] font-primary font-semibold text-2xl uppercase'>
                Meus Links
            </h3>
            <div className='flex gap-14'>
            <ListItem />
            <ListItem />
            <ListItem />
            </div>
        </div>
    </div>
  )
}
