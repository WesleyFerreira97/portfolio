import styled from "styled-components";
import Bg from '../../assets/bg.jpg';
interface PageProps {
    bg?: string;
}

export const PageContainer = styled.div<PageProps>`
    height: 100%;
    width: 100%;
    background: ${props => props.theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PageContainerInner = styled.div`
    height: 100%;
    width: 100%;
    /* background-color: #16213E; */

    & > * {
        height: 100%;
    }
    
    @media (min-width: ${props => props.theme.breakpoints.xl}) {
        height: 80%;
        width: 90%;
        display: flex;
    }

    @media (min-width: ${props => props.theme.breakpoints.xxl}) {
        width: 80%;
    }
`;
