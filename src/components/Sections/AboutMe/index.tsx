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
                            <Typography
                                as="span"
                                size="md"
                                style={{
                                    color: "secondary",
                                    type: "heading",
                                    weight: "bold",
                                    lineHeight: "tight",
                                }}
                            >
                                Em Formação
                            </Typography>
                            <Typography
                                as="h3"
                                size="xlg"
                                style={{
                                    type: "heading",
                                    color: "primary",
                                    weight: "bold",
                                    lineHeight: "normal",
                                }}
                            >
                                Engenheiro de Software
                            </Typography>
                            <span className={S.aboutMeTitle} />
                            <Typography
                                size="md"
                                style={{
                                    type: "text",
                                    color: "secondaryAlt",
                                    lineHeight: "loose",
                                }}
                            >
                                Sou desenvolvedor Mobile e Front-end, voltado a Android Nativo e React Native, com conhecimento aprofundado em React JS/Next, Typescript e proficiência o suficiente para se adaptar as principais bibliotecas e frameworks front-end do mercado como Vue JS e Angular, possuo conhecimentos em design voltado a criação de layouts.
                            </Typography>

                            <Typography
                                size="md"
                                style={{
                                    type: "text",
                                    color: "secondaryAlt",
                                }}
                            >
                                Atualmente estou cursando ensino superior em Engenharia de Software
                            </Typography>
                        </div>
                    </div>
                </div>
            </Container.Inner>
        </Container>
    )
}