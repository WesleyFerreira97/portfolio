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
        <div className='w-full flex justify-center items-center flex-col'>
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

            <ul className='flex [&>*]:px-4 [&>*]:py-3'>
                {Object.values(menuOptions).map((value, index) => (
                    <Typography
                        key={index}
                        as='li'
                        size='md'
                        style={{
                            type: "text",
                            color: "secondary",
                            weight: "bold",
                            className: "hover:text-primary cursor-pointer"
                        }}
                    >
                        {value.title}
                    </Typography>
                ))}
            </ul>
        </div>
    )
}
