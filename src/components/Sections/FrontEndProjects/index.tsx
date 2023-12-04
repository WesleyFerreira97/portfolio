import React from 'react'
import S from "./styles.module.css"
import { Pencil } from '@phosphor-icons/react'

export function FrontEndProjects() {
    return (
        <div className={S.pageHeader}>

            <div className={S.headerInfo}>
                <h1 className={S.pageTitle}>Front End</h1>
                <p className={S.pageDescription}>Sou desenvolvedor Mobile e Front-end, voltado a Android Nativo e React Native, com conhecimento aprofundado em React JS/Next, Typescript e proficiência o suficiente para se adaptar as principais bibliotecas e frameworks front-end do mercado como Vue JS e Angular, possuo conhecimentos em design voltado a criação de layouts.</p>

                <p className={S.pageDescription}>Atualmente estou cursando ensino superior em Engenharia de Software</p>
            </div>
            <div className={S.icon}>
                <Pencil size="100%" />
            </div>
        </div>
    )
}
