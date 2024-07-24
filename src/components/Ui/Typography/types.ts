type Breakpoints = "sm" | "md" | "lg" | "xlg";
type FontTypes = "heading" | "text";
type TypographyVariant = 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'li';
type WeightProps = "light" | "normal" | "semiBold" | "bold" | "extraBold" | "black"
type LineHeightProps = "none" | "tight" | "snug" | "normal" | "relaxed" | "loose"

type MapBreakpointsToStrings = {
    [key in Breakpoints]?: string;
}

// Solução Temporária para o funcionamento do auto complete
type ThemeColors = "primary" | "secondary" | "secondaryAlt" | "lightGray" | "gray" | "darkGray" | "white" | string & {}

type SizesProps = {
    size: Breakpoints;
    bpSizes?: never;
} | {
    size?: never;
    bpSizes: string;
};


type TypographyProps = {
    as?: TypographyVariant;
    children: React.ReactNode;
    style: {
        type: FontTypes;
        color?: ThemeColors;
        weight?: WeightProps;
        lineHeight?: LineHeightProps;
        className?: string;
    },
    paragraph?: {
        // coming soon
    };
} & SizesProps


export type {
    TypographyProps,
    TypographyVariant,
    FontTypes,
    Breakpoints,
    MapBreakpointsToStrings,
    ThemeColors,
    LineHeightProps,
    WeightProps
}