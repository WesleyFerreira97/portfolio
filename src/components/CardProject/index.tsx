import React from 'react'
import S from "./styles.module.css"
import ProfilePic from '../../../public/images/mainBg.png'
import Image from 'next/image';


type CardProjectProps = {
    projectTitle: string;
    projectType: string;
    description: string;
    skills: string;

}

export function CardProject() {
    return (
        <div className={S.cardProjectWrap}>
            <div className={S.cardPreview}>
                <h2 className={S.projectType}>
                    E-commerce React JS/Native
                </h2>
                <div className={S.cardThumb}>
                    sdfsdf
                    {/* <Image
                        src={ProfilePic}
                        alt='Project Thumb'
                    /> */}
                </div>
            </div>
            <div className={S.cardInfo}>
                Info
            </div>
        </div>
    )
}
