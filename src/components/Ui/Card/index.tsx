"use client"
import React, { ReactNode, useState } from 'react'
import S from "./styles.module.scss"

export type CardProps = {
    title: string;
    description?: string;
    icon?: ReactNode;
    width?: string;
    ratio?: string;
    onClick?: () => void
}

export function Card({ width, ratio, ...props }: CardProps) {

    return (
        <div
            className={S.cardWrap}
            style={{
                width: width,
            }} >

            <div
                className={S.cardThumb}
                onClick={props.onClick}
                style={{
                    aspectRatio: ratio,
                }}
            >
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
