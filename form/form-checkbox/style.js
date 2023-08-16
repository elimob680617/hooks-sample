import styled from "styled-components";

export const FormCheckboxWrapper = styled.div`
  width: 100%;
  margin-top: ${(props) => props.mgTop && props.mgTop};
  margin-bottom: ${(props) => props.mgBottom && props.margin};

  .MuiFormControlLabel-label {
    font-size: 0.9rem;
    color: ${(props) =>
    props.error ? props.theme.color.red : props.theme.color.textPrimary};
  }

  .MuiSvgIcon-root {
    color: ${(props) =>
    props.error
      ? props.theme.color.red
      : props.color
        ? props.theme[props.color]
        : props.theme.color.textPrimary};
  }
`;
