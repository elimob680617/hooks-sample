import styled, { css } from "styled-components";

export const SwitchWrapper = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  ${(props) =>
    props.flexRow &&
    css`
      display: flex;
    `};

  ${(props) =>
    props.flexCol &&
    css`
      display: flex;
      flex-direction: column;
    `};

  justify-content: ${(props) => props.justifyContent && props.justifyContent};
  align-items: ${(props) => props.alignItems && props.alignItems};

  .muirtl-plri7p-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked {
    color: ${(props) => props.thumbColor ? props.theme[props.thumbColor] : props.theme.lightPrimaryHover};
  }

  .muirtl-plri7p-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track{
    background-color: ${(props) => props.thumbColor ? props.theme.color[props.thumbColor] : props.theme.color.bgSecondary};
  }
`;
