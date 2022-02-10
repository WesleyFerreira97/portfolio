import { css } from 'styled-components';

const title = 'Montserrat, sans-serif';
const text = 'Raleway, sans-serif';

export const typography: any = {};

typography.TitleXl = css`
    font-family: ${title};
    font-size: 2.5rem;
    line-height: 125%;
    font-weight: 600;
    
    @media (min-width: ${props => props.theme.breakpoints.sm}) {
        font-size: 3rem;
    }
    
    @media (min-width: ${props => props.theme.breakpoints.xl}) {
        font-size: 3rem;
        letter-spacing: 0.1rem;
    }
    @media (min-width: ${props => props.theme.breakpoints.xxl}) {
        font-size: 3rem;
    }
`;

typography.TitleMd = css`
    font-family: ${title};
    font-size: 1.5rem;
    line-height: 125%;
    font-weight: 400;
    
    @media (min-width: ${props => props.theme.breakpoints.sm}) {
        font-size: 1.8rem;
    }
    
    @media (min-width: ${props => props.theme.breakpoints.lg}) {
        font-size: 2rem;
        letter-spacing: 0.1rem;
    }
`;

typography.TextMd = css`
    font-family: ${text};
    font-size: 1rem;
    line-height: 145%;
    font-weight: 400;
        
    @media (min-width: ${props => props.theme.breakpoints.lg}) {
        font-size: 1.2rem;
    }
`;

typography.TextSm = css`
    font-family: ${text};
    font-size: .9rem;
    line-height: 125%;
`;



