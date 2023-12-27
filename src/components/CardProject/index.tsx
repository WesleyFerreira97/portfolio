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
                        <span className={S.infoHeaderLabel}>Projeto</span>
                        <Typography
                            as='h3'
                            size='md'
                            style={{
                                type: 'heading',
                                className: "uppercase mb-4"
                            }}
                        >
                            {props.projectTitle}
                        </Typography>
                    </div>
                    <div className={S.infoContent}>
                        <Typography
                            as='h3'
                            size='sm'
                            style={{
                                type: 'heading',
                                className: "uppercase mb-8"
                            }}
                        >
                            {props.projectType}
                        </Typography>
                        {props.description}
                    </div>
                    <div className={S.infoFooter}>
                        <ul className={S.techList}>
                            {props.skills.map((item, index) => (
                                <Typography
                                    key={index}
                                    as='li'
                                    size='sm'
                                    style={{
                                        type: 'text',
                                        className: "uppercase mb-4",
                                        color: "lightGray"
                                    }}
                                >
                                    {item}
                                </Typography>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}