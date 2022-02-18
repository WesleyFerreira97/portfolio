// SectionScroll style.ts
import styled from "styled-components";
import { typography } from "./theme/typography";

export const AppWrap = styled.div`display: flex;`;

export const ProjectPreview = styled.div`
  display: none;

  .project-preview__wrap {
    width: 100%;
    height: 100%;

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: block;
    height: 100%;
    flex: 3 0 auto;
  }
`;

export const PageText = styled.div`
  flex: 1 10 auto;

  .page-text {
    &__title {
      ${typography.TitleXl} color: ${props => props.theme.colors.neutral};
    }

    &__subtitle {
      color: ${props => props.theme.colors.neutral};
      margin: .5rem 0 2rem 0;
      ${typography.TitleMd};
    }

    &__paragraph,
    &__list {
      color: ${props => props.theme.colors.neutral};
      ${typography.TextMd} margin: ${props => props.theme.spacing.sm} 0;

      li {
        margin: .5rem 0;
      }
    }

    &__buttons {
      margin: 3rem 0 0 0;
      & > *:first-child {
        margin-right: .75rem;
      }
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    .page-text {
      &__overflow {
        overflow: scroll;
        max-height: 75vh;
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding-left: 2rem;
  }

  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    .page-text {
      &__buttons {
      }
    }
  }
`;
