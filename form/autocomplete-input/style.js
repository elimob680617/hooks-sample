import styled from "styled-components";

export const StyledAutocompleteInput = styled.div`
  width: var(--AutocompleteInput--width);
  margin-top: var(--AutocompleteInput--mgTop);
  margin-bottom: var(--AutocompleteInput--mgBottom);
  margin-right: var(--AutocompleteInput--mgLeft);
  margin-left: var(--AutocompleteInput--mgRight);

  .MuiOutlinedInput-root {
    border: none;

    &:hover {
      .MuiOutlinedInput-notchedOutline {
        border: 2px solid;
        border-color: ${({ hasError, theme: { color } }) =>
          hasError ? "" : color.black500};
      }
    }
  }

  .MuiInputLabel-root {
    color: ${({ hasError, theme: { color } }) =>
      hasError ? color.red : color.black500};

    &.Mui-focused {
      color: ${({ theme: { color } }) => color.black};
    }
  }

  .MuiOutlinedInput-notchedOutline {
    border: 1px solid;
    border-color: ${({ hasError, theme: { color } }) =>
      hasError ? color.red : color.black400} !important;
    border-radius: ${({ theme: { borderRadius } }) => borderRadius.lg};
  }
`;
