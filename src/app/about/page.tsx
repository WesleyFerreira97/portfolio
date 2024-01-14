"use client"
import React from 'react'
import S from "./style.module.css"
import { Typography } from '@/components/Ui/Typography'
import { Container } from '@/components/Layout/Container'
import { Button } from '@/components/Ui/Button'
import { GithubLogo } from '@phosphor-icons/react'

export default function Testado() {
    return (
        <Container>
            <Container.Inner size='full'>
                <div className='bg-secondary w-full h-screen flex justify-center items-center'>
                    <Button icon={GithubLogo} text='Github' />
                </div>
            </Container.Inner>
        </Container>
    )
}
