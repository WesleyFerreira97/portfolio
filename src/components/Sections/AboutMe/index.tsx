"use client"
import Image from "next/image"
import ProfilePic from '../../../../public/images/mainBg.png'
import S from './style.module.css'
import { Quotes } from '@phosphor-icons/react'
import { Container } from "../../Layout/Container"
import { Typography } from "@/components/Typography"

export function AboutMe() {
    return (
        <Container>
            <Container.Inner>
                <div className={S.aboutMeWrap}>
                    <div className={S.aboutMe}>
                        <div className={S.aboutMeThumb}>
                            <div className={S.quoteIcon}>
                                <Quotes size={32} color={"#fff"} />
                            </div>
                            <Image
                                src={ProfilePic.src}
                                fill={true}
                                alt='Profile Pic'
                            />
                        </div>
                        <div className={S.aboutMeInfo}>
                            <p className={S.aboutMeSubTitle}>Em Formação</p>
                            <Typography type="heading" size="lg" color="primary">
                                Engenheiro de Software
                            </Typography>
                            <span className={S.aboutMeTitle} />
                            {/* <Typography type="text" size="md" color="text-gray">
                                Sou desenvolvedor Mobile e Front-end, voltado a Android Nativo e React Native, com conhecimento aprofundado em React JS/Next, Typescript e proficiência o suficiente para se adaptar as principais bibliotecas e frameworks front-end do mercado como Vue JS e Angular, possuo conhecimentos em design voltado a criação de layouts.
                            </Typography> */}

                            <p className={S.aboutMeParagraph}>Atualmente estou cursando ensino superior em Engenharia de Software</p>
                        </div>
                    </div>
                </div>
            </Container.Inner>
        </Container>
    )
}