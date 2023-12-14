import React, { HTMLProps, ReactNode } from 'react'

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'li';

type breakpoints = "sm" | "md" | "lg" | "xlg";

type SizesProps = {
    size: "sm" | "md" | "lg";
    bpSizes?: never;
} | {
    size?: never;
    bpSizes: {
        [key in breakpoints]: string;
    }
}

type TypographyProps = {
    as?: TypographyVariant;
    type: "heading" | "text";
    children: React.ReactNode;
    color?: string;
} & SizesProps

const sizeByBreakpoint = (size: breakpoints) => {
    const sizes = {
        sm: "sm:text-xl md:text-2xl lg:text-3xl",
        md: "sm:text-2xl md:text-3xl lg:text-4xl",
        lg: "sm:text-4xl md:text-5xl lg:text-6xl",
        xlg: "sm:text-5xl md:text-6xl lg:text-7xl",
    }

    return sizes[size]
}

const mapSizeByBreakpoints = (bpSizes: any) => {
    const sizes = {
        sm: bpSizes.sm,
        md: bpSizes.md,
        lg: bpSizes.lg,
        xlg: bpSizes.xlg,
    }

    return sizes
}

export function Typography({ as: Tag = "p", ...props }: TypographyProps) {
    const responsiveText = props.size ?
        sizeByBreakpoint(props.size)
        : mapSizeByBreakpoints(props.bpSizes)

    return (
        <Tag className={`${responsiveText} ${props.color}`}>
            {props.children}
        </Tag>
    )
}



