import React from 'react'
import type { TypographyProps } from './types'
import { colorVariants, sizeByBreakpoint } from './utils'

export function Typography({ as: Tag = "p", ...props }: TypographyProps) {

    const responsiveSizes = props.size
        ? sizeByBreakpoint(props.type, props.size)
        : props.bpSizes

    let color = props.color
        ? colorVariants(props.color)
        : "text-white"

    const fontType = props.type == "heading"
        ? "font-primary"
        : "font-secondary"

    return (
        <Tag className={`${responsiveSizes} ${color} ${fontType}`}>
            {props.children}
        </Tag>
    )
}

