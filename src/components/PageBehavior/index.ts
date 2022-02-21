import styled from "styled-components";
import Bg from '../../assets/bg.jpg';
interface PageProps {
    bg?: string;
}

export const PageContainer = styled.div<PageProps>`
    height: 100%;
    width: 100%;
    background: ${props => props.theme.colors.primary};
    background-image: url(${Bg});
    background-size: cover;
`;

export const PageContainerInner = styled.div`
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,0.5);

    & > * {
        height: 100%;
    }
    
    @media (min-width: ${props => props.theme.breakpoints.xl}) {
        display: flex;
        padding: 4rem;
    }
`;
