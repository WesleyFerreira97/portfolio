import React from 'react'
import S from "./styles.module.css"
import { Pencil } from '@phosphor-icons/react'
import { frontEndProjectsData } from './data'
import { CardProject } from '@/components/CardProject'

export function FrontEndProjects() {
    return (
        <>
            <div className={S.pageHeader}>

                <div className={S.headerInfo}>
                    <div className={S.header}>
                        <span className={S.iconMobile}>
                            <Pencil size="100%" />
                        </span>
                        <h1 className={S.pageTitle}>Front End</h1>
                    </div>
                    <p className={S.pageDescription}>Sou desenvolvedor Mobile e Front-end, voltado a Android Nativo e React Native, com conhecimento aprofundado em React JS/Next, Typescript e proficiência o suficiente para se adaptar as principais bibliotecas e frameworks front-end do mercado como Vue JS e Angular, possuo conhecimentos em design voltado a criação de layouts.</p>

                    <p className={S.pageDescription}>Atualmente estou cursando ensino superior em Engenharia de Software</p>
                </div>
                <span className={S.icon}>
                    <Pencil size="100%" />
                </span>
            </div>

            <div className={S.projectsSection}>
                <h3 className={S.projectsLabel}>Projetos :</h3>
            </div>

            {frontEndProjectsData.map((value, index) => (
                <div key={index} style={{ margin: "3rem 0" }}>
                    <CardProject props={value} />
                </div>
            ))}

        </>
    )
}
