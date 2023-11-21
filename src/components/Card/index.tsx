import React, { ReactNode } from 'react'
import S from "./styles.module.css"

type CardProps = {
    title: string;
    description?: string;
    icon?: ReactNode;
    link?: string;
    width?: string;
    ratio?: string;
    maxH?: string;
}

export function Card({ width, ratio, maxH, ...props }: CardProps) {

    return (
        <div
            className={S.cardWrap}
            style={{
                width: width,
                aspectRatio: ratio,
                maxHeight: maxH
            }} >
            <div className={S.cardThumb}>
                {props.icon}
                <h2>{props.title}</h2>
            </div>
            <div className={S.cardInfo}>
                <p className={S.cardDescription}>
                    {props.description}
                </p>
            </div>
        </div>
    )
}
