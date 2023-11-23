"use client"
import React, { ReactNode } from 'react'
import S from "./styles.module.css"

type CardProps = {
    title: string;
    description?: string;
    icon?: ReactNode;
    link?: string;
    width?: string;
    ratio?: string;
}

export function Card({ width, ratio, ...props }: CardProps) {

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
            </div>

            <div className={S.cardInfo}>
                <p className={S.cardDescription}>
                    {props.description}
                </p>
            </div>


        </div>
    )
}
