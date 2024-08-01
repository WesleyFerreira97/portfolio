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
import { ProjectSection } from '../Ui/ProjectSection';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar, Autoplay, } from "swiper/modules";

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
            <Container.Inner size='full'>
                <SectionHeader
                    headerTitle='Projetos e Habilidades'
                    menuOptions={skills}
                />
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    slidesPerView={1}
                    // autoplay={{
                    //     delay: 3000,
                    //     disableOnInteraction: false,
                    // }}
                    navigation
                    loop
                    watchOverflow
                    scrollbar={{ draggable: true }}
                    pagination={{ clickable: true }}
                >
                    {frontEndProjectsData.map((values, index) => (
                        <SwiperSlide key={index}>
                            <div
                                key={index}
                                className='my-20 bg-secondary py-6'
                                onClick={() => handleModal(<SingleProduct />)}
                            >
                                <ProjectSection props={values} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Modal handleClose={toggleModalState} modalStatus={isModalOpen}>
                    {modalContent}
                </Modal>
            </Container.Inner>
        </Container>
    )
}
