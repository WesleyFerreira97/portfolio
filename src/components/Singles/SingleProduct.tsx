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
        <div className='relative flex flex-col'>
            <div className='h-[80vh] bg-secondary flex flex-col justify-center items-center'>
                <div className='text-center flex flex-col lg:flex-row xl:gap-3'>
                    <Typography
                        bpSizes='text-3xl sm:text-5xl xl:text-6xl'
                        style={{
                            type: "heading",
                            color: "white",
                            className: 'z-50 uppercase'
                        }}
                    >
                        App Administrativo
                    </Typography>
                    <Typography
                        bpSizes='text-3xl sm:text-5xl xl:text-6xl'
                        style={{
                            type: "heading",
                            color: "secondaryAlt",
                            className: 'z-50 uppercase'
                        }}
                    >
                        React Native
                    </Typography>
                </div>
                <div className='w-3/4 flex justify-center mt-6 mb-9'>
                    <Typography
                        size='md'
                        style={{
                            type: "text",
                            color: "white",
                            weight: "semiBold",
                            className: "text-center"
                        }} >
                        App para administração de academias, gerenciamento de matriculas, vencimentos e clientes ativos, feito em react native CLI e react native paper
                    </Typography>
                </div>
                <div className='my-8 z-50 flex gap-4'>
                    <Button icon={GithubLogo} text='Github' />
                    <Button icon={FigmaLogo} text='Figma' />
                </div>
            </div>
            <div className='w-full flex justify-center -mt-14 xl:-mt-28 overflow-hiddenn h-[700px]'>
                <span className='absolute w-full h-[250px] sm:h-[350px] bg-secondarya block' />
                <Image
                    src={SiamHome}
                    alt="Home"
                    className='z-50 absolute h-[400px] sm:h-[500px] xl:h-[600px] 2xl:h-[700px] object-contain'
                />
            </div>
        </div>
    )
}


const ContentPage = () => {
    return (
        <Container>
            <Container.Inner>
                <div className='flex justify-center'>
                    <div className='w-[70%] flex flex-col items-center'>
                        <Typography
                            bpSizes='text-md'
                            style={{
                                type: "heading",
                                color: "primary",
                                className: "mb-4 uppercase"
                            }} >
                            Projeto
                        </Typography>
                        <div className='flex justify-center items-center'>
                            <span className='w-40 h-[2px] bg-secondaryAlt block flex-grow' />
                            <Typography
                                size='md'
                                style={{
                                    type: "heading",
                                    color: "secondaryAlt",
                                    className: "mx-4 uppercase"
                                }}
                            >
                                Siam Fight
                            </Typography>
                            <span className='w-40 h-[2px] bg-secondaryAlt block flex-grow' />
                        </div>
                    </div>

                </div>
            </Container.Inner>
        </Container>
    )
}

export function SingleProduct() {
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




