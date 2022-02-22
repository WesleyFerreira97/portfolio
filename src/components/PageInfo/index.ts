import styled from "styled-components";
import { typography } from "../../style/theme/typography";

export const PageInfo = styled.div`
    flex: 2 1 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1.25rem;

    @media (min-width: ${props => props.theme.breakpoints.xl}) {
        padding: 2.5rem;
    }

    .page-info {
        
        &__title {
            ${typography.TitleXl}
            color: ${props => props.theme.colors.neutral};
            text-transform: uppercase;
        }

        &__subtitle {
            ${typography.TitleMd}
            color: ${props => props.theme.colors.neutral};
            margin: 1rem 0;
        }

        &__paragraph, &__list li{
            ${typography.TextMd}
            color: ${props => props.theme.colors.neutral};
            margin: .4rem 0;
        }

        &__buttons { 
            margin: 1rem 0;
        }
    }
`;