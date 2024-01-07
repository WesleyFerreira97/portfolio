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
// bg-[#0C1127]

export function BelaGarota() {
    const carouselImages = [HomeImg, HomeHalfPage, HomeWidgets, HomeSingleProduct];

    return (
        <div className='w-full text-white flex flex-col items-center'>

            <div className='w-full h-[10vh]  bg-primary flex flex-col justify-center items-center'>
                <Typography
                    size='lg'
                    style={{
                        type: "heading",
                        className: "uppercase"
                    }}
                >
                    APP Administrativo E-commerce
                </Typography>
            </div>
            <div className='w-full flex flex-col items-center relative'>
                <span className='block absolute w-full h-[50%] bg-primary' />
                <div className='w-3/5 h-[800px] z-10  pt-20'>
                    <Image
                        src={SiamHome}
                        alt="Home"
                        className='object-contain w-full h-full' />
                </div>
            </div>
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