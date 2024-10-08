import React from 'react'
import SiamHome from "../../../public/images/bela_garota_images/SiamMockup.png"
import { Swiper, SwiperSlide } from 'swiper/react'
import Image, { StaticImageData } from 'next/image'
import { Typography } from '@/components/Ui/Typography'
import { GithubLogo, FigmaLogo } from '@phosphor-icons/react'
import { Button } from '@/components/Ui/Button'
import { Container } from '../Layout/Container'
import { ProjectDataProps, SingleInfoProps } from '@/data/frontEndProjects'
import { A11y, Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";

type CarouselImageProps = {
    thumbImg: StaticImageData
}

const CarouselImage = ({ thumbImg }: CarouselImageProps) => {
    return (
        <div className='h-[400px] sm:h-[500px] xl:h-[600px] 2xl:h-[700px]  w-full'>
            <Image
                src={thumbImg}
                fill={true}
                alt="Home"
                // className='object-cover w-full h-full'
                className='z-50 relative h-full w-full object-contain'
                quality={100}
            />

        </div>
    )
}

type ProjectProps = Pick<ProjectDataProps, "description">
type SingleProps = Pick<SingleInfoProps, "mainTitle" | "gallery" | "links">
type ContentProps = Pick<SingleInfoProps, "articleTitle" | "article">
type HeaderProps = ProjectProps & SingleProps;
export type SingleProjectProps = HeaderProps & ContentProps

const HeaderPage = (props: HeaderProps) => {

    return (
        <div className='relative h-full flex flex-col sm:mb-6'>
            <div className=' md:h-[60vh] xl:h-[60vh] bg-secondary flex flex-col justify-center items-center'>
                <div className='text-center flex flex-col lg:flex-row xl:gap-3'>
                    <Typography
                        bpSizes='text-2xl sm:text-5xl xl:text-6xl'
                        style={{
                            type: "heading",
                            color: "white",
                            className: 'z-50 uppercase tracking-[0.1rem]',
                            weight: "black"
                        }}
                    >
                        {props.mainTitle[0]}
                    </Typography>
                    <Typography
                        bpSizes='text-1xl sm:text-5xl xl:text-6xl'
                        style={{
                            type: "heading",
                            color: "secondaryAlt",
                            className: 'z-50 uppercase tracking-[0.1rem]',
                            weight: "black"
                        }}
                    >
                        {props.mainTitle[1]}
                    </Typography>
                </div>
                <div className='w-[90%] xl:w-[50%] flex justify-center mt-6 mb-9'>
                    <Typography
                        bpSizes='text-[0.8rem] lg:text-[1.25rem]'
                        style={{
                            type: "text",
                            color: "white",
                            weight: "light",
                            className: "text-center"
                        }} >
                        {props.description}
                    </Typography>
                </div>
                <div className='mb-8 mt-4 z-50 flex gap-4 text-x'>
                    {Object.entries(props.links).map((key, index) => {
                        const label = key[0];
                        const link = key[1];

                        return (
                            <Button
                                key={index}
                                icon={label == "repo" ? GithubLogo : FigmaLogo}
                                text={label}
                                href={link}
                            />
                        )
                    })}
                </div>
            </div>
            <div className='w-full flex justify-center overflow-hiddenn'>
                <span className='absolute w-full h-[250px] sm:h-[350px] bg-secondary block' />
                <div className='h-full w-[100%]'>
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
                        <SwiperSlide className=''>
                            <CarouselImage
                                thumbImg={props.gallery[0]}
                            />
                        </SwiperSlide>
                        {/* <SwiperSlide className=''>
                            <div className='overflow-hidden'>
                                <CarouselImage
                                    thumbImg={SiamHome}
                                />
                            </div>
                        </SwiperSlide> */}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

const ContentPage = (props: ContentProps) => {
    const { articleTitle, article } = props;

    return (
        <Container>
            <Container.Inner>
                <div className='max-w-[800px] m-auto flex flex-col items-center justify-center sm:mt-8 px-3 sm:px-0'>
                    <div className='w-full flex flex-col items-center justify-center'>
                        <Typography
                            bpSizes='text-md'
                            style={{
                                type: "text",
                                color: "primary",
                                weight: "semiBold",
                                className: "mb-3 uppercase"
                            }} >
                            Projeto
                        </Typography>
                        <div className='w-full flex justify-center items-center'>
                            <span className='relative h-[2px] bg-secondaryAlt flex-grow flex justify-center items-center'>
                                <span className='absolute right-0 bg-secondaryAlt h-[8px] w-[8px] rounded-full block' />
                            </span>
                            <Typography
                                as='h2'
                                size='md'
                                style={{
                                    type: "heading",
                                    color: "secondaryAlt",
                                    className: "mx-4 uppercase",
                                    weight: "extraBold"
                                }}
                            >
                                {articleTitle}
                            </Typography>
                            <span className='relative h-[2px] bg-secondaryAlt flex-grow flex justify-center items-center'>
                                <span className='absolute left-0 bg-secondaryAlt h-[8px] w-[8px] rounded-full block' />
                            </span>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <Typography
                            size='sm'
                            style={{
                                type: "text",
                                weight: "normal",
                                color: "lightGray",
                                lineHeight: "loose",
                                className: "font-normal tracking-[-0.25px]",
                            }}
                        >
                            {article &&
                                article.map((paragraph, index) => (
                                    <Typography.Paragraph key={index}>
                                        {paragraph}
                                    </Typography.Paragraph>

                                ))}
                        </Typography>
                    </div>

                </div>
            </Container.Inner>
        </Container>
    )
}

// description maintitle gallery links

export function SingleProject({ article, articleTitle, ...props }: SingleProjectProps) {

    return (
        <div className="flex flex-col">
            <HeaderPage {...props} />
            <ContentPage article={article} articleTitle={articleTitle} />
        </div>
    )
}