import React from 'react'
import { Typography } from '../Typography'

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
        <div className='w-full flex text-center justify-center items-center flex-col'>
            <Typography
                as='h3'
                size='lg'
                style={{
                    type: "heading",
                    color: "secondary",
                    weight: "bold",
                    className: 'mb-9'
                }}>
                {headerTitle}
            </Typography>

            <ul className='flex [&>*]:px-3 [&>*]:py-2 break-normal'>
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
    )
}
