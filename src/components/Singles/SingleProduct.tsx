import React from 'react'
import HomeImg from "../../../public/images/bela_garota_images/home_main_content.png"
import HomeHalfPage from "../../../public/images/bela_garota_images/home_halfpage.png"
import HomeWidgets from "../../../public/images/bela_garota_images/home_widgets.png"
import HomeSingleProduct from "../../../public/images/bela_garota_images/single_product.png"
import SiamHome from "../../../public/images/bela_garota_images/SiamMockup.png"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules';
import Image, { StaticImageData } from 'next/image'
import { Typography } from '@/components/Ui/Typography'
import { GithubLogo, FigmaLogo } from '@phosphor-icons/react'
import { Button } from '@/components/Ui/Button'
import { Container } from '../Layout/Container'
import { SingleInfoProps } from '@/data/frontEndProjects'

type CarouselImageProps = {
    thumbImg: StaticImageData
}

const CarouselImage = ({ thumbImg }: CarouselImageProps) => {
    return (
        <div className='h-96 w-full'>
            <Image
                src={thumbImg}
                fill={true}
                alt="Home"
                className='object-cover w-full h-full'
                quality={100}
            />
        </div>
    )
}

const HeaderPage = () => {
    return (
        <div className='relative h-full flex flex-col sm:mb-8'>
            <div className='h-[65vh] md:h-[60vh] xl:h-[60vh] bg-secondary flex flex-col justify-center items-center'>
                <div className='text-center flex flex-col lg:flex-row xl:gap-3'>
                    <Typography
                        bpSizes='text-3xl sm:text-5xl xl:text-6xl'
                        style={{
                            type: "heading",
                            color: "white",
                            className: 'z-50 uppercase tracking-[0.1rem]',
                            weight: "black"
                        }}
                    >
                        App Administrativo
                    </Typography>
                    <Typography
                        bpSizes='text-3xl sm:text-5xl xl:text-6xl'
                        style={{
                            type: "heading",
                            color: "secondaryAlt",
                            className: 'z-50 uppercase tracking-[0.1rem]',
                            weight: "black"
                        }}
                    >
                        React Native
                    </Typography>
                </div>
                <div className='w-3/6 flex justify-center mt-6 mb-9'>
                    <Typography
                        bpSizes='text-[1.25rem]'
                        // size='md'
                        style={{
                            type: "text",
                            color: "white",
                            weight: "light",
                            className: "text-center"
                        }} >
                        App para administração de academias, gerenciamento de matriculas, vencimentos e clientes ativos, feito em react native CLI e react native paper
                    </Typography>
                </div>
                <div className='my-8 z-50 flex gap-4 text-x'>
                    <Button icon={GithubLogo} text='Github' />
                    <Button icon={FigmaLogo} text='Figma' />
                </div>
            </div>
            <div className='w-full flex justify-center overflow-hiddenn bg-primarya'>
                <span className='absolute w-full h-[250px] sm:h-[350px] bg-secondary block' />
                <Image
                    src={SiamHome}
                    alt="Home"
                    className='z-50 relative h-[400px] sm:h-[500px] xl:h-[600px] 2xl:h-[700px] object-contain'
                />
            </div>
        </div>
    )
}


const ContentPage = () => {
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
                                Admin App
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
                            <Typography.Paragraph>
                                Esse projeto utiliza a API do github para fazer uma query nos perfis e trazer informações acerca da conta do usuário, além de implementar um chat, que envia e recebe dados em tempo real com uma plataforma de BackEnd as a Service ( Supabase).
                            </Typography.Paragraph>

                            <Typography.Paragraph>
                                Esse projeto utiliza a API do github para fazer uma query nos perfis e trazer informações acerca da conta do usuário, além de implementar um chat, que envia e recebe dados em tempo real commentar um chat, que envia e recebe dados em tempo real commentar um chat, que envia e recebe dados em tempo real com
                            </Typography.Paragraph>

                            <Typography.Paragraph>
                                Implementar um chat, que envia e recebe dados em tempo real commentar um chat, que envia e recebe dados em tempo real commentar um chat, que envia e recebe dados em tempo real com
                            </Typography.Paragraph>
                        </Typography>
                    </div>

                </div>
            </Container.Inner>
        </Container>
    )
}

export function SingleProduct(props: SingleInfoProps) {
    const carouselImages = [HomeImg, HomeHalfPage, HomeWidgets, HomeSingleProduct];

    return (
        <div className="flex flex-col">
            <HeaderPage />
            <ContentPage />
        </div>
    )
}



{/* <Swiper
    slidesPerView={3}
    spaceBetween={10}
    pagination={{
        clickable: true,
    }}
    // modules={[Pagination]}
    className="flex flex-col"
>
    {carouselImages.map((image, index) => (
        <>
            <SwiperSlide key={index}>
                <CarouselImage thumbImg={image} />
            </SwiperSlide>
        </>
    ))}

</Swiper> */}




