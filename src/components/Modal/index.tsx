import React, { ReactNode, useCallback, useEffect } from 'react'
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
    let isOpen = modalStatus ? S.openModal : S.closeModal;

    const toggleBodyOverflow = useCallback(() => {
        // Overlay Hidden when menu is open
        const getBodyElement = document.querySelector("body") as HTMLElement;
        const bodyOverflow = modalStatus ? "hidden" : "auto";

        const toggleOverlayTimeout = setTimeout(() => {
            getBodyElement.style.overflow = bodyOverflow;
        }, 600);

        return toggleOverlayTimeout;
    }, [modalStatus]);

    useEffect(() => {
        toggleBodyOverflow();

        return () => {
            clearTimeout(toggleBodyOverflow());
        }
    }, [toggleBodyOverflow])


    return (
        <div className={`${S.modalWrap} ${isOpen}`}>
            <span className={S.closeButton}>
                <CloseButton
                    onClick={props.handleClose}
                    size={32}
                    color='#fff'
                />
            </span>
            <Container>
                <Container.Inner size='full'>
                    {props.children}
                </Container.Inner>
            </Container>
        </div>
    )
}
