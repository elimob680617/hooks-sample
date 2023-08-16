import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import { TextFieldWrapper } from "./style";
import { useField, useFormikContext } from "formik";
import Typography from "../../layout/typography";
import { useThemeContext } from "../../../hooks";

const InputField = ({
  costomValue,
  width,
  mg,
  mgTop,
  mgRight,
  mgBottom,
  mgLeft,
  ...props
}) => {
  // use formik field hook
  const [field] = useField(props);
  const { value, ...restField } = field;
  const inputValue = !Boolean(value) ? "" : value;

  // use formik context hook
  const { setFieldValue, errors, touched } = useFormikContext();

  // use useThemeContext hook
  const { space: spaces } = useThemeContext();

  useEffect(() => {
    costomValue && setFieldValue(field.name, costomValue);
  }, [costomValue, field.name, setFieldValue]);

  // styles variables
  const stylesVariables = {
    "--InputField--width": width,
    "--InputField--margin": spaces[mg],
    "--InputField--mgTop": spaces[mgTop],
    "--InputField--mgRight": spaces[mgRight],
    "--InputField--mgBottom": spaces[mgBottom],
    "--InputField--mgLeft": spaces[mgLeft],
  };

  // error
  const error =
    touched[field.name] && errors[field.name] && String(errors[field.name]);

  return (
    <TextFieldWrapper
      mgTop={mgTop}
      width={width}
      style={stylesVariables}
      error={error}
    >
      <TextField {...restField} {...props} value={inputValue} size="small" />
      {error && (
        <Typography fontSize="xs" color="red" mgTop="1.5">
          {error}
        </Typography>
      )}
    </TextFieldWrapper>
  );
};

export default InputField;

// ? this component is controlled and one instance of
// ? Mui text field component that handles unnecessary
// ? props and functionalities
