"use client"
import Image from "next/image"
import ProfilePic from '../../../public/images/profilePic.jpeg'
import S from './style.module.css'
import { Quotes, PaintBucket, FigmaLogo } from '@phosphor-icons/react'
import { Container } from "../Layout/Container"
import { Typography } from "@/components/Ui/Typography"
import DesignThumb from "@/../public/images/creative-design.jpg"
import { Swiper, SwiperSlide } from "swiper/react"
import BGHome from "@/../public/images/bela_garota_images/bg-thumbnail.png"
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules"
import SwiperCore from 'swiper';  
import { MutableRefObject, useRef } from "react"
import { Button } from "../Ui/Button"

type ThumbnailProps = {
    currentSlideRef: MutableRefObject<SwiperCore | null>
}

const Thumbnail = ({currentSlideRef}: ThumbnailProps) => {
   
    return (
        <div className="relative flex m-auto xl:m-[inherit] aspect-[9/11] h-[300px] md:h-[400px] xl:h-[500px] mb-9 xl:mb-0">
            <span className="absolute h-[90%] w-[90%] bg-secondary" />
            <div className="absolute right-[-30px] top-[20%] z-10 p-4 bg-primary">
                <PaintBucket size={32} color={"#fff"} />
            </div>
                <Swiper
                    onSwiper={(swiper) => (currentSlideRef.current = swiper)}
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    slidesPerView={1}
                    loop
                    watchOverflow
                    className="relative mt-auto ml-auto h-[276px] aspect-[9/11] md:h-[367px] xl:h-[460px] bg-red-800"
                >
                             
                    <SwiperSlide className="relativea">
                        <div className="w-ful h-full">
                            TESTE 1
                        <Image
                            src={DesignThumb.src}
                            fill={true}
                            alt='Profile Pic'
                            className="object-cover -z-10"
                        />
                        
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="relative">
                        TESTE 2
                        {/* <div className="w-ful h-full"> */}
                        <Image
                            src={DesignThumb.src}
                            fill={true}
                            alt='Profile Pic'
                            className="object-cover"
                        />
                        {/* </div> */}
                    </SwiperSlide>
                </Swiper>
           
            </div>
    )
}

type AboutMeProps = {
    handleNextSlide: () => void;
    handlePrevSlide: () => void;
}

const AboutMeInfo = (props: AboutMeProps) => {
  
    return (
        <div className="w-full xl:w-[60%] flex xl:block flex-col items-center text-center xl:text-start">
            <Typography
                as="span"
                size="sm"
                style={{
                    color: "primary",
                    type: "heading",
                    weight: "bold",
                    lineHeight: "none",
                    className: "block mb-2",
                }}
            >
                Design
            </Typography>
            <Typography
                as="h3"
                style={{
                    type: "heading",
                    color: "secondary",
                    weight: "extraBold",
                    lineHeight: "none",
                }}
                size="lg"
            >
                Projetos Figma
            </Typography>
            <span className="block h-1 w-1/4 bg-primary mt-4 mb-8" />
            <Typography
                as="div"
                size="md"
                style={{
                    type: "text",
                    weight: "normal",
                    color: "lightGray",
                    lineHeight: "loose",
                    className: "font-normal tracking-[-0.25px]",
                }}
            >
                <Typography.Paragraph>
                Acredito que uma habilidade essencial para todo desenvolvedor front-end é a capacidade de avaliar e contribuir na criação do design de uma aplicação. Embora não seja uma habilidade primária, saber desempenhá-la nos permite ter uma melhor compreensão das reais necessidades do projeto e facilita o trabalho em conjunto com os demais designers.
                </Typography.Paragraph>
            </Typography>
            <div className="navigation-buttons">
                    <Button
                        icon={FigmaLogo}
                        text=' Próximo Projeto'
                        animation={true}
                        bg='secondary'
                        onClick={props.handleNextSlide}
                    />
            </div>
        </div>
    )
}

const FigmaCard = () => {
    return (
        <div className="h-full w-full relative aspect-[4/9]">
            <Image
                src={DesignThumb.src}
                fill={true}
                alt='Profile Pic'
                className="object-cover -z-10"
            />
            <div className="absolute bottom-0 flex flex-col items-center justify-center w-full bg-secondary p-3 bg-opacity-60">
                <h5 className="text-white font-primary font-medium text-lg">RD App Encomendas</h5>
                <span className="text-white font-primary font-normal text-sm">Abrir Figma</span>
            </div>
        </div>
    )
}

export function DesignSection() {
    const swiperRef = useRef<SwiperCore | null>(null);
    
    const handleNextSlide = () => {
        if (swiperRef.current) swiperRef.current.slideNext();
      };
    
      const handlePrevSlide = () => {
        if (swiperRef.current) swiperRef.current.slidePrev();
      };

    return (
        <Container>
            <Container.Inner gap="noGap">
                <div className="w-full flex justify-center gap-10">
                    <div className="flex flex-col xl:flex-row justify-center gap-x-14 relative ">
                        <Thumbnail currentSlideRef={swiperRef} />
                        <AboutMeInfo
                            handleNextSlide={handleNextSlide}
                            handlePrevSlide={handlePrevSlide}
                        />
                    </div>
                </div>
                     
            </Container.Inner>
        </Container>
    )
}
