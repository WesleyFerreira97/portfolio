import React from 'react'
import { Typography } from '../Ui/Typography'
import { Container } from '../Layout/Container';

type SectionHeaderProps = {
    headerTitle: string;
    menuOptions: {
        [key: string]: {
            title: string;
            link: string;
        }
    }
}

export function SectionHeader({ headerTitle, menuOptions }: SectionHeaderProps) {
    return (
        <Container>
            <Container.Inner gap='noGap'>
                <div className='w-full flex justify-center items-center flex-col text-center mb-4'>
                    <Typography
                        as='h3'
                        bpSizes='text-[1.6rem] md:text-[2.3rem] 2xl:text-[3rem]'
                        style={{
                            type: "heading",
                            color: "secondary",
                            weight: "extraBold",
                            className: 'mb-6'
                        }}>
                        {headerTitle}
                    </Typography>

                    <ul className='flex flex-wrap justify-center [&>*]:px-3 [&>*]:pt-2 break-normal'>
                        {Object.values(menuOptions).map((value, index) => (
                            <Typography
                                key={index}
                                as='li'
                                bpSizes='text-[0.8rem] md:text-[1rem] 2xl:text-[1.125rem]'
                                style={{
                                    type: "text",
                                    color: "secondary",
                                    weight: "semiBold",
                                    className: "flex flex-wrap hover:text-primary cursor-pointer whitespace-nowrap"
                                }}
                            >
                                {value.title}
                            </Typography>
                        ))}
                    </ul>
                </div>
            </Container.Inner>
        </Container>
    )
}
