"use client"
import React from 'react'
import S from "./style.module.css"
import { AboutMe } from '@/components/AboutMe'
import { Container } from '@/components/Layout/Container'
import { Card } from '@/components/Card'
import { AndroidLogo, Pencil } from '@phosphor-icons/react'

export default function About() {

    return (
        <Container>
            <Container.Inner>
                {/* <AboutMe /> */}
                <div className={S.grid}>
                    {[1, 2, 3].map((index, value) => (
                        <Card
                            title='Front-End'
                            width="100%"
                            ratio="9/16"
                            description='Conhecimento aprofundado em JavaScript, React JS/Native e facilidade de adaptação a todas tecnologias Web,m Conhecimento aprofundado em JavaScript, React JS/Native e facilidade de adaptação a todas tecnologias WebConhecimento aprofundado em JavaScript, React JS/Native e facilidade de adaptação a todas tecnologias Web'
                            key={index}
                            icon={<Pencil size={"100%"} color='#fff' weight='fill' />}
                        />
                    ))}
                </div>
            </Container.Inner>
        </Container>
    )
}
