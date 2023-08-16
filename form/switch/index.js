import React from "react";
import PropTypes from "prop-types";
import { SwitchWrapper } from "./style";
import { Switch as MuiSwitch } from "@mui/material";
import Typography from "../../layout/typography";
import { useField } from "formik";

const Switch = ({ label, labelProps, wrapperProps, isFormik, ...props }) => {
  // use formik field hook
  const [field] = useField(props);

  // additional props
  const additionalProps = isFormik ? { ...field } : {};
  const checkedProp = isFormik ? { checked: Boolean(field.value) } : {};

  return (
    <SwitchWrapper {...wrapperProps}>
      {label && <Typography {...labelProps}>{label}</Typography>}
      <MuiSwitch
        {...props}
        inputProps={{ ...additionalProps }}
        {...checkedProp}
      />
    </SwitchWrapper>
  );
};

Switch.prototype = {
  label: PropTypes.string,
  labelProps: PropTypes.object.isRequired,
  switchProps: PropTypes.object,
  isFormik: PropTypes.bool,
};

export default Switch;

// ? this component is one instance of mui switch
// ? component with handling unnecessary props or
// ? functionalities with providing label for switch
