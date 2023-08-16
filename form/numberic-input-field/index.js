import React from "react";
import {
  StyledNumbericWrapper,
  StyledNumbericInput,
  StyledNumbericInputWrapper,
} from "./style";
import { useField, useFormikContext } from "formik";
import Typography from "../../layout/typography";
import { useThemeContext } from "../../../hooks";

const NumbericInputField = ({
  mg,
  mgTop,
  mgBottom,
  mgRight,
  mgLeft,
  ...props
}) => {
  // use formik field hook
  const [field] = useField(props);

  // use formik context hook
  const { errors, touched } = useFormikContext();

  // error
  const error =
    touched[field.name] && errors[field.name] && String(errors[field.name]);

  // use useThemeContext hook
  const { space: spaces } = useThemeContext();

  // styles variables
  const stylesVariables = {
    "--NumbericInputField--margin": spaces[mg],
    "--NumbericInputField--mgTop": spaces[mgTop],
    "--NumbericInputField--mgRight": spaces[mgRight],
    "--NumbericInputField--mgBottom": spaces[mgBottom],
    "--NumbericInputField--mgLeft": spaces[mgLeft],
  };

  return (
    <StyledNumbericWrapper style={stylesVariables}>
      <StyledNumbericInputWrapper>
        <StyledNumbericInput {...field} {...props} error={error} />
      </StyledNumbericInputWrapper>
      {error && (
        <Typography fontSize="xs" color="red" mgTop="1.5">
          {error}
        </Typography>
      )}
    </StyledNumbericWrapper>
  );
};

export default NumbericInputField;

// ? this component handles those input fields that
// ? accepts numbers in diffrent style like verify code input
