import styled, { css } from "styled-components";

export const StyleUploadInputPreview = styled.div`
  display: ${(props) => (props.error ? "none" : "flex")};

  ${(props) =>
    props.isClicked &&
    css`
      position: fixed;
      top: 50%;
      right: 50%;
      transform: translate(-50%, -50%);
      z-index: 999999;
    `}

  & img {
    object-fit: cover;
    cursor: zoom-in;

    ${(props) =>
      props.isClicked &&
      css`
        width: 90%;
        height: 90%;
        border-radius: 10px;
        cursor: zoom-out;
      `}
  }
`;
