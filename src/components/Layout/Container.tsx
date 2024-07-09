import React, { PropsWithChildren } from 'react'

type ContainerSize = "full" | "boxed"
type ContainerInnerProps = {
    size?: ContainerSize
    gap?: GapBreakpoints
}

type ContainerProps = {

}

type GapBreakpoints = "noGap" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl"
type ContainerGapProps = { [key in GapBreakpoints]: string }

const gapSizes: ContainerGapProps = {
    noGap: "",
    xs: "mb-12",
    sm: "mb-16",
    md: "mb-20",
    lg: "mb-24",
    xl: "mb-28",
    xxl: "mb-24 lg:mb-36",
}

const Inner = ({ children, size, gap }: PropsWithChildren<ContainerInnerProps>) => {
    const innerContainerStyles: { [key in ContainerSize]: string } = {
        full: "w-full",
        boxed: "w-full max-w-[95%] md:max-w-[90%] lg:max-w-[80%] xl:max-w-[75%] relative",
    }

    const containerStyle = size === "full" ? innerContainerStyles.full : innerContainerStyles.boxed;
    const containerGap = gap ? gapSizes[gap] : gapSizes["xxl"];

    return (
        <div className={`${containerStyle} ${containerGap}`}>
            {children}
        </div>
    )
}

function Container({ children }: PropsWithChildren<ContainerProps>) {
    return (
        <div className="w-full flex justify-center flex-col items-center relative bg-[#ddd]">
            {children}
        </div>
    )
}

Container.Inner = Inner;

export { Container }