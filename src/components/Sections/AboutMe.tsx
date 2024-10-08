"use client"
import Image from "next/image"
import ProfilePic from '../../../public/images/profilePic.jpeg'
import S from './style.module.css'
import { Quotes } from '@phosphor-icons/react'
import { Container } from "../Layout/Container"
import { Typography } from "@/components/Ui/Typography"

const Thumbnail = () => {
    return (
        <div className="relative flex m-auto xl:m-[inherit] aspect-[9/11] h-[300px] md:h-[400px] xl:h-[500px] mb-9 xl:mb-0">
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
        <div className="w-full xl:w-[60%] flex xl:block flex-col items-center text-center xl:text-start">
            <Typography
                as="span"
                size="sm"
                style={{
                    color: "primary",
                    type: "heading",
                    weight: "bold",
                    lineHeight: "none",
                    className: "block mb-2",
                }}
            >
                Em Formação
            </Typography>
            <Typography
                as="h3"
                style={{
                    type: "heading",
                    color: "secondary",
                    weight: "extraBold",
                    lineHeight: "none",
                }}
                // bpSizes="text-2xl lg:text-3xl xl:text-6xl"
                size="lg"
            >
                {/* Engenheiro de Software */}
                Software Engineer
            </Typography>
            <span className="block h-1 w-1/4 bg-primary mt-4 mb-8" />
            <Typography
                as="div"
                size="md"
                style={{
                    type: "text",
                    weight: "normal",
                    color: "lightGray",
                    lineHeight: "loose",
                    className: "font-normal tracking-[-0.25px]",
                }}
            >
                <Typography.Paragraph>
                    Sou desenvolvedor Front-end e Mobile, possuindo um conhecimento aprofundado em React JS/Next, React Native, JavaScript e TypeScript. Tenho também proficiência para me adaptar às principais bibliotecas e frameworks front-end do mercado, como Vue JS e Angular, além de experiência em design voltado para a criação de layouts.
                </Typography.Paragraph>
                <Typography.Paragraph>
                    Com o objetivo de me tornar um profissional com conhecimentos mais sólidos e bases fortes, iniciei uma graduação de Engenharia de Software e estudo diariamente algoritmos, estrutura de dados. Além disso, busco constantemente expandir meus conhecimentos em tecnologias, melhorias e agilidades no desenvolvimento de Softwares, a fim de me tornar um profissional mais completo e preparado para os desafios do mercado.
                </Typography.Paragraph>
                <Typography.Paragraph>
                    No momento também tenho focado em evoluir no aprendizado da lingua inglesa, com estudos diários através de pesquisas, videos e curso na plataforma DIO.ME com o curso English4Tech, voltado ao desenvolvimento rápido de inglês para profissionais de tecnologia.
                </Typography.Paragraph>
          

            </Typography>
        </div>
    )
}

export function AboutMe() {
    return (
        <Container>
            <Container.Inner gap="noGap">
                <div className="w-full flex justify-center gap-10">
                    <div className="flex flex-col xl:flex-row justify-center gap-x-14 relative ">
                        <Thumbnail />
                        <AboutMeInfo />
                    </div>
                </div>
            </Container.Inner>
        </Container>
    )
}
