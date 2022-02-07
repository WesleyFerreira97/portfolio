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
    align-self: flex-end;
    flex-direction: column;
    align-items: center;
    white-space: normal;
    padding: 3rem;
    background-color: ${props => props.theme.colors.primary.c400};
`;

export const ProjectPreview = styled.div`
    width: 80%;
    order: 1;
    background-color: #E9A6A6;

    .project-preview__wrap {
        height: 80vh;
        width: 30%;

        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
`;



export const PageText = styled.div`
    /* background-color: ${props => props.theme.colors.primary.c800}; */

    .page-text {

        &__title {
            ${typography.TitleXl}
            color: ${props => props.theme.colors.neutral.c100};
        }
        
        &__subtitle {
            color: ${props => props.theme.colors.neutral.c300};
            margin: .5rem 0 2rem 0;
            ${typography.TitleMd}
        }
        
        &__paragraph, &__list {
            color: ${props => props.theme.colors.neutral.c100};
            ${typography.TextMd}
            margin: ${props => props.theme.spacing.sm} 0;
        }
    }
`;