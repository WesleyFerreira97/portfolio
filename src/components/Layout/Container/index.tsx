import React from 'react'
import S from "./styles.module.css"

type ContainerProps = {
    children?: React.ReactNode;
}

const Inner = ({ children }: ContainerProps) => {
    return (
        <div className={S.containerInner}>
            {children}
        </div>
    )
}

function Container({ children }: ContainerProps) {
    return (
        <div className={S.container}>
            {children}
        </div>
    )
}


Container.Inner = Inner;

export { Container }