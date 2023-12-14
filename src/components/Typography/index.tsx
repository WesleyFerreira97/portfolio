import React, { HTMLProps, ReactNode } from 'react'

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'li';

type SizesProps = {
    size: "sm" | "md" | "lg";
    bpSizes?: never;
} | {
    size?: never;
    bpSizes: {
        sm: string;
        md: string;
        lg: string;
    }

}

type TypographyProps = {
    as?: TypographyVariant;
    type: "heading" | "text";
    children: React.ReactNode;
} & SizesProps

export function Typography({ as: Tag = "p" }: TypographyProps) {
    return (
        <Tag>Typography</Tag>
    )
}



