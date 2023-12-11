import React, { HTMLProps, ReactNode } from 'react'

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

interface TypographyProps {
    children: ReactNode;
    as?: TypographyVariant;
}

export function Typography({ as: Tag = "p" }: TypographyProps) {
    return (
        <Tag>Typography</Tag>
    )
}



