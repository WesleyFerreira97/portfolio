import {css} from 'styled-components';

interface TypographyProps {
    TitleDisplay?: object;
    TextNormal?: object;
}

export const typography: TypographyProps = {}

const Title = css`
    font-family: 'Roboto', sans-serif;
`

const Text = css`
    font-family: 'Roboto', sans-serif;
`;

typography.TitleDisplay = css`
    ${Title}
    font-size: 3rem;
    font-weight: 800;
    line-height: 125%;
`;

typography.TextNormal = css`
    ${Text}
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 125%;
`;


