import styled from "styled-components";

export const SmartInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .MuiFormControl-root {
    width: 100%;

    &:hover {
      .MuiOutlinedInput-root {
        border-color: ${({ error, theme: { color } }) =>
          error ? "" : color.black500};
      }
    }
  }

  .MuiOutlinedInput-root {
    border: 0;
    border-color: ${({ error, theme: { color } }) =>
      error ? color.red : color.black200};
    border-radius: ${({ theme: { borderRadius } }) => borderRadius.lg};
  }

  .MuiInputLabel-root {
    color: ${({ error, theme: { color } }) =>
      error ? color.red : color.black500};

    &.Mui-focused {
      color: ${({ theme: { color } }) => color.black};
    }
  }

  .MuiOutlinedInput-notchedOutline {
    border-color: ${({ error, theme: { color } }) =>
      error ? color.red : color.black200} !important;
    border-width: 1px !important;
  }

  & .muirtl-ittuaa-MuiInputAdornment-root {
    height: auto;
    max-height: 100%;
    margin-right: 0;
    & p {
      margin-top: 0;
      margin-left: 0;
    }
  }

  & .MuiOutlinedInput-input {
    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    /* Firefox */
    &[type="number"] {
      -moz-appearance: textfield;
    }
  }
`;
