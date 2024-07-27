import { Container } from '@/components/Layout/Container'
import { Modal } from '@/components/Layout/Modal';
import { Pencil } from '@phosphor-icons/react';
import React, { useState } from 'react'
import { SkillsData } from '../../data/skills';
import { Typography } from '@/components/Ui/Typography';
import { frontEndProjectsData } from '../../data/frontEndProjects';
import { CardProject } from '@/components/Ui/CardProject';
import { SectionHeader } from '@/components/Sections/SectionHeader';
import { SingleProduct } from '../Singles/SingleProduct';

type SkillsKeys = keyof typeof SkillsData

export function Skills() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState("")

    const toggleModalState = () => setIsModalOpen(prev => !prev);

    const handleModal = (value: any) => {
        toggleModalState();
        setModalContent(value)
    }

    const skills = {
        frontEnd: {
            title: "Front-End",
            link: "string",
        },
        mobile: {
            title: "Mobile",
            link: "string",
        },
        designer: {
            title: "Designer",
            link: "string",
        },
        comunicacao: {
            title: "Comunicação",
            link: "string",
        },
    }

    return (
        <Container>
            <Container.Inner>
                <SectionHeader
                    headerTitle='Projetos e Habilidades'
                    menuOptions={skills}
                />


                {frontEndProjectsData.map((values, index) => (
                    <div
                        key={index}
                        className='my-20'
                        onClick={() => handleModal(<SingleProduct />)}
                    >
                        <CardProject props={values} />
                    </div>
                ))}

                <Modal handleClose={toggleModalState} modalStatus={isModalOpen}>
                    {modalContent}
                </Modal>
            </Container.Inner>
        </Container>
    )
}
