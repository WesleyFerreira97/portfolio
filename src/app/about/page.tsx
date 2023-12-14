"use client"
import React, { useState } from 'react'
import S from "./style.module.css"
import { AndroidLogo, Pencil } from '@phosphor-icons/react'
import { CardProject } from '@/components/CardProject'
import { Typography } from '@/components/Typography'

const mediaQuery992 = "@media (min-width: 992px)";

const css = {
    color: "#fff",
    fontSize: "2rem"
    ,
    [mediaQuery992]: {
        fontSize: '10rem',
    },
}

export default function About() {


    return (
        <div className={S.pageContainer}>
            <Typography
                as="h3"
                type="heading"
                size="lg"
                color="text-sky-600"
            // bpSizes={{
            //     sm: "2rem",
            //     md: "3rem",
            //     lg: "4rem"
            // }}
            >
                Tipografia Teste
            </Typography>
            {/* <CardProject /> */}
        </div>
    )
}

