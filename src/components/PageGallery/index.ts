import styled from "styled-components";

export const PageGallery = styled.div`
    height: 100%;
    display: none;

    &::before {
        content: '';
        background-color: #0037df;
        /* background-color: ${props => props.theme.colors.tertiary}; */
        /* background: #D81E5B; */
        height: 100%;
        width: 20%;
        position: absolute;
        top: 0;
        right: 0;
        display: none;
    }

    .project-preview__wrap {
        height: 70%;
        width: 10%;
        position: relative;
        display: flex;
        align-items: center;
    }
    
    img {
        height: 85%;
        z-index: 2;
    }

    @media (min-width: ${props => props.theme.breakpoints.xl}) {
        display: flex;
        align-items: center;

        &::before {
            display: block;
        }

    }

    @media (min-width: ${props => props.theme.breakpoints.xxl}) {
        
        &::before {
            width: 25%;
        }
        
        .project-preview__wrap { 
            height: 80%;
        }

        img {
            height: 100%;
        }
    }
    `;