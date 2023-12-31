import React, { PropsWithChildren } from 'react'
import S from "./styles.module.css"

type ContainerInnerProps = {

}

type ContainerProps = {

}

type GapBreakpoints = "xs" | "sm" | "md" | "lg" | "xl" | "xxl"
type ContainerGapProps = { [key in GapBreakpoints]: string }

const containerGap: ContainerGapProps = {
    xs: "mb-12",
    sm: "mb-16",
    md: "mb-20",
    lg: "mb-24",
    xl: "mb-28",
    xxl: "mb-32",
}

const Inner = ({ children }: PropsWithChildren<ContainerProps>) => {
    return (
        <div className={`w-full max-w-[95%] md:max-w-[90%] lg:max-w-[80%] xl:max-w-[75%] ${containerGap["lg"]}`}>
            {children}
        </div>
    )
}

function Container({ children }: PropsWithChildren<ContainerProps>) {
    return (
        <div className="w-full flex justify-center flex-col items-center">
            {children}
        </div>
    )
}


Container.Inner = Inner;

export { Container }