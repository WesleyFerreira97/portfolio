import styled from "styled-components";
import { typography } from "../../style/theme/typography";
export const NavigationWrap = styled.div`
    height: 100vh;
    width: 50px;
    background: #420884;
    box-shadow: 0 0 10px #000;

    @media (min-width: ${props => props.theme.breakpoints.xl}) {
        width: 350px;
    }
`;


export const Menu = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    .menu-item {
        padding: 1rem;
        display: flex;
        align-items: center;

        &:hover {	
            background: ${props => props.theme.colors.primary.c500};
        }
        
        &__title {
            display: none;
            margin-left: 1rem;
            color: ${props => props.theme.colors.neutral.c100};
            ${typography.TextSm};
        }
        
        svg {
            fill: ${props => props.theme.colors.neutral.c000};
            font-size: 1.5rem;
        }
    }

    @media (min-width: ${props => props.theme.breakpoints.xl}) {
        .menu-item {
            width: 100%;

            &__title {	
                display: block;
            }
        }
    }
`;