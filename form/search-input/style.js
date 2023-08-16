import styled from "styled-components";

export const StyledSearchInput = styled.div`
  margin-top: var(--SearchInput--mgTop);
  margin-bottom: var(--SearchInput--mgBottom);
  margin-right: var(--SearchInput--mgLeft);
  margin-left: var(--SearchInput--mgRight);

  .search-input-wrapper {
    position: relative;
    border: 2px solid ${({ theme: { color } }) => color.textTertiary};
    border-radius: ${({ theme: { borderRadius } }) => borderRadius.lg};
    overflow: hidden;

    & input {
      border-radius: ${({ theme: { borderRadius } }) => borderRadius.lg};
      background-color: transparent;
      border: 0;
      height: 45px;
      font-size: ${({ theme: { fontSize } }) => fontSize["sm"]};
      padding: ${({ theme: { space } }) =>
        `${space["0"]} ${space["2.5"]} ${space["0"]} ${space["14"]}`};

      ::placeholder {
        color: ${({ theme: { color } }) => color.textTertiary};
        font-size: ${({ theme: { fontSize } }) => fontSize["sm"]};
        font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
        opacity: 0.8;
      }
    }

    .wrapper-btn {
      position: absolute;
      right: ${({ theme: { space } }) => space["2.5"]};
      background-color: transparent;
      border: 0;
      cursor: pointer;

      & svg {
        font-size: ${({ theme: { fontSize } }) => fontSize["4xl"]};
        color: ${({ theme: { color } }) => color.textTertiary};
      }
    }
  }
`;
