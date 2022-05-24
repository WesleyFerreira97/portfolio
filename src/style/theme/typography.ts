import { css } from "styled-components";

const title = "Varela, sans-serif";
const text = "Raleway, sans-serif";

export const typography: any = {};

typography.TitleXl = css`
    font-family: ${title};
    font-size: 2rem;
    line-height: 125%;
    font-weight: 900;

    @media (min-width: ${props => props.theme.breakpoints.xl}) {
        font-size: 3rem;
    }

    @media (min-width: ${props => props.theme.breakpoints.xxl}) {
        font-size: 3.5rem;
    }
`;

typography.TitleMd = css`
    font-family: ${title};
    font-size: 1rem;
    line-height: 125%;
    font-weight: 400;
    
    @media (min-width: ${props => props.theme.breakpoints.sm}) {
        font-size: 1.8rem;
    }
    
    @media (min-width: ${props => props.theme.breakpoints.xxl}) {
        font-size: 2rem;
        letter-spacing: 0.1rem;
    }
`;

typography.TextMd = css`
    font-family: ${text};
    font-size: 1rem;
    line-height: 135%;
    font-weight: 300;
        
    @media (min-width: ${props => props.theme.breakpoints.lg}) {
        font-size: 1.2rem;
        font-weight: 200;
    }
`;

typography.TextSm = css`
    font-family: ${text};
    font-size: .9rem;
    line-height: 125%;
`;



