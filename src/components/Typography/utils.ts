import { Breakpoints, FontTypes, MapBreakpointsToStrings, ThemeColors } from "./types"

const sizeByBreakpoint = (type: FontTypes, size: Partial<Breakpoints>) => {
    const sizesHeading: MapBreakpointsToStrings = {
        default: "text-2xl md:text-3xl",
        sm: "text-xl md:text-2xl",
        md: "text-2xl md:text-3xl",
        lg: "text-4xl md:text-5xl",
        xlg: "text-5xl text-6xl",
    }

    const sizesText: MapBreakpointsToStrings = {
        default: "text-base md:text-lg",
        sm: "text-sm md:text-base",
        md: "text-base md:text-lg",
        lg: "text-lg md:text-xl",
        xlg: "text-xl md:text-2xl",
    }

    return type == "heading" ? sizesHeading[size] : sizesText[size]
}

const colorVariants = (color: ThemeColors) => {
    const colors: { [key in ThemeColors]: string } = {
        primary: "text-primary",
        secondary: "text-secondary",
        secondaryAlt: "text-secondaryAlt",
        lightGray: "text-lightGray",
        gray: "text-gray",
        darkGray: "text-darkGray",
    }

    return colors[color]
}

export { sizeByBreakpoint, colorVariants }