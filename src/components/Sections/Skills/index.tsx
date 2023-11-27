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
    const [skillComponent, setSkillComponent] = useState<string>("frontEnd")

    const toggleModalState = () => setIsModalOpen(prev => !prev);
    const CurrentComponent = SkillsData["skillComponent"].pageComponent;

    const toggleSkillModal = (value: string) => {
        toggleModalState();
    }

    return (
        <Container>
            <Container.Inner>
                <div className={S.grid}>
                    {Object.entries(SkillsData).map((item, index) => {
                        const objKey = item[0];
                        const values = item[1];
                        return (
                            <>
                                <Card
                                    key={index}
                                    title={values.title}
                                    width="100%"
                                    ratio="9/16"
                                    onClick={() => toggleSkillModal(objKey)}
                                    description={values.description}
                                    icon={<values.icon size={"100%"} color='#fff' weight='fill' />}
                                />
                            </>
                        )
                    })}
                </div>
            </Container.Inner>
            <Modal toggleModal={isModalOpen} />
            <allSections.designer />
            <CurrentComponent title='Frontend' width="100%" />
        </Container>
    )
}
