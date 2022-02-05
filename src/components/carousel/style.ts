import styled from 'styled-components'

export const Section = styled.div`
    height: 100vh;
    overflow: hidden;

    & > * {
        height: 100%;
        width: 100%;
    }
`;

export const SectionWrap = styled.div`
    height: 100%;
    width: 100%;
    white-space: nowrap;
    transition: transform 0.5s;

   & > * {
        height: 100%;
        width: 100%;
        display: inline-flex;
   } 
`;

export const Navigation = styled.div`
    position: absolute;
    z-index: 10;
    top: 0;
`;
