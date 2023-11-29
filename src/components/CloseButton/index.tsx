import { X } from '@phosphor-icons/react';
import React from 'react';
import S from "./style.module.css"

type CloseButtonProps = {
    onClick: () => void;
    size?: number;
    color?: string;
}

export function CloseButton({ size = 24, color = "#fff", ...props }: CloseButtonProps) {
    return (
        <span
            className={S.closeButton}
            onClick={props.onClick}
        >
            <X size={size} color={color} />
        </span>
    )
}
