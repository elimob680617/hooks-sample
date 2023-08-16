import React from "react";
import styled from "styled-components";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useField } from "formik";

const CheckboxLabelWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: ${(props) => props.mgTop};
`;

const CheckboxLabel = ({
  label,
  mgTop,
  isFormik = true,
  disabled,
  ...props
}) => {
  // use formik field hook
  const [field] = useField(props);

  // additional props
  const additionalProps = isFormik ? { ...field } : {};
  const checkedProp = isFormik ? { checked: Boolean(field.value) } : {};

  return (
    <CheckboxLabelWrapper mgTop={mgTop} {...props}>
      <FormControlLabel
        control={
          <Checkbox
            {...additionalProps}
            {...checkedProp}
            color="secondary"
            disabled={disabled}
          />
        }
        label={`${label}`}
      />
    </CheckboxLabelWrapper>
  );
};

export default CheckboxLabel;

// ? this component is one instance of mui checkbox
// ? component with handling unnecessary props or
// ? functionalities with providing label for checkbox
