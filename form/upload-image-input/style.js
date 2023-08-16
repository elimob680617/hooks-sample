import styled from "styled-components";

export const StyledUploadImageInput = styled.div`
  position: relative;
  width: 75px;
  height: 75px;
  border: 1px solid;
  border-color: ${({ theme: { color }, error }) =>
    error ? color.red : color.black500};
  border-radius: 50%;
  overflow: hidden;

  .image-input-preview {
    position: relative;

    & img {
      object-fit: cover;
    }

    & svg {
      font-size: ${({ theme: { fontSize } }) => fontSize["3xl"]};
      color: ${({ theme: { color } }) => color.black500};
    }

    .image-input {
      position: absolute;
      inset: 0;
      cursor: pointer;
      opacity: 0;
    }
  }
`;
