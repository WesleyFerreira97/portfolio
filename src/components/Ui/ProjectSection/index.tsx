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
        <div className="flex flex-col md:flex-row min-h-[85vh] items-center justify-center cursor-pointer md:py-12 md:pl-24 2xl:pl-40 max-md:py-16">
            <div className='w-[90%] md:w-[50%] order-2 md:order-1 pt-6 text-center md:text-left md:pr-10 2xl:pr-14 '>
                <Typography
                    as='span'
                    bpSizes="text-[0.9rem] md:text-[1rem] 2xl:text-[1.125rem]"
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
                    bpSizes="text-[1.6rem] md:text-[2.3rem] 2xl:text-[3rem]"
                    style={{
                        type: 'heading',
                        color: "white",
                        weight: "extraBold",
                        className: "uppercase leading-[120%] mb-[0.5rem]",
                    }}
                >
                    {props.projectTitle}
                </Typography>
                <Typography
                    as='h2'
                    bpSizes="text-[0.8rem] md:text-[1rem] 2xl:text-[1.125rem]"
                    style={{ type: 'heading', className: "uppercase color-secondary tracking-[0.05rem]", color: "white", weight: "semiBold", }}
                >
                    E-commerce
                    <span className='text-lightGray'> React JS/Native e Supabase</span>
                </Typography>
                <Typography
                    as='p'
                    bpSizes="text-[0.8rem] md:text-[1rem] 2xl:text-[1.125rem] 2xl:mt-16"
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
                    bpSizes="text-[0.8rem] md:text-[1rem] 2xl:text-[1.125rem]"
                    style={{
                        type: 'heading',
                        color: "white",
                        weight: "light",
                        lineHeight: "loose",
                        className: "mt-6 mb-3 flex flex-wrap justify-center md:justify-start whitespace-nowrap gap-x-3 2xl:my-12"
                    }}
                >
                    {props.skills && (
                        props.skills.map((skill, index) => (
                            <li
                                key={index}
                                className='text-lightGray'
                            >
                                {skill}
                            </li>
                        ))
                    )}
                </Typography>
                <div className='flex justify-center md:justify-start gap-4'>
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
            <div className='relative w-[90%] md:w-[50%] 2xl:w-[55%] md:order-1 overflow-hiddean md:h-[400px] 2xl:h-[550px] aspect-video'>
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
