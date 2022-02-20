import styled from "styled-components";
import Bg from '../../assets/bg.jpg';
interface PageProps {
    bg?: string;
}

export const PageContainer = styled.div<PageProps>`
    background: ${props => props.theme.colors.primary};
    background-image: url(${Bg});
    background-size: cover;
    height: 100%;
    width: 100%;
    /* overflow: hidden; */

    
    @media (min-width: ${props => props.theme.breakpoints.xl}) {
    }
`;

export const PageContainerInner = styled.div`
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,0.7);
    padding: 2rem;

    & > * {
        height: 100%;
    }
    
    @media (min-width: ${props => props.theme.breakpoints.xl}) {
        display: flex;
    }
`;
