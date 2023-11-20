import React from 'react'
import S from "./style.module.css"
import { AboutMe } from '@/components/AboutMe'
import { Container } from '@/components/Layout/Container'

export default function About() {
    return (
        <Container>
            <Container.Inner>
                <AboutMe />
            </Container.Inner>
        </Container>
    )
}
