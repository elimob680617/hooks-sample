import styled from "styled-components";

export const StyledPasswordInputWrapper = styled.div`
  position: relative;
  display: flex;
  width: var(--PasswordInput--width, 100%);
  margin: var(--PasswordInput--margin);
  margin-top: var(--PasswordInput--mgTop);
  margin-bottom: var(--PasswordInput--mgBottom);
  margin-right: var(--PasswordInput--mgLeft);
  margin-left: var(--PasswordInput--mgRight);

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

export const StyledPasswordInput = styled.input`
  width: 100%;
  background: transparent;
  border: 0;
  padding: ${({ theme: { space } }) => `${space["3"]} ${space["3.5"]}`};
  padding-right: ${({ theme: { space } }) => space["10"]};
  color: ${({ error, theme: { color } }) => error ? color.red : color.black500};

  ::placeholder {
      color: ${({ error, theme: { color } }) => error ? color.red : color.black500};
    }
`;

export const StyledPasswordInputIconWrapper = styled.button`
  position: absolute;
  top: 50%;
  right: 0.6em;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: 0;
  cursor: pointer;
`;
