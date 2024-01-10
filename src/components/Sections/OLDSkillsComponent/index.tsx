import { Card } from '@/components/Ui/Card';
import { Container } from '@/components/Layout/Container'
import { Modal } from '@/components/Layout/Modal';
import { Pencil } from '@phosphor-icons/react';
import React, { useState } from 'react'
import S from "./style.module.css"
import { SkillsData } from './data';

type SkillsKeys = keyof typeof SkillsData

export function Skills() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [skillComponent, setSkillComponent] = useState<SkillsKeys>("frontEnd")

    const toggleModalState = () => setIsModalOpen(prev => !prev);
    const CurrentComponent = SkillsData[skillComponent].pageComponent;

    const toggleSkillModal = (value: SkillsKeys) => {
        toggleModalState();
        setSkillComponent(value)
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
                                    ratio="16/9"
                                    onClick={() => toggleSkillModal(objKey as SkillsKeys)}
                                    description={values.description}
                                    icon={<values.icon size={"100%"} color='#fff' weight='fill' />}
                                />
                            </>
                        )
                    })}
                </div>
            </Container.Inner>
            <Modal modalStatus={isModalOpen} handleClose={toggleModalState}>
                <CurrentComponent title='' />
            </Modal>
        </Container>
    )
}
