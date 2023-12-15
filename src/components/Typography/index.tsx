import { log } from 'console';
import React, { HTMLProps, ReactNode } from 'react'

type Breakpoints = "default" | "sm" | "md" | "lg" | "xlg";
type FontTypes = "heading" | "text";
type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'li';
type MapBreakpointsToStrings = {
    [key in Breakpoints]?: string;
}

type SizesProps = {
    size: Breakpoints;
    bpSizes?: never;
} | {
    size?: never;
    bpSizes: string;
}

type TypographyProps = {
    as?: TypographyVariant;
    type: FontTypes;
    children: React.ReactNode;
    color?: string;
} & SizesProps

const sizeByBreakpoint = (type: FontTypes, size: Partial<Breakpoints>) => {
    const sizesHeading: MapBreakpointsToStrings = {
        default: "sm:text-2xl md:text-3xl lg:text-4xl",
        sm: "sm:text-xl md:text-2xl lg:text-3xl",
        md: "sm:text-2xl md:text-3xl lg:text-4xl",
        lg: "sm:text-4xl md:text-5xl lg:text-6xl",
        xlg: "sm:text-5xl md:text-6xl lg:text-7xl",
    }

    const sizesText: MapBreakpointsToStrings = {
        default: "sm:text-base md:text-lg lg:text-xl",
        sm: "sm:text-sm md:text-base lg:text-lg",
        md: "sm:text-base md:text-lg lg:text-xl",
        lg: "sm:text-lg md:text-xl lg:text-2xl",
        xlg: "sm:text-xl md:text-2xl lg:text-3xl",
    }

    return type == "heading" ? sizesHeading[size] : sizesText[size]
}

export function Typography({ as: Tag = "p", ...props }: TypographyProps) {

    const responsiveSizes = props.size
        ? sizeByBreakpoint(props.type, props.size)
        : props.bpSizes

    const color = props.color ? props.color : "text-white"

    const fontType = props.type == "heading"
        ? "font-secondary"
        : "font-primary"

    return (
        <Tag className={`${responsiveSizes} ${color} ${fontType}`}>
            {props.children}
        </Tag>
    )
}

