import styled from "styled-components";

interface PageProps {
    bg?: string;
}

export const PageContainer = styled.div<PageProps>`
    background: ${props => props.theme.colors.primary};
    padding: 1rem;
    white-space: normal;
    
    @media (min-width: ${props => props.theme.breakpoints.xl}) {
        padding: 2rem;
    }
`;

export const PageContainerInner = styled.div`
        height: 80%;
        display: flex;

    @media (min-width: ${props => props.theme.breakpoints.md}) {
            width: 90%;
    }
    @media (min-width: ${props => props.theme.breakpoints.xl}) {
            display: flex;
            margin: auto 0;
    }
`;