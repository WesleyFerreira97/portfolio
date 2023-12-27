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
                                size="sm"
                                style={{
                                    color: "secondary",
                                    type: "heading",
                                    weight: "bold",
                                    lineHeight: "tight",
                                    className: "block my-4",
                                }}
                            >
                                Em Formação
                            </Typography>
                            <Typography
                                as="h3"
                                style={{
                                    type: "heading",
                                    color: "secondary",
                                    weight: "bold",
                                    lineHeight: "normal",
                                }}
                                // bpSizes="text-2xl lg:text-3xl xl:text-6xl"
                                size="lg"
                            >
                                Engenheiro de Software
                            </Typography>
                            <span className="block h-1 w-1/2 bg-primary mt-4 mb-8" />
                            <Typography
                                as="div"
                                size="md"
                                style={{
                                    type: "text",
                                    // color: "secondaryAlt",
                                    lineHeight: "relaxed",
                                }}
                            >
                                <Typography.Paragraph>
                                    Sou desenvolvedor Mobile e Front-end, voltado a Android Nativo e React Native, com conhecimento aprofundado em React JS/Next, Typescript e proficiência o suficiente para se adaptar as principais bibliotecas e frameworks front-end do mercado como Vue JS e Angular, possuo conhecimentos em design voltado a criação de layouts.
                                </Typography.Paragraph>

                                <Typography.Paragraph>
                                    Sou desenvolvedor Mobile e Front-end, voltado a Android Nativo e React Native, com conhecimento aprofundado em React JS/Next, Typescript e proficiência o suficiente para se adaptar as principais bibliotecas e frameworks front-end do mercado como Vue JS e Angular, possuo conhecimentos em design voltado a criação de layouts.
                                </Typography.Paragraph>

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