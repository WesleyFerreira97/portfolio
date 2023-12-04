import React, { ReactNode } from 'react'
import S from "./styles.module.css"
import { X } from '@phosphor-icons/react';
import { CloseButton } from '../CloseButton';
import { Container } from '../Layout/Container';

type ModalProps = {
    children?: ReactNode;
    modalStatus: boolean;
    handleClose: () => void;
}

export function Modal({ modalStatus, ...props }: ModalProps) {
    let toggleModal = modalStatus ? S.openModal : S.closeModal;

    return (
        <div className={`${S.modalWrap} ${toggleModal}`}>
            <span className={S.closeButton}>
                <CloseButton
                    onClick={props.handleClose}
                    size={32}
                    color='#fff'
                />
            </span>
            <Container>
                <Container.Inner>
                    {props.children}
                </Container.Inner>
            </Container>
        </div>
    )
}
