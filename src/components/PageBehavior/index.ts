import styled from "styled-components";

interface PageProps {
    bg?: string;
}

export const PageContainer = styled.div<PageProps>`
    background: ${props => props.theme.colors.primary};
    height: 100%;
    width: 100%;
    /* overflow: hidden; */
    
    @media (min-width: ${props => props.theme.breakpoints.xl}) {
    }
`;

export const PageContainerInner = styled.div`
        height: 100%;
        display: none;

    @media (min-width: ${props => props.theme.breakpoints.md}) {
            width: 90%;
    }
    @media (min-width: ${props => props.theme.breakpoints.xl}) {
            display: flex;
            margin: auto 0;
    }
`;