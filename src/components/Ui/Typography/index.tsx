import React from 'react'
import type { TypographyProps } from './types'
import { colorVariants, lineHeightVariants, sizeByBreakpoint, weightVariants } from './utils'

const Paragraph = ({ children, ...props }: any) => {
    return (
        <p
            className='my-5'
            style={{ fontFamily: "inherit" }}
        >
            {children}
        </p>
    )
}

function Typography({ as: Tag = "p", style, ...props }: TypographyProps) {

    const responsiveSizes = props.size
        ? sizeByBreakpoint(style.type, props.size)
        : props.bpSizes

    const textType = {
        heading: "font-primary",
        text: "font-secondary"
    }

    const propsDefault = {
        type: textType[style.type],
        color: colorVariants(style.color),
        fontWeight: weightVariants(style.weight),
        lineHeight: lineHeightVariants(style.lineHeight),
        className: style.className || "",
    }

    const finalStyle = Object.values(propsDefault).join(" ");

    return (
        <Tag className={`${finalStyle} ${responsiveSizes} `}>
            {props.children}
        </Tag>
    )
}

Typography.Paragraph = Paragraph;

export { Typography }