import React, { useRef } from "react";
import {
  StyledUploadInput,
  StyledUploadInputInner,
  StyledUploadInputOverlay,
} from "./style";
import { useField, useFormikContext } from "formik";
import Typography from "../../layout/typography";
import Wrapper from "../../layout/wrapper";
import Button from "../../form/button";
import UploadInputPreview from "./preview";

const UploadInput = ({ Icon, label, height, mgTop, mgBottom, ...props }) => {
  // use field hook
  const [field] = useField(props);

  // use ref hook
  const imageInputRef = useRef();

  // use formik context hook
  const { setFieldValue, errors, touched } = useFormikContext();

  // handle change image
  const handleChangeImageInput = (event) =>
    setFieldValue(field.name, event.target.files[0]);

  // handle remove image
  const handleRemoveImage = () => {
    setFieldValue(field.name, "");
    imageInputRef.current.value = "";
  };

  // handle change image with btn
  const handleChangeInputFile = () => imageInputRef.current.click();

  // error
  const error =
    touched[field.name] && errors[field.name] && String(errors[field.name]);

  return (
    <StyledUploadInput
      height={height}
      mgTop={mgTop}
      mgBottom={mgBottom}
      hasImage={field.value}
    >
      <input
        {...field}
        {...props}
        type="file"
        accept=".png, .jpg, .jpeg, .pdf"
        onChange={handleChangeImageInput}
        value={undefined}
        ref={imageInputRef}
        hidden={field.value}
      />

      <StyledUploadInputInner hasImage={field.value} error={error}>
        {!errors[field.name] && (
          <>
            <Icon />
            <Typography as="span" mgTop="2" fontWeight="bold">
              {label}
            </Typography>
          </>
        )}
        {errors[field.name] && (
          <Typography mgTop="5" fontSize="sm" fontWeight="bold" color="red">
            {errors[field.name]}
          </Typography>
        )}
      </StyledUploadInputInner>

      {field.value && <UploadInputPreview file={field.value} error={error} />}

      <StyledUploadInputOverlay hasImage={field.value}>
        <Wrapper className="flex justify-between items-center">
          <Button py="0.5" width="48.5%" onClick={handleChangeInputFile}>
            تغییر تصویر
          </Button>
          <Button
            color="error"
            py="0.5"
            width="48.5%"
            onClick={handleRemoveImage}
          >
            حذف تصویر
          </Button>
        </Wrapper>
      </StyledUploadInputOverlay>
    </StyledUploadInput>
  );
};

export default UploadInput;

// ? this component handles file upload input
