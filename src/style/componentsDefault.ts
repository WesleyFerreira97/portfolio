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
    align-self: flex-end;
    flex-direction: column;
    align-items: center;
    white-space: normal;
    padding: 3rem;
`;
/* background-color: ${colors.primary}; */

export const ProjectPreview = styled.div`
    width: 80%;
    order: 1;
    background-color: #E9A6A6;

    .project-preview__wrap {
        height: 150px;

        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
`;



export const PageText = styled.div`
    background-color: ${props => props.theme.colors.primary};

    .page-text {

        &__title {
            color: ${props => props.theme.colors.neutral.c100};
            ${typography.TitleXl}
        }

        &__subtitle {
            color: ${props => props.theme.colors.neutral.c300};
            ${typography.TitleMd}
        }

        &__paragraph, &__list {
            color: ${props => props.theme.colors.neutral.c100};
            ${typography.TextMd}
        }
    }
`;