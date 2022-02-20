import styled from "styled-components";

export const PageGallery = styled.div`
    height: 80%;
    width: 50%;
    display: none;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    @media (min-width: ${props => props.theme.breakpoints.lg}) {
        display: block;
    }
`;