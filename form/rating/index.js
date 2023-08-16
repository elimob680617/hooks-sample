import React from "react";
import { RatingWrapper } from "./style";
import { Rating as MuiRating } from "@mui/material";
import { useField } from "formik";
import PropTypes from "prop-types";

const Rating = ({ containerProps, muiRatingStyle, isFormik, ...props }) => {
  // use formik field hook
  const [field] = useField(props);

  // additional props
  const additionalProps = isFormik
    ? { ...field, value: parseFloat(field.value) }
    : {};

  return (
    <RatingWrapper {...containerProps} muiRatingStyle={muiRatingStyle}>
      <MuiRating precision={0.5} {...additionalProps} {...props} />
    </RatingWrapper>
  );
};

Rating.propTypes = {
  containerProps: PropTypes.object,
  muiRatingStyle: PropTypes.string,
  isFormik: PropTypes.bool,
};

export default Rating;

// ? this component is for rating stars
// ? for component and creates a controlled
// ? Mui rating component
