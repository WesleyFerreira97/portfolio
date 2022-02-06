import styled from "styled-components";

interface ContainerProps {
    bg: string;
}

interface RowProps {
    width: string;
}

export let Container = styled.div<ContainerProps>`
    height: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    background: ${props => props.bg};
    padding: 5rem 0;
`;

Container.defaultProps = {
    bg: '#0F1021',
}

export const Row = styled.div<RowProps>`
    width: ${props => props.width};
    display: flex;
    flex-wrap: wrap;
    position: relative;
    
    @media (max-width: ${props => props.theme.breakpoints.md}) {
        width: 95%;
    }
`;

Row.defaultProps = {
    width: "90%"
}
