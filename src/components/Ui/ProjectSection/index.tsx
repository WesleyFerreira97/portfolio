import { Container } from '@/components/Layout/Container';
import React from 'react'
import { Typography } from '../Typography';
import ImageTest from "@/../public/images/bela_garota_images/bg-thumbnail.png"
import Image from 'next/image';
import type { SingleInfoProps } from '@/data/frontEndProjects';

type ProjectProps = {
    projectTitle: string;
    projectType: string;
    description: string;
    skills: string[];
    thumb: any;
    singleData?: SingleInfoProps;
    handleModal: (value?: any) => void
}


export type SectionProjectProps = {
    props: ProjectProps
}


export function ProjectSection({ ...props }: ProjectProps) {

    return (
        <div className="flex py-20">
            <div className='w-[50%] pl-64 pr-8'>
                <Typography
                    as='span'
                    size='sm'
                    style={{
                        type: 'heading',
                        color: "primary",
                        weight: 'semiBold',
                        className: "block mb-2 tracking-[0.03rem]"
                    }}
                >
                    Projeto
                </Typography>
                <Typography
                    as='h2'
                    size='xlg'
                    style={{
                        type: 'heading',
                        color: "white",
                        weight: "extraBold",
                        className: "uppercase leading-[120%] mb-[1rem]",
                    }}
                >
                    {props.projectTitle}
                </Typography>
                <Typography
                    as='h2'
                    bpSizes='text-[16px]'
                    style={{ type: 'heading', className: "uppercase color-secondary tracking-[0.05rem]", color: "white", weight: "semiBold", }}
                >
                    E-commerce
                    <span className='text-lightGray'> React JS/Native e Supabase</span>
                </Typography>
                <Typography
                    as='h2'
                    size='sm'
                    style={{
                        type: 'heading',
                        color: "white",
                        weight: "light",
                        lineHeight: "loose",
                        className: "mt-8 tracking-[0.03rem]"
                    }}
                >
                    Esse projeto utiliza a API do github para fazer uma query nos perfis e trazer informações acerca da conta do usuário, além de implementar um chat, que envia e recebe dados em tempo real com uma plataforma de BackEnd as a Service ( Supabase).
                </Typography>
                <Typography
                    as='ul'
                    size='sm'
                    style={{ type: 'heading', color: "white", weight: "light", lineHeight: "loose", className: "mt-8 flex" }}
                >
                    {props.skills && (
                        props.skills.map((skill, index) => (
                            <li
                                key={index}
                                className='mr-4 text-lightGray'
                            >
                                {skill}
                            </li>
                        ))
                    )}
                </Typography>
                <button
                    onClick={() => props.handleModal(props.singleData)}
                >
                    Detalhes
                </button>
            </div>
            <div className='relative w-[50%] overflow-hidden h-[550px] aspect-video'>
                <Image
                    src={ImageTest}
                    fill={true}
                    alt='Profile Pic'
                    quality={100}
                    className="object-cover object-left rounded-l-md"
                />
            </div>
        </div>
    )
}
