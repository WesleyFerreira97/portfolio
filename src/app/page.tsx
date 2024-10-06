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
import { Footer } from '@/components/Sections/Footer'
import { DesignSection } from '@/components/Sections/DesignSection'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

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
                {/* </div> */}
                <div className='my-24 md:my-36'>
                    {/* <Articles /> */}
                    <DesignSection />
                    {/* <div className='h-[10vh]'></div> */}
                </div>
                <div className='bg-cyan-700 '>
                {/* border-t-8 border-primary border-solid */}
                    <Footer />
                </div>
                <MainNavbar.MenuMobile />
            </MainNavbar>
        </SingleDataProvider>
    )
}
