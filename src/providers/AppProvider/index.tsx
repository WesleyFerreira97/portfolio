import React from 'react';
import { ThemeProvider } from 'styled-components';
import { AppWrap } from '../../style/componentsDefault';
import { theme } from './theme';

export const AppProvider = ({ children }: any) => {
    return (
        <ThemeProvider theme={theme}>
            <AppWrap>
                {children}
            </AppWrap>
        </ThemeProvider>
    )
}