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
        default: "sm:text-base md:text-lg lg:text-xl",
        sm: "sm:text-sm md:text-base lg:text-lg",
        md: "sm:text-base md:text-lg lg:text-xl",
        lg: "sm:text-lg md:text-xl lg:text-2xl",
        xlg: "sm:text-xl md:text-2xl lg:text-3xl",
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