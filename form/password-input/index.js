import React from "react";
import PropTypes from "prop-types";
import { useField, useFormikContext } from "formik";
import { StyledPasswordInputWrapper } from "./style";
import usePasswordInput from "./usePasswordInput";
import { useThemeContext } from "../../../hooks";
import Typography from "../../layout/typography";

import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { funcStopPropagation } from "../../../helper";

const PasswordInput = ({
  inputLabel,
  isFormik = true,
  type,
  width,
  mg,
  mgTop,
  mgRight,
  mgBottom,
  mgLeft,
  ...props
}) => {
  // use usePasswordInput hook
  const { showPassword, togglePassword } = usePasswordInput(type);
  // render input type
  const inputType = showPassword ? "text" : "password";

  // use useField hook
  const [field] = useField(props);

  // use formik context hook
  const { errors, touched } = useFormikContext();

  // error
  const error =
    touched[field.name] && errors[field.name] && String(errors[field.name]);

  // use useThemeContext hook
  const { space: spaces } = useThemeContext();

  // styles variables
  const wrapperStylesVariables = {
    "--PasswordInput--width": width,
    "--PasswordInput--margin": spaces[mg],
    "--PasswordInput--mgTop": spaces[mgTop],
    "--PasswordInput--mgRight": spaces[mgRight],
    "--PasswordInput--mgBottom": spaces[mgBottom],
    "--PasswordInput--mgLeft": spaces[mgLeft],
  };

  return (
    <>
      <StyledPasswordInputWrapper style={wrapperStylesVariables} error={error}>
        <FormControl fullWidth={true} variant="outlined" size="small">
          <InputLabel htmlFor={`outlined-${field.name}`}>
            {inputLabel}
          </InputLabel>
          <OutlinedInput
            id={`outlined-${field.name}`}
            type={inputType}
            error={Boolean(error)}
            {...field}
            {...props}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={togglePassword}
                  onMouseDown={funcStopPropagation}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </StyledPasswordInputWrapper>
      {error && (
        <Typography fontSize="xs" color="red" mgTop="1.5">
          {error}
        </Typography>
      )}
    </>
  );
};

PasswordInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  wrapperProps: PropTypes.object,
  isFormik: PropTypes.bool,
};

export default PasswordInput;

// ? this component is for inputs with type of password
// ? in this component we handled visibility and invisibility
// ? of password with icon buttons
