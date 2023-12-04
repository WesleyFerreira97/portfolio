import React from 'react'
import S from "./styles.module.css"
import ProfilePic from '../../../public/images/mainBg.png'
import Image from 'next/image';


type ProjectProps = {
    projectTitle: string;
    projectType: string;
    description: string;
    skills: string[];
}

export type CardProjectProps = {
    props: ProjectProps
}

export function CardProject({ props }: CardProjectProps) {
    return (
        <div className={S.cardProjectWrap}>
            <h2 className={S.projectType}>
                {props.projectType}
            </h2>
            <div className={S.cardProject}>
                <div className={S.cardPreview}>
                    <div className={S.cardThumb}>
                        <Image
                            src={ProfilePic}
                            alt='Project Thumb'
                            fill={true}
                        />
                    </div>
                </div>
                <div className={S.cardInfo}>
                    <div className={S.infoHeader}>
                        <span className={S.infoHeaderLabel}>Projeto</span>
                        <h3 className={S.infoHeaderTitle}>
                            {props.projectTitle}
                        </h3>
                    </div>
                    <div className={S.infoContent}>
                        {props.description}
                    </div>
                    <div className={S.infoFooter}>
                        <ul className={S.techList}>
                            {props.skills.map((item, index) => (
                                <li key={index}>
                                    dsfg
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}