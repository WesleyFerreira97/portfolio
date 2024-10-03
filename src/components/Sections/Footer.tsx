import React from 'react'
import { Container } from '../Layout/Container'
import { GithubLogo } from '@phosphor-icons/react'

export function Footer() {
  return (
    <div className='flex justify-center h-[55vh] min-h-[400px] bg-secondary '>
        <div className='w-full h-full max-w-[95%] md:max-w-[90%] lg:max-w-[80%] xl:max-w-[75%] relative flex justify-center items-center flex-col gap-14'>
            <h3 className='text-[#fff] font-primary font-semibold text-2xl uppercase'>
                Meus Links
            </h3>
            <div>
                <div className=''>
                    <div className='bg-[#0d122b] p-2 rounded-lg shadow-lg'>
                        <GithubLogo size={48} alt='github-logo' color='#fff'/>
                    </div>
                </div>
                <span>Github</span>
                <span>@WesleyFerreira97</span>
            </div>
        </div>
    </div>
  )
}
