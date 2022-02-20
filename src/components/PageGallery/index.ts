import styled from "styled-components";

export const PageGallery = styled.div`
    background-color: ${props => props.theme.colors.secondaryAlt};
    display: none;
    height: 80%;
    width: 50%;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    @media (min-width: ${props => props.theme.breakpoints.md}) {
        display: block;
    }
`;