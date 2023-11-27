import { Card } from '@/components/Card';
import { Container } from '@/components/Layout/Container'
import { Modal } from '@/components/Modal';
import { Pencil } from '@phosphor-icons/react';
import React, { useState } from 'react'
import S from "./style.module.css"
import { SkillsData } from './data';

const allSections = {
    frontEnd: () => <Card title='Front End' />,
    mobile: () => <Card title='Mobile' />,
    designer: () => <Card title='Designer' />,
}

export function Skills() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModalState = () => setIsModalOpen(prev => !prev);

    const CurrentComponent = SkillsData["frontEnd"].pageComponent

    return (
        <Container>
            <Container.Inner>
                <div className={S.grid}>
                    {Object.values(SkillsData).map((item, index) => (
                        <Card
                            key={index}
                            title={item.title}
                            width="100%"
                            ratio="9/16"
                            onClick={toggleModalState}
                            description={item.description}
                            icon={<item.icon size={"100%"} color='#fff' weight='fill' />}
                        />
                    ))}
                </div>
            </Container.Inner>
            <Modal toggleModal={isModalOpen} />
            <allSections.designer />
            <CurrentComponent title='Frontend' width="100%" />
        </Container>
    )
}
