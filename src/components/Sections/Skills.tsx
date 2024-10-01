import { Container } from '@/components/Layout/Container'
import { Modal } from '@/components/Layout/Modal';
import { Pencil } from '@phosphor-icons/react';
import React, { useState } from 'react'
import { Typography } from '@/components/Ui/Typography';
import { frontEndProjectsData, SingleInfoProps } from '../../data/frontEndProjects';
import { SectionHeader } from '@/components/Sections/SectionHeader';
import { SingleProject } from '../Singles/SingleProject';
import { ProjectSection } from '../Ui/ProjectSection';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { useSingleContext } from '../Hooks/useSingleData';

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

export function Skills() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { dataSingle } = useSingleContext()
    const toggleModalState = () => setIsModalOpen(prev => !prev);

    return (
        <Container>
            <Container.Inner size='full' gap='noGap'>
                <div className='mb-6 md:mb-12'>
                <SectionHeader
                    headerTitle='Projetos e Habilidades'
                    menuOptions={skills}
                />
                </div>
                {/* <Swiper
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
                > */}
                    {frontEndProjectsData.map((values, index) => (
                        // <SwiperSlide key={index}>
                            <div
                                key={index}
                                className='bg-secondary'
                            >
                                <ProjectSection
                                    {...values}
                                    handleModal={toggleModalState}
                                />
                            </div>
                        // </SwiperSlide>
                    ))}
                {/* </Swiper> */}

                {dataSingle && (
                    <Modal handleClose={toggleModalState} modalStatus={isModalOpen}>
                        <SingleProject {...dataSingle} />
                    </Modal>
                )}
            </Container.Inner>
        </Container>
    )
}