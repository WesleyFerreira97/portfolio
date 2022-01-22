import styled from 'styled-components';

interface PageProps {
    bg?: string;
}

export const PageContainer = styled.div<PageProps>`
    flex-direction: column;
    align-items: center;
    background: #1F1D36;
    padding: 3rem;
    color: #fff;
    white-space: normal;
    align-self: flex-end;
    border: 2px solid orange;
    background-color: ${props => props.bg};
`;

PageContainer.defaultProps = {
    bg: '#32024e',
}


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

export const AboutProject = styled.div`
    background: #000;
    color: #fff;
`;