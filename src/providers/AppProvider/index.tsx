import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

export const AppProvider = ({ children }: any) => {
    return (
        <ThemeProvider theme={theme}>
            <div style={{ display: 'flex' }}>
                {children}
            </div>
        </ThemeProvider>
    )
}