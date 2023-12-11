"use client"
import React, { useState } from 'react'
import S from "./style.module.css"
import { AndroidLogo, Pencil } from '@phosphor-icons/react'
import { CardProject } from '@/components/CardProject'
import { Typography } from '@/components/Typography'

export default function About() {

    return (
        <div className={S.pageContainer}>
            <Typography
                as="h3"
                style="heading"
                size="md"
                bpSizes={{
                    sm: "2rem",
                    md: "3rem",
                    lg: "4rem"
                }}
            >
                About
            </Typography>
            {/* <CardProject /> */}
        </div>
    )
}

type SizesProps = {
    size: "sm" | "md" | "lg";
    bpSizes: never;
} | {
    size?: never;
    bpSizes: {
        sm: string;
        md: string;
        lg: string;
    }

}

type TypographyProps = {
    style: "heading" | "text";
    children: React.ReactNode;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
} & SizesProps