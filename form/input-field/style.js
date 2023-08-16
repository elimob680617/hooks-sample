import styled from "styled-components";

export const TextFieldWrapper = styled.div`
  width: var(--InputField--width, 100%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: var(--InputField--margin);
  margin-top: var(--InputField--mgTop);
  margin-bottom: var(--InputField--mgBottom);
  margin-right: var(--InputField--mgLeft);
  margin-left: var(--InputField--mgRight);

  .MuiFormControl-root {
    width: 100%;
  }

  .MuiOutlinedInput-root{
    border: none;

    &:hover{
      .MuiOutlinedInput-notchedOutline{
        border: 2px solid;
        border-color: ${({ error, theme: { color } }) => error ? "" : color.black500};
      }
    }
  }

  .MuiInputLabel-root{
    color: ${({ error, theme: { color } }) => error ? color.red : color.black500};

    &.Mui-focused{
      color: ${({ theme: { color } }) => color.black};
    }
  }

  .MuiOutlinedInput-notchedOutline{
    border: 1px solid;
    border-color: ${({ error, theme: { color } }) => error ? color.red : color.black400} !important;
    border-radius: ${({ theme: { borderRadius } }) => borderRadius.lg};
  }
`;
