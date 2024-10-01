"use client"
import React from 'react'
import { HomeVideoBg } from '@/components/HomeVideoBg'
import { MainNavbar } from '@/components/MainNavbar'
import { TypeWriter } from '@/components/TypeWriter'
import { AboutMe } from '@/components/Sections/AboutMe'
import { Container } from '@/components/Layout/Container'
import { Skills } from '@/components/Sections/Skills'
import { Articles } from '@/components/Sections/Articles'
import { HomeMainContent } from '@/components/Sections/HomeMainContent'
import { SingleDataProvider } from '@/components/Hooks/useSingleData'


export default function Home() {

    return (
        <SingleDataProvider>
            <MainNavbar>
                <div className='mb-12'>
                    <HomeMainContent />
                </div>
                <div className='my-24 md:my-36'>
                    <AboutMe />
                </div>
                <div className='mt-24 md:mt-36'>
                    <Skills />
                </div>
                {/* <div className='my-36'> */}
                    {/* <Articles /> */}
                {/* </div> */}
                <div className='bg-cyan-700'>
                    footer
                </div>
                <MainNavbar.MenuMobile />
            </MainNavbar>
        </SingleDataProvider>
    )
}
