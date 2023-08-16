import React from "react";
import { SmartInputContainer } from "./style";
import { funcRialToToman } from "../../../helper";
import Typography from "../../layout/typography";
import Num2persian from "num2persian";
import { useField } from "formik";
import { TextField, InputAdornment } from "@mui/material";

const SmartInput = ({ unit, inputLable, ...props }) => {
  // use formik hook use filed
  const [field] = useField(props);

  // render unit value converter
  const unitValueConverter = () => {
    switch (unit) {
      case "ریال":
        return funcRialToToman(field.value);
      default:
        return `${Num2persian(field.value)} ${unit}`;
    }
  };

  return (
    <SmartInputContainer>
      <TextField
        label={inputLable}
        autoComplete="off"
        id={`outlined-${field.name}`}
        fullWidth={true}
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">{unit}</InputAdornment>
          ),
        }}
        {...props}
        {...field}
      />
      {field.value > 0 && (
        <Typography
          fontSize="sm"
          color="textPrimary"
          className="w-full flex items-start"
          mgTop="2"
        >
          {unitValueConverter()}
        </Typography>
      )}
    </SmartInputContainer>
  );
};

export default SmartInput;

// ? this component is for money inputs and handles
// ? converting numbers to words and shows theme
// ? and it has a style for showing the money unit
