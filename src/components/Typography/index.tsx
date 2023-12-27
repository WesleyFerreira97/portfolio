import React from 'react'
import type { TypographyProps } from './types'
import { colorVariants, lineHeightVariants, sizeByBreakpoint, weightVariants } from './utils'

export function Typography({ as: Tag = "p", style, ...props }: TypographyProps) {

    const responsiveSizes = props.size
        ? sizeByBreakpoint(style.type, props.size)
        : props.bpSizes

    const propsDefault = {
        type: style.type === "heading" ? "font-primary" : "font-secondary",
        color: colorVariants(style.color),
        fontWeight: weightVariants(style.weight),
        lineHeight: lineHeightVariants(style.lineHeight),
        className: "",
    }

    const finalStyle = Object.values(propsDefault).join(" ");

    return (
        <Tag className={`${responsiveSizes} ${finalStyle}`}>
            {props.children}
        </Tag>
    )
}