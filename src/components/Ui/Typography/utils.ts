import {
    Breakpoints,
    FontTypes,
    MapBreakpointsToStrings,
    ThemeColors,
    LineHeightProps,
    WeightProps
} from "./types"

const sizeByBreakpoint = (type: FontTypes, size: Partial<Breakpoints>) => {
    const sizesHeading: MapBreakpointsToStrings = {
        sm: "text-xl md:text-2xl",
        md: "text-2xl md:text-3xl",
        lg: "text-4xl sm:text-5xl",
        xlg: "text-5xl text-6xl",
    }

    const sizesText: MapBreakpointsToStrings = {
        sm: "text-sm md:text-base",
        md: "text-base",
        lg: "text-lg md:text-2xl",
        // xlg: "text-xl md:text-2xl",
    }

    return type == "heading" ? sizesHeading[size] : sizesText[size]
}

const colorVariants = (color: ThemeColors = "darkGray") => {
    const colors: { [key in ThemeColors]: string } = {
        primary: "text-primary",
        secondary: "text-secondary",
        secondaryAlt: "text-secondaryAlt",
        lightGray: "text-lightGray",
        gray: "text-gray",
        darkGray: "text-darkGray",
        white: "text-white",
    }

    return colors[color]
}

const weightVariants = (weight: WeightProps = "semiBold") => {
    const weights: { [key in WeightProps]: string } = {
        light: "font-light",
        normal: "font-normal",
        semiBold: "font-semibold",
        bold: "font-bold",
        extraBold: "font-extrabold",
        black: "font-black",
    }

    return weights[weight]
}

const lineHeightVariants = (lineHeight: LineHeightProps = "normal") => {
    const lineHeights: { [key in LineHeightProps]: string } = {
        none: "leading-none",
        tight: "leading-tight",
        snug: "leading-snug",
        normal: "leading-normal",
        relaxed: "leading-relaxed",
        loose: "leading-loose",
    }

    return lineHeights[lineHeight]
}

export {
    sizeByBreakpoint,
    colorVariants,
    weightVariants,
    lineHeightVariants
}