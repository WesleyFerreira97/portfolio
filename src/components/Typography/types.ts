type Breakpoints = "default" | "sm" | "md" | "lg" | "xlg";
type FontTypes = "heading" | "text";
type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'li';
type MapBreakpointsToStrings = {
    [key in Breakpoints]?: string;
}


// Solução Temporária para o funcionamento do auto complete 
type ThemeColors = "primary" | "secondary" | "secondaryAlt" | "lightGray" | "gray" | "darkGray" | string & {}

type SizesProps = {
    size: Breakpoints;
    bpSizes?: never;
} | {
    size?: never;
    bpSizes: string;
}

    ;

type TypographyProps = {
    as?: TypographyVariant;
    type: FontTypes;
    children: React.ReactNode;
    color?: ThemeColors;
} & SizesProps


export type { TypographyProps, TypographyVariant, FontTypes, Breakpoints, MapBreakpointsToStrings, ThemeColors }