// SectionScroll style.ts
import styled from 'styled-components';
import { typography } from './theme/typography';

export const AppWrap = styled.div`
    display: flex;
`;

interface PageProps {
    bg?: string;
}

export const PageContainer = styled.div<PageProps>`
    height: 100%;
    white-space: normal;
    background: ${props => props.theme.colors.primary.c400};
    
    .page-container__wrap {
        height: 100%;
        width: 80%;
        align-self: flex-end;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        /* background: crimson; */
    }

    @media (min-width: ${props => props.theme.breakpoints.xl}) {
        .page-container__wrap {
            height: 80%;
            width: 95%;
            flex-direction: row;
            margin: auto 0;
        }
    }
`;

export const ProjectPreview = styled.div`
    height: 100%;
    /* width: 50%; */
    order: 1;
    /* background-color: #E9A6A6; */

    @media (min-width: ${props => props.theme.breakpoints.xl}) {
        order: 0;
    }

    .project-preview__wrap {
        width: 100%;
        height: 100%;

        img {
            height: 100%;
            width: 100%;
            object-fit: contain;
        }
    }
    
`;

export const PageText = styled.div`
    height: 100%;
    /* background-color: ${props => props.theme.colors.primary.c800}; */
    /* padding-left: 4rem; */
    

    .page-text {

        &__title {
            ${typography.TitleXl}
            color: ${props => props.theme.colors.neutral.c100};
        }
        
        &__subtitle {
            color: ${props => props.theme.colors.neutral.c900};
            margin: .5rem 0 2rem 0;
            ${typography.TitleMd}
        }
        
        &__paragraph, &__list {
            color: ${props => props.theme.colors.neutral.c100};
            ${typography.TextMd}
            margin: ${props => props.theme.spacing.sm} 0;

            li {
                margin: .5rem 0;
            }
        }
    }

    @media (min-width: ${props => props.theme.breakpoints.xl}) {
        width: 40%;
        padding-left: 4rem;
    }
`;