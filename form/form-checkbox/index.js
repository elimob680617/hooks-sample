import React from "react";
import { FormCheckboxWrapper } from "./style";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useField, useFormikContext } from "formik";

const FormCheckbox = ({ label, mgTop, mgBottom, color, ...props }) => {
  // use field hook
  const [field] = useField(props);

  // use formik context hook
  const { errors, touched } = useFormikContext();

  // error
  const error =
    touched[field.name] && errors[field.name] && String(errors[field.name]);

  return (
    <FormCheckboxWrapper
      mgTop={mgTop}
      mgBottom={mgBottom}
      error={Boolean(error)}
      color={color}
    >
      <FormControlLabel
        control={
          <Checkbox
            {...field}
            {...props}
            color="secondary"
            checked={Boolean(field.value)}
          />
        }
        label={label}
      />
    </FormCheckboxWrapper>
  );
};

export default FormCheckbox;

// ? this component is deprecated and its refactored version is
// ? checkbox label component and should be replcaed soon
