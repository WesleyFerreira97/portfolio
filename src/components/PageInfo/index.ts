import styled from "styled-components";
import { typography } from "../../style/theme/typography";

export const PageInfo = styled.div`
    background-color: ${props => props.theme.colors.primaryAlt};

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