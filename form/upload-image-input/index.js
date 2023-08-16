import React from "react";
import PropTypes from "prop-types";
import { StyledUploadImageInput } from "./style";
import { PhotoCamera } from "@mui/icons-material";
import Image from "../../layout/image";
import { CircularProgress } from "@mui/material";

const UploadImageInput = (props) => {
  const { name, preview, onChange, loading } = props;

  const inputProps = { name, value: undefined, onChange };

  return (
    <StyledUploadImageInput className="flex justify-center items-center">
      <div className="image-input-preview w-full h-full flex justify-center items-center">
        {loading ? (
          <CircularProgress size={30} />
        ) : !!preview ? (
          <Image
            address={preview}
            alt="preview uploaded"
            className="w-full h-full"
          />
        ) : (
          <PhotoCamera />
        )}
        <input
          type="file"
          accept=".png, .jpg, .jpeg .webp"
          className="image-input w-full h-full"
          {...inputProps}
        />
      </div>
    </StyledUploadImageInput>
  );
};

UploadImageInput.propTypes = {
  name: PropTypes.string,
};

export default UploadImageInput;

// ? this component handles image upload input
