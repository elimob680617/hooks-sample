import React from "react";
import PropTypes from "prop-types";
import StyledButton from "./style";
import { useThemeContext } from "../../../hooks";

const Button = (props) => {
  const { children, to, mg, mgTop, mgRight, mgBottom, mgLeft, ...restProps } =
    props;

  // use useThemeContext hook
  const { space: spaces } = useThemeContext();

  // styles variables
  const stylesVariables = {
    "--button--margin": spaces[mg],
    "--button--mgTop": spaces[mgTop],
    "--button--mgRight": spaces[mgRight],
    "--button--mgBottom": spaces[mgBottom],
    "--button--mgLeft": spaces[mgLeft],
  };

  return (
    <StyledButton href={to} style={stylesVariables} {...restProps}>
      {children}
    </StyledButton>
  );
};

export default Button;

// declare prop types
Button.propTypes = {
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  loading: PropTypes.bool,
  loadingIndicator: PropTypes.elementType,
  width: PropTypes.string,
  fullWidth: PropTypes.bool,
  py: PropTypes.string,
  mgTop: PropTypes.string,
  mgRight: PropTypes.string,
  mgBottom: PropTypes.string,
  mgLeft: PropTypes.string,
};

// declare default prop
Button.defaultProps = {
  variant: "contained",
  size: "medium",
  disableRipple: false,
};
