import styled from 'styled-components'
import { typography } from '../../style/theme/typography'
 
export const NavigationWrap = styled.div`
    height: 100vh;
    width: 50px;
    background: ${props => props.theme.colors.primaryAlt};
    box-shadow: 0 0 10px #000;
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    padding: 1rem 0;

    .portfolio-photo {
        height: 2rem;
        width: 2rem; 
        margin: 2rem auto; 
        
        img {
            border-radius: 100%;
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }

    /* @media (min-width: ${props => props.theme.breakpoints.xl}) {
        width: 350px;

        .portfolio-photo {
            height: 200px;
            width: 200px;
        }
    } */
`

export const Menu = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    .menu-item {
        padding: 1rem;
        display: flex;
        align-items: center;

        &:hover, &:active {		
            background: ${props => props.theme.colors.primary};
        }

        &:active {
            background: ${props => props.theme.colors.primary};
        }
        
        &__title {
            display: none;
            margin-left: 1rem;
            color: ${props => props.theme.colors.neutral};
            ${typography.TextSm};
        }
        
        svg {
            fill: ${props => props.theme.colors.neutral};
            font-size: 1.5rem;
        }
    }

    /* @media (min-width: ${props => props.theme.breakpoints.xl}) {
        .menu-item {
            width: 100%;

            &__title {	
                display: block;
            }
        }
    } */
`

export const OpenMenu = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  color: ${props => props.theme.colors.neutral};
`
