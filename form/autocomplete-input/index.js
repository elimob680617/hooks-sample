import React from "react";
import { StyledAutocompleteInput } from "./style";
import { useThemeContext } from "../../../hooks";
import Typography from "../../layout/typography";
import { Autocomplete, TextField } from "@mui/material";
import useField from "./useField";

const AutocompleteInput = ({
  width,
  mgTop,
  mgRight,
  mgBottom,
  mgLeft,
  inputProps,
  getValue,
  ...props
}) => {
  const { space: spaces } = useThemeContext();

  // styles variables
  const stylesVariables = {
    "--AutocompleteInput--width": width || "100%",
    "--AutocompleteInput--mgTop": spaces[mgTop],
    "--AutocompleteInput--mgRight": spaces[mgRight],
    "--AutocompleteInput--mgBottom": spaces[mgBottom],
    "--AutocompleteInput--mgLeft": spaces[mgLeft],
  };

  const { handleOnChange, errorText, hasError, value } = useField(
    inputProps.name,
    getValue
  );

  return (
    <StyledAutocompleteInput style={stylesVariables} hasError={hasError}>
      <Autocomplete
        size="small"
        fullWidth
        onChange={handleOnChange}
        value={value}
        {...props}
        renderInput={(params) => (
          <TextField {...params} {...inputProps} value={value} />
        )}
      />
      {hasError && (
        <Typography fontSize="xs" color="red" mgTop="1.5">
          {errorText}
        </Typography>
      )}
    </StyledAutocompleteInput>
  );
};

export default AutocompleteInput;
export { StyledAutocompleteInput } from "./style";

// ? this component creates a controlled Mui autocomplete
// ? and makes simple working with autocompletes
