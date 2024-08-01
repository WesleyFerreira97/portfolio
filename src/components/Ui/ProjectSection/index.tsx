import { Container } from '@/components/Layout/Container';
import React from 'react'
import { Typography } from '../Typography';
import ImageTest from "@/../public/images/bela_garota_images/home_main_content.png"
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
        <Container>
            <Container.Inner>
                <div className="flex">
                    <div className='w-[60%]'>
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
                            style={{ type: 'heading', color: "white", weight: "bold", className: "uppercase" }}
                        >
                            {props.projectTitle}
                        </Typography>
                        <Typography
                            as='h2'
                            bpSizes='text-[14px]'
                            style={{ type: 'heading', className: "uppercase color-secondary", color: "white", weight: "bold" }}
                        >
                            E-commerce
                            <span className='text-lightGray'> React JS/Native e Supabase</span>
                        </Typography>
                        <Typography
                            as='h2'
                            size='md'
                            style={{ type: 'text', color: "white", weight: "normal" }}
                        >
                            Esse projeto utiliza a API do github para fazer uma query nos perfis e trazer informações acerca da conta do usuário, além de implementar um chat, que envia e recebe dados em tempo real com uma plataforma de BackEnd as a Service ( Supabase).
                        </Typography>
                    </div>
                    <div className='relative w-full h-96'>
                        <Image
                            src={ImageTest}
                            fill={true}
                            alt='Profile Pic'
                            quality={100}
                            className="object-contain aspect-video"
                        />
                    </div>
                </div>
            </Container.Inner>
        </Container>
    )
}
