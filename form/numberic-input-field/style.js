import styled from "styled-components";

export const StyledNumbericWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: var(--NumbericInputField--margin);
  margin-top: var(--NumbericInputField--mgTop);
  margin-bottom: var(--NumbericInputField--mgBottom);
  margin-right: var(--NumbericInputField--mgLeft);
  margin-left: var(--NumbericInputField--mgRight);
`;

export const StyledNumbericInputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const StyledNumbericInput = styled.input`
    width: 100%;
    height: 2.5rem;
    color: ${({ error, theme: { color } }) => error ? color.red : color.black500};
    font-size: ${({ theme: { fontSize } }) => fontSize.lg};
    border: 1px solid;
    border-color: ${({ error, theme: { color } }) => error ? color.red : color.black200};
    border-radius: ${({ theme: { borderRadius } }) => borderRadius.lg};
    text-align: center;
    letter-spacing: 16px;
    direction: ltr;
    outline: 0;

    ::placeholder {
      color: ${({ error, theme: { color } }) => error ? color.red : color.black500};
      font-size: ${({ theme: { fontSize } }) => fontSize["2xl"]};
      font-weight: ${({ theme: { fontWeight } }) => fontWeight.medium};
    }
`;
