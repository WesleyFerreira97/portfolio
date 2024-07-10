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
                <div className='w-full flex text-center justify-center items-center flex-col mb-4'>
                    <Typography
                        as='h3'
                        size='lg'
                        style={{
                            type: "heading",
                            color: "secondary",
                            weight: "bold",
                            className: 'mb-6'
                        }}>
                        {headerTitle}
                    </Typography>

                    <ul className='flex [&>*]:px-3 [&>*]:pt-2 break-normal'>
                        {Object.values(menuOptions).map((value, index) => (
                            <Typography
                                key={index}
                                as='li'
                                // size='md'
                                bpSizes="text-sm md:text-md lg:text-lg"
                                style={{
                                    type: "text",
                                    color: "secondary",
                                    weight: "bold",
                                    className: "hover:text-primary cursor-pointer whitespace-nowrap"
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
