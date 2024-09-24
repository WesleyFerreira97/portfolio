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
                <Container>
                    <Container.Inner size='full' gap='xxl'>
                        <HomeMainContent />
                    </Container.Inner>
                </Container>
                <AboutMe />
                <Skills />
                <Articles />
                <MainNavbar.MenuMobile />
            </MainNavbar>
        </SingleDataProvider>
    )
}
