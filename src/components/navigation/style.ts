import styled from "styled-components";

export const NavigationWrap = styled.div`
    height: 100vh;
    width: 40px;
    background: #420884;
    box-shadow: 0 0 10px #000;

    @media (min-width: ${props => props.theme.breakpoints.xl}) {
        width: 350px;
    }
`;