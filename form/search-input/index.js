import React from "react";
import { StyledSearchInput } from "./style";
import PropTypes from "prop-types";
import { useThemeContext } from "../../../hooks";
import { Search } from "@mui/icons-material";

const SearchInput = ({
  className,
  mgTop,
  mgRight,
  mgBottom,
  mgLeft,
  ...props
}) => {
  // use useThemeContext hook
  const { space: spaces } = useThemeContext();

  // styles variables
  const stylesVariables = {
    "--SearchInput--mgTop": spaces[mgTop],
    "--SearchInput--mgRight": spaces[mgRight],
    "--SearchInput--mgBottom": spaces[mgBottom],
    "--SearchInput--mgLeft": spaces[mgLeft],
  };

  return (
    <StyledSearchInput
      className={className || "w-full"}
      style={stylesVariables}
    >
      <div className="search-input-wrapper w-full flex justify-center items-center">
        <input type="text" className="w-full h-full" {...props} />
        <button
          className="wrapper-btn flex justify-center items-center"
          type="submit"
        >
          <Search />
        </button>
      </div>
    </StyledSearchInput>
  );
};

SearchInput.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  mgTop: PropTypes.string,
  mgRight: PropTypes.string,
  mgBottom: PropTypes.string,
  mgLeft: PropTypes.string,
};

export default SearchInput;

// ? this component is for search boxes and handles
// ? extra functionalities and props
