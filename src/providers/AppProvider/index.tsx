import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../style/theme'

export const AppProvider = ({ children }: any) => {
	return (
		<ThemeProvider theme={theme}>
			<div style={{ display: 'flex', position: 'relative' }}>
				{children}
			</div>
		</ThemeProvider>
	)
}