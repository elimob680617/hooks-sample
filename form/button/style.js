import styled, { css } from "styled-components";
import LoadingButton from "@mui/lab/LoadingButton";
import { Link } from "react-router-dom";

const StyledButton = styled(LoadingButton)`
  width: ${({ width }) => width};
  font-weight: 600;
  border-radius: ${({ theme: { borderRadius } }) => borderRadius.lg};
  margin-top: var(--button--mgTop);
  margin-right: var(--button--mgLeft);
  margin-left: var(--button--mgRight);
  margin-bottom: var(--button--mgBottom);
`;

const ButtonStyles = css`
  width: var(--button--width);
  color: var(--button--color);
  background: transparent;
  padding: var(--button---padding);
  padding-top: var(--button--py, ${({ theme: { space } }) => space["1.5"]});
  padding-bottom: var(--button--py, ${({ theme: { space } }) => space["1.5"]});
  padding-right: var(--button--px);
  padding-left: var(--button--px);
  margin: var(--button--margin);
  margin-top: var(--button--mgTop);
  margin-right: var(--button--mgLeft);
  margin-left: var(--button--mgRight);
  margin-bottom: var(--button--mgBottom);
  text-align: var(--button--textAlign, center);
  border-radius: ${({ theme: { borderRadius } }) => borderRadius.lg};
  font-size: var(
    --button--fontSize,
    ${({ theme: { fontSize } }) => fontSize.base}
  );
  line-height: ${({ theme: { lineHeight } }) => lineHeight.base};
  font-weight: var(
    --button--fontWeight,
    ${({ theme: { fontWeight } }) => fontWeight.bold}
  );
  border: 1.5px solid transparent;
  transition: all 0.6s ease;
  cursor: pointer;

  &.primary {
    background: ${({ theme: { color } }) => color.bgSecondary};
    border-color: ${({ theme: { color } }) => color.bgSecondary};
    color: ${({ theme: { color } }) => color.white};
    box-shadow: ${({ theme: { shadow } }) => shadow.shadow100};

    &:hover {
      filter: brightness(85%);
    }
  }

  &.white {
    background: ${({ theme: { color } }) => color.white};
    border-color: ${({ theme: { color } }) => color.white};
    color: ${({ theme: { color } }) => color.textPrimary};
    box-shadow: ${({ theme: { shadow } }) => shadow.shadow100};

    &:hover {
      filter: brightness(85%);
    }
  }

  &.red {
    background: ${({ theme: { color } }) => color.red};
    border-color: ${({ theme: { color } }) => color.red};
    color: ${({ theme: { color } }) => color.white};
    box-shadow: ${({ theme: { shadow } }) => shadow.shadow100};

    &:hover {
      filter: brightness(85%);
    }
  }

  &.outline-white {
    border-color: ${({ theme: { color } }) => color.white};
    color: ${({ theme: { color } }) => color.white};

    &:hover {
      background: ${({ theme: { color } }) => color.white};
      border-color: ${({ theme: { color } }) => color.white};
      color: ${({ theme: { color } }) => color.textPrimary};
    }
  }

  &.outline-black {
    border-color: ${({ theme: { color } }) => color.textPrimary};
    color: ${({ theme: { color } }) => color.textPrimary};
  }

  &.outline-red {
    border-color: ${({ theme: { color } }) => color.red};
    color: ${({ theme: { color } }) => color.red};
  }

  &.outline-primary {
    border-color: ${({ theme: { color } }) => color.bgSecondary};
    color: ${({ theme: { color } }) => color.textQuaternary};
  }

  &.primary-arrow {
    display: flex;
    align-items: center;
    color: ${({ theme: { color } }) => color.textQuaternary};
    box-shadow: none;

    & svg {
      transform: rotate(180deg);
      margin-left: 0.5em;
      font-size: 2.2rem;
      transition: all 0.5s ease;
    }

    &:hover {
      svg {
        transform: translateX(-0.6em) rotate(180deg);
      }
    }
  }

  ${(props) =>
    props.disabled &&
    css`
      filter: grayscale(100%);
      cursor: not-allowed;
      &.primary {
        &:hover {
          background: ${({ theme: { color } }) => color.bgSecondary};
        }
      }
      &.white {
        &:hover {
          background: ${({ theme: { color } }) => color.white};
        }
      }
      &.outline-black {
        &:hover {
          background: transparent;
          color: ${({ theme: { color } }) => color.textPrimary};
        }
      }
    `}
`;

export const ButtonBtn = styled.button`
  ${ButtonStyles}
`;

export const ButtonLink = styled(Link)`
  ${ButtonStyles}
`;

export default StyledButton;
