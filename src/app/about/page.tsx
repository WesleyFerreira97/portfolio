"use client"
import React, { useState } from 'react'
import S from "./style.module.css"
import { AndroidLogo, Pencil } from '@phosphor-icons/react'
import { CardProject } from '@/components/CardProject'
import { Typography } from '@/components/Typography'

export default function About() {

    return (
        <div className={S.pageContainer}>
            <h1 className='font-secondary text-5xl text-white'>Tipografia Teste</h1>
            <Typography
                as="h3"
                type="heading"
                // size="lg"
                bpSizes="sm:text-2xl md:text-3xl lg:text-9xl"
                color="text-sky-600"
            >
                Tipografia Teste
            </Typography>
            <h1 className='text-lg'>hjthjt</h1>
            {/* <CardProject /> */}
        </div>
    )
}