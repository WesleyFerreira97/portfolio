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

export function CardProject({ props }: CardProjectProps) {
    return (
        <div className={S.cardProjectWrap}>
            <div className={S.cardProject}>
                <div className={S.cardPreview}>
                    <div className={S.cardThumb}>
                        <Image
                            src={props.thumb}
                            alt='Project Thumb'
                            fill={true}
                        />
                    </div>
                </div>
                <div className={S.cardInfo}>
                    <div className={S.infoHeader}>
                        <Typography
                            as='span'
                            size='md'
                            style={{
                                type: 'text',
                                color: "primary",
                                weight: "bold",
                            }}
                        >
                            Projeto
                        </Typography>
                        <Typography
                            as='h3'
                            size='sm'
                            style={{
                                type: 'heading',
                                color: "secondary",
                                className: "uppercase mb-4"
                            }}
                        >
                            {props.projectTitle}
                        </Typography>
                    </div>
                    <div className={S.infoContent}>
                        <Typography
                            as='h3'
                            bpSizes='text-base'
                            style={{
                                type: 'heading',
                                className: "uppercase mb-6"
                            }}
                        >
                            {props.projectType}
                        </Typography>
                        <Typography
                            as='h3'
                            bpSizes='text-sm'
                            style={{
                                type: 'text',
                            }}
                        >
                            {props.description}
                        </Typography>
                    </div>
                    <div className="mt-3">
                        <ul className={S.techList}>
                            {props.skills.map((item, index) => (
                                <Typography
                                    key={index}
                                    as='li'
                                    bpSizes='text-xs'
                                    style={{
                                        type: 'text',
                                        className: "uppercase mx-1 mb-4 bg-zinc-200 py-1 px-3 rounded-sm",
                                        color: "gray",
                                        weight: "bold"
                                    }}
                                >
                                    {item}
                                    {/* <span className='mt'></span> */}
                                </Typography>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}