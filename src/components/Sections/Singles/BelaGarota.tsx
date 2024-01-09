import React from 'react'
import HomeImg from "../../../../public/images/bela_garota_images/home_main_content.png"
import HomeHalfPage from "../../../../public/images/bela_garota_images/home_halfpage.png"
import HomeWidgets from "../../../../public/images/bela_garota_images/home_widgets.png"
import HomeSingleProduct from "../../../../public/images/bela_garota_images/single_product.png"
import SiamHome from "../../../../public/images/bela_garota_images/SiamMockup.png"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules';
import Image, { StaticImageData } from 'next/image'
import { Typography } from '@/components/Typography'

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

export function BelaGarota() {
    const carouselImages = [HomeImg, HomeHalfPage, HomeWidgets, HomeSingleProduct];

    return (
        <div className='relative flex flex-col'>
            <div className='h-[40vh] bg-secondary flex justify-center items-center relative'>
                <span className='absolute z-30 h-[calc(100%+70vh)] bg-secondaryAlt w-[4px] left-28 hidden lg:block' />
                <span className='absolute z-30 h-[2px] w-full bg-secondaryAlt -bottom-52 hidden lg:block' />
                <div className='text-center flex flex-col lg:flex-row gap-3'>
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
            </div>
            <div className='relative w-full flex justify-center -mt-24 overflow-visible'>
                <span className='absolute w-full h-[250px] sm:h-[350px] bg-secondary block' />
                <Image
                    src={SiamHome}
                    alt="Home"
                    className='z-50 absolute h-[400px] sm:h-[500px] xl:h-[600px] 2xl:h-[700px] object-contain'
                />
            </div>
        </div>
    )
}


{/* <h1 className='font-primary text-white text-6xl uppercase'>
    App Administrativo
    <span className='font-primary text-secondaryAlt ml-3'>
        React Native
    </span>
</h1> */}

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