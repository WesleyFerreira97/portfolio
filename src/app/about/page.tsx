import React from 'react'
import S from "./style.module.css"
import { AboutMe } from '@/components/AboutMe'

export default function About() {
    return (
        <div className={S.pageContainer}>
            <AboutMe />
        </div>
    )
}
