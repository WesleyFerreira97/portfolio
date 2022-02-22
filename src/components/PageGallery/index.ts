import styled from "styled-components";

export const PageGallery = styled.div`
    height: 100%;
    display: none;
    order: 2;

    &::before {
        content: '';
        background-color: #0037df;
        height: 100%;
        width: 29%;
        position: absolute;
        top: 0;
        right: 0;
    }

    .project-preview__wrap {
        height: 100%;
        position: relative;
        display: flex;
        align-items: center;

    }
    
    img {
        height: 95%;
        z-index: 2;
        margin-left: 1rem;
    }

    @media (min-width: ${props => props.theme.breakpoints.xl}) {
        display: block;
    }
`;