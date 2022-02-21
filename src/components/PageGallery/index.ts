import styled from "styled-components";

export const PageGallery = styled.div`
    height: 100%;
    display: none;
    overflow: hidden;

    img {
        height: 100%;
    }

    .project-preview__wrap {
        height: 100%;
    }

    @media (min-width: ${props => props.theme.breakpoints.xl}) {
        display: block;
    }
`;