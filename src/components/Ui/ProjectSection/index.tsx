import React from 'react'
import { Typography } from '../Typography';
import ImageTest from "@/../public/images/bela_garota_images/bg-thumbnail.png"
import Image from 'next/image';
import type { SingleInfoProps } from '@/data/frontEndProjects';
import { Button } from '../Button';
import { Clipboard, ArrowFatLineRight } from '@phosphor-icons/react';
import { useSwiper } from 'swiper/react';
import { SingleProjectProps } from '@/components/Singles/SingleProject';
import { useSingleContext } from '@/components/Hooks/useSingleData';

type ProjectProps = {
    projectTitle: string;
    projectType: string;
    description: string;
    skills: string[];
    thumb: any;
    singleData: SingleInfoProps;
    handleModal: (value?: any) => void
}


export type SectionProjectProps = {
    props: ProjectProps
}


export function ProjectSection({ ...props }: ProjectProps) {
    const swiper = useSwiper();
    const { setDataSingle } = useSingleContext()
    const data = props.singleData;

    const singleData: SingleProjectProps = {
        article: data.article,
        articleTitle: data?.articleTitle,
        description: props.description,
        gallery: data.gallery,
        links: data.links,
        mainTitle: data.mainTitle
    }

    const handleSection = () => {
        setDataSingle(singleData);
        props.handleModal()
    }

    return (
        <div className="flex h-[85vh] items-center justify-center cursor-pointer py-28">
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
                    {props.description}
                </Typography>
                <Typography
                    as='ul'
                    size='sm'
                    style={{
                        type: 'heading',
                        color: "white",
                        weight: "light",
                        lineHeight: "loose",
                        className: "my-8 flex"
                    }}
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
                <div className='flex gap-4'>
                    <Button
                        icon={Clipboard}
                        text=' Detalhes'
                        animation={false}
                        bg='primary'
                        onClick={handleSection}
                    />
                    <Button
                        icon={ArrowFatLineRight}
                        text=' Proximo Projeto'
                        onClick={() => swiper.slideNext()}
                    />

                </div>
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
