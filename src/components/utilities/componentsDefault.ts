// SectionScroll style.ts
import styled from 'styled-components';

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
    // background-color: ${colors.primary};


export const ProjectPreview = styled.div`
    background-color: #E9A6A6;
    order: 1;
    width: 80%;

    .project-preview__wrap {
        height: 150px;

        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
`;
