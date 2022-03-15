import React from 'react'
import { ButtonStyled } from './style'

interface ButtonProps {
    children: string;
    link: string
}

export function Button({ children, link, ...rest}: ButtonProps) {
	return (
		<ButtonStyled>
			<a 
				href={link} 
				target="_blank" 
				rel="noopener noreferrer" 
				{...rest}
			>
				{children}
			</a>
		</ButtonStyled>
	)
}
