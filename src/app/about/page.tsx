"use client"
import React, { useState } from 'react'
import S from "./style.module.css"
import { AndroidLogo, Pencil } from '@phosphor-icons/react'
import { CardProject } from '@/components/CardProject'

export default function About() {

    return (
        <div className={S.pageContainer}>
            <CardProject />
        </div>
    )
}
