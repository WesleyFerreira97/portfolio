import { css } from 'styled-components';

const title = 'Bebas Neue, sans-serif';
const text = 'Raleway, sans-serif';

export const typography: any = {};

typography.TitleXl = css`
    font-family: ${title};
    font-size: 4.5rem;
    line-height: 125%;
    letter-spacing: 0.1rem;
    font-weight: 400;

    @media (max-width: ${props => props.theme.breakpoints.md}) {
        font-size: 3.5rem;
    }
`;

typography.TitleMd = css`
    font-family: ${title};
    font-size: 1.8rem;
    line-height: 125%;
    letter-spacing: 0.1rem;
    font-weight: 400;
`;

typography.TextMd = css`
    font-family: ${text};
    font-size: 1.2rem;
    line-height: 125%;
    font-weight: 400;
`;

typography.TextSm = css`
    font-family: ${text};
    font-size: .9rem;
    line-height: 125%;
`;



