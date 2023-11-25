import React, { ReactNode } from 'react'

type ModalProps = {
    children?: ReactNode;
    toggleModal: boolean;
}

export function Modal(props: ModalProps) {


    return (
        <div>Modal State {(props.toggleModal).toString()}</div>
    )
}
