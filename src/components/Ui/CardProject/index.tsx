import React from 'react'
import S from "./styles.module.css"
import ProfilePic from '../../../public/images/mainBg.png'
import Image from 'next/image';
import { Typography } from '../Typography';


type ProjectProps = {
    projectTitle: string;
    projectType: string;
    description: string;
    skills: string[];
    thumb: any;
}

export type CardProjectProps = {
    props: ProjectProps
}

const CardInfo = ({ props }: CardProjectProps) => {
    return (
        <div className="h-full flex flex-col items-end text-right justify-center relative">
            <div className="z-10 relative pr-4 pb-5">
                <Typography
                    as='span'
                    size='sm'
                    style={{
                        type: 'text',
                        color: "primary",
                        weight: "normal",
                    }}
                >
                    Projeto
                </Typography>
                <Typography
                    as='h3'
                    size='sm'
                    style={{
                        type: 'heading',
                        weight: "bold",
                        color: "secondary",
                        className: "uppercase mb-4 max-lg:text-white"
                    }}
                >
                    {props.projectTitle}
                </Typography>
            </div>
            <div className="bg-secondary rounded-sm p-4 z-10">
                <Typography
                    as='h3'
                    bpSizes='text-base'
                    style={{
                        type: 'heading',
                        className: "uppercase mb-6",
                        color: "lightGray"
                    }}
                >
                    {props.projectType}
                </Typography>
                <Typography
                    as='h3'
                    bpSizes='text-sm'
                    style={{
                        type: 'text',
                        color: "lightGray"
                    }}
                >
                    {props.description}
                </Typography>
            </div>
            <div className="mt-3">
                <ul className="flex">
                    {props.skills.map((item, index) => (
                        <Typography
                            key={index}
                            as='li'
                            bpSizes='text-xs'
                            style={{
                                type: 'text',
                                className: "uppercase mx-1 mb-4 bg-zinc-200 py-1 px-3 rounded-sm  whitespace-nowrap flex-wrap",
                                color: "gray",
                                weight: "bold"
                            }}
                        >
                            {item}
                        </Typography>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export function CardProject({ props }: CardProjectProps) {
    return (
        <div className="w-full h-full min-h-[350px] max-w-[1200px] flex flex-col mx-auto cursor-pointer relative">
            <div className="h-full w-full lg:w-3/5 xl:w-3/5 absolute">
                <div className='w-full h-full absolute bg-secondary z-10 opacity-40 hover:opacity-0 transition-opacity' />
                <Image
                    src={props.thumb}
                    alt='Project Thumb'
                    fill={true}
                    className='object-cover'
                />
            </div>

            <div className='w-full lg:w-3/5 h-full absolute md:right-0'>
                <CardInfo props={props} />
            </div>
        </div>
    )
}
