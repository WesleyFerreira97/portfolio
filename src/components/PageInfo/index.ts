import styled from "styled-components";
import { typography } from "../../style/theme/typography";

export const PageInfo = styled.div`
    flex: 2 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    padding: 1.25rem;

    .page-info {
        
        &__title {
            ${typography.TitleXl}
            color: ${props => props.theme.colors.neutral};
        }

        &__subtitle {
            ${typography.TitleMd}
            color: ${props => props.theme.colors.neutral};
        }

        &__paragraph, &__list {
            ${typography.TextMd}
            color: ${props => props.theme.colors.neutral};
        }
    }
`;