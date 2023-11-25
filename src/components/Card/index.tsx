"use client"
import React, { ReactNode, useState } from 'react'
import S from "./styles.module.css"
import { Modal } from '../Modal';

type CardProps = {
    title: string;
    description?: string;
    icon?: ReactNode;
    link?: string;
    width?: string;
    ratio?: string;
}

export function Card({ width, ratio, ...props }: CardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModalState = () => setIsModalOpen(prev => !prev);



    return (
        <div
            className={S.cardWrap}
            style={{
                width: width,
                aspectRatio: ratio,
            }} >

            <div className={S.cardThumb}>
                <div className={S.icon}>{props.icon}</div>
                <h2 className={S.title}>{props.title}</h2>
                <button onClick={toggleModalState}>Toggle Modal</button>
            </div>

            <div className={S.cardInfo}>
                <p className={S.cardDescription}>
                    {props.description}
                </p>
            </div>
            <Modal toggleModal={isModalOpen} />

        </div>
    )
}
