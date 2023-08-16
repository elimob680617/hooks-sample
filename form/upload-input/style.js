import styled from "styled-components";

export const StyledUploadInput = styled.div`
  position: relative;
  width: 100%;
  height: ${(props) => (props.height ? props.height : "200px")};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: ${(props) => (props.hasImage ? "0" : "2.2px")} dashed
    ${({ theme: { color } }) => color.textQuaternary};
  box-shadow: ${({ theme: { shadow } }) => shadow.shadow300};
  margin-top: ${(props) => props.mgTop && props.mgTop};
  margin-bottom: ${(props) => props.mgBottom && props.mgBottom};
  overflow: hidden;

  & input {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    opacity: 0;
    z-index: 10;
    cursor: pointer;
  }
`;

export const StyledUploadInputInner = styled.div`
  display: ${(props) =>
    props.error ? "flex" : props.hasImage ? "none" : "flex"};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.error ? "1" : "0.4")};
  z-index: 5;
  text-align: center;

  & svg {
    font-size: 2.8rem;
  }
`;

export const StyledUploadInputOverlay = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  padding: 0.8em 1em;
  background: ${({ theme: { color } }) => color.black300};
  z-index: 11;
  transform: translateY(${(props) => (props.hasImage ? "0" : "100%")});
  transition: transform 0.4s ease ${(props) => (props.hasImage ? "0.5s" : "0s")};
`;
