import styled from 'styled-components'
import { typography } from '../../style/theme/typography'

export const ButtonStyled = styled.button`
    color: #fff;
    
    a {
        height: 100%;
        width: 100%;
        padding: .6rem 1rem;
        border-radius: 6px;
        background-color: ${props => props.theme.colors.primaryAlt};
        color: inherit;
        ${typography.TextSm}
        text-decoration: none;
        font-weight: 500;
    }
    
    &:active {
        transform: scale(.98);
        background-color: ${props => props.theme.colors.tertiary};
    }
`