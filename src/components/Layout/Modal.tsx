import React, { ReactNode, useCallback, useEffect } from 'react'
import { X } from '@phosphor-icons/react';
import { CloseButton } from '../Ui/CloseButton';
import { Container } from './Container';

type ModalProps = {
    children?: ReactNode;
    modalStatus: boolean;
    handleClose: () => void;
}

export function Modal({ modalStatus, ...props }: ModalProps) {
    let isOpen = modalStatus
        ? "transform translate-y-0 transition duration-[800ms] ease"
        : "transform translate-y-[105%] transition duration-[800ms] ease";

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
        <div className={`h-screen w-screen fixed top-0 left-0 z-[99999] min-h-full overflow-y-scroll overflow-x-hidden bg-[#e1e1ec] ${isOpen}`}>
            <span className="h-[70px] w-full flex items-center bg-secondary justify-center">
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
