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
            <h2 className={S.projectType}>
                E-commerce React JS/Native
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
                        <h3 className={S.infoHeaderTitle}>Bela Garota</h3>
                    </div>
                    <div className={S.infoContent}>
                        Esse projeto utiliza a API do github para fazer uma query nos perfis e trazer informações acerca da conta do usuário, além de implementar um chat, que envia e recebe dados em tempo real com uma plataforma de BackEnd as a Service ( Supabase).
                    </div>
                    <div className={S.infoFooter}>
                        <ul className={S.techList}>
                            <li>React JS</li>
                            <li>Next JS</li>
                            <li>Typescript</li>
                            <li>Next UI</li>
                            <li>Supabase</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
