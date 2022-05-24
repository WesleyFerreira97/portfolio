import styled from "styled-components";
import Bg from "../../assets/bg.jpg";

interface PageProps {
    bg?: string;
}

export const PageContainer = styled.div<PageProps>`
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.colors.primary};
`;

export const PageContainerInner = styled.div`
    height: 100%;
    width: 100%;

    & > * {
        height: 100%;
    }
    
    @media (min-width: ${props => props.theme.breakpoints.xl}) {
        height: 80%;
        width: 90%;
        display: flex;
        align-items: center;
    }
`;
