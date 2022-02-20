import styled from "styled-components";

export const PageGallery = styled.div`
    height: 100%;
    display: none;
    overflow: hidden;
    display: flex;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    .project-preview__wrap {
        height: 100%;
        flex: 2 1 auto;
    }

    @media (min-width: ${props => props.theme.breakpoints.xl}) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1  1 auto;
    }
`;