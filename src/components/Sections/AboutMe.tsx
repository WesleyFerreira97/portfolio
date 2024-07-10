"use client"
import Image from "next/image"
import ProfilePic from '../../../public/images/profilePic.jpeg'
import S from './style.module.css'
import { Quotes } from '@phosphor-icons/react'
import { Container } from "../Layout/Container"
import { Typography } from "@/components/Ui/Typography"

const Thumbnail = () => {
    return (
        <div className="relative flex m-auto xl:m-[inherit] aspect-[9/11] h-[250px] xl:h-[500px] mb-9 xl:mb-0">
            <span className="absolute h-[90%] w-[90%] bg-secondary" />
            <div className="absolute right-[-30px] top-[20%] z-10 p-4 bg-primary">
                <Quotes size={32} color={"#fff"} />
            </div>
            <div className="relative mt-auto ml-auto h-[92%] w-[92%] bg-red-800">
                <Image
                    src={ProfilePic.src}
                    fill={true}
                    alt='Profile Pic'
                    className="object-cover"
                />
            </div>
        </div>
    )
}

const AboutMeInfo = () => {
    return (
        <div className="w-full xl:w-[60%]">
            <Typography
                as="span"
                size="sm"
                style={{
                    color: "secondary",
                    type: "heading",
                    weight: "bold",
                    lineHeight: "tight",
                    className: "block mb-4",
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
                bpSizes="text-[16px]"
                style={{
                    type: "text",
                    weight: "normal",
                    color: "lightGray",
                    lineHeight: "relaxed",
                    className: "font-normal tracking-[-0.25px]",
                }}
            >
                <Typography.Paragraph>
                    Sou desenvolvedor Mobile e Front-end, voltado a Android Nativo e React Native, com conhecimento aprofundado em React JS/Next, Typescript e proficiência o suficiente para se adaptar as principais bibliotecas e frameworks front-end do mercado como Vue JS e Angular, possuo conhecimentos em design voltado a criação de layouts.
                </Typography.Paragraph>

                <Typography.Paragraph>
                    Sou desenvolvedor Mobile e Front-end, voltado a Android Nativo e React Native, com conhecimento aprofundado em React JS/Next, Typescript e proficiência o suficiente para se adaptar as principais bibliotecas e frameworks front-end do mercado como Vue JS e Angular, possuo conhecimentos em design voltado a criação de layouts.
                </Typography.Paragraph>

                <Typography.Paragraph>
                    Atualmente estou cursando ensino superior em Engenharia de Software
                </Typography.Paragraph>

            </Typography>
        </div>
    )
}

export function AboutMe() {
    return (
        <Container>
            <Container.Inner gap="xxl">
                <div className="w-full flex justify-center gap-10">
                    <div className="flex flex-col xl:flex-row justify-center gap-x-14 relative mb-">
                        <Thumbnail />
                        <AboutMeInfo />
                    </div>
                </div>
            </Container.Inner>
        </Container>
    )
}
