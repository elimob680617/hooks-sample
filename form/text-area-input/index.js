import React from "react";
import { StyledTextAreaInput } from "./style";
import { useField, useFormikContext } from "formik";
import { useThemeContext } from "../../../hooks";
import Typography from "../../layout/typography";

const TextAreaInput = ({
  height,
  mg,
  mgTop,
  mgRight,
  mgBottom,
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
    "--TextAreaInput--height": height,
    "--TextAreaInput--margin": spaces[mg],
    "--TextAreaInput--mgTop": spaces[mgTop],
    "--TextAreaInput--mgRight": spaces[mgRight],
    "--TextAreaInput--mgBottom": spaces[mgBottom],
    "--TextAreaInput--mgLeft": spaces[mgLeft],
  };

  return (
    <StyledTextAreaInput style={stylesVariables} error={Boolean(error)}>
      <textarea autoComplete="off" {...props} {...field} />
      {error && (
        <Typography fontSize="xs" fontWeight="black" color="red" mgTop="1.5">
          {error}
        </Typography>
      )}
    </StyledTextAreaInput>
  );
};

export default TextAreaInput;

// ? this component is controlled and one instance of
// ? text area element that handles unnecessary
// ? props and functionalities
