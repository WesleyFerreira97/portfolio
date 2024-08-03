import { Container } from '@/components/Layout/Container';
import React from 'react'
import { Typography } from '../Typography';
import ImageTest from "@/../public/images/bela_garota_images/bg-thumbnail.png"
import Image from 'next/image';

type ProjectProps = {
    projectTitle: string;
    projectType: string;
    description: string;
    skills: string[];
    thumb: any;
}


export type SectionProjectProps = {
    props: ProjectProps
}


export function ProjectSection({ props }: SectionProjectProps) {
    console.log(props)

    return (
        <div className="flex py-20">
            <div className='w-[50%] pl-64 pr-8'>
                <Typography
                    as='span'
                    size='sm'
                    style={{ type: 'heading', color: "primary", weight: 'semiBold' }}
                >
                    Projeto
                </Typography>
                <Typography
                    as='h2'
                    size='lg'
                    style={{ type: 'heading', color: "white", weight: "extraBold", className: "uppercase", lineHeight: "loose" }}
                >
                    {props.projectTitle}
                </Typography>
                <Typography
                    as='h2'
                    bpSizes='text-[14px]'
                    style={{ type: 'heading', className: "uppercase color-secondary", color: "white", weight: "bold" }}
                >
                    E-commerce
                    <span className='text-lightGray mt-'> React JS/Native e Supabase</span>
                </Typography>
                <Typography
                    as='h2'
                    size='sm'
                    style={{ type: 'heading', color: "white", weight: "light", lineHeight: "loose", className: "mt-8 " }}
                >
                    Esse projeto utiliza a API do github para fazer uma query nos perfis e trazer informações acerca da conta do usuário, além de implementar um chat, que envia e recebe dados em tempo real com uma plataforma de BackEnd as a Service ( Supabase).
                </Typography>
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
