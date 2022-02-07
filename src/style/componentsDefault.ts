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
    justify-content: center;
    white-space: normal;
    background: ${props => props.theme.colors.primary.c400};
    /* background: rgb(44,4,89);
    background: linear-gradient(90deg, rgba(44,4,89,1) 0%, rgba(58,8,114,1) 50%, rgba(36,3,74,1) 100%); */
    
    .page-container__wrap {
        height: 100%;
        width: 100%;
        align-self: flex-end;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
    }

    @media (min-width: ${props => props.theme.breakpoints.xl}) {
        .page-container__wrap {
            width: 80%;
            flex-direction: row;
        }
    }
`;

export const ProjectPreview = styled.div`
    height: 80vh;
    width: 50%;
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
        padding-left: 4rem;
    }
`;