import { Container } from '@/components/Layout/Container'
import { Modal } from '@/components/Modal';
import { Pencil } from '@phosphor-icons/react';
import React, { useState } from 'react'
import { SkillsData } from './data';
import { Typography } from '@/components/Typography';
import { frontEndProjectsData } from '../FrontEndProjects/data';
import { CardProject } from '@/components/CardProject';
import { SectionHeader } from '@/components/SectionHeader';

type SkillsKeys = keyof typeof SkillsData

export function Skills() {
    const skills = {
        frontEnd: {
            title: "Front-End",
            link: "string",
        },
        mobile: {
            title: "Mobile",
            link: "string",
        },
        designer: {
            title: "Designer",
            link: "string",
        },
        comunicacao: {
            title: "Comunicação",
            link: "string",
        },
    }

    return (
        <Container>
            <Container.Inner>
                <SectionHeader
                    headerTitle='Projetos e Habilidades'
                    menuOptions={skills}
                />
                <div className='flex pb-10'>
                    <Typography
                        as='p'
                        size='md'
                        style={{
                            type: "text",
                            color: "secondaryAlt",
                            weight: "semiBold",
                            className: 'mt-9'
                        }} >
                        Sou desenvolvedor Mobile voltado a Android Nativo e React Native, Front-end com conhecimento aprofundado em React JS/Next, Typescript e proficiência o suficiente para se adaptar as principais bibliotecas e frameworks front-end do mercado como Vue JS e Angular, possuo conhecimentos em design voltado a criação de layouts.
                    </Typography>
                </div>

                {frontEndProjectsData.map((values, index) => (
                    <div key={index} className='my-20'>
                        <CardProject props={values} />
                    </div>
                ))}
            </Container.Inner>
        </Container>
    )
}
