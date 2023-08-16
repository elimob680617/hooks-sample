import styled, { css } from "styled-components";

export const StyledTextAreaInput = styled.div`
  margin: var(--TextAreaInput--margin);
  margin-top: var(--TextAreaInput--mgTop);
  margin-bottom: var(--TextAreaInput--mgBottom);
  margin-right: var(--TextAreaInput--mgLeft);
  margin-left: var(--TextAreaInput--mgRight);

  & textarea {
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    max-height: var(--TextAreaInput--height, 150px);
    min-height: var(--TextAreaInput--height, 150px);
    padding: ${({ theme: { space } }) => space["2.5"]};
    border-radius: ${({ theme: { borderRadius } }) => borderRadius.lg};
    border: 1px solid;
    outline: none !important;

    &::placeholder {
      font-size: ${({ theme: { fontSize } }) => fontSize.sm};
    }

    &:hover {
      border: 2px solid;
      border-color: ${({ error, theme: { color } }) =>
        error ? "" : color.black500};
    }
  }

  ${({ error }) =>
    error
      ? css`
          & textarea {
            border-color: ${({ theme: { color } }) => color.red};
            &::placeholder {
              color: ${({ theme: { color } }) => color.red};
            }
          }
        `
      : css`
          & textarea {
            border-color: ${({ theme: { color } }) => color.black400};

            &::placeholder {
              color: ${({ theme: { color } }) => color.black500};
            }
          }
        `}
`;
