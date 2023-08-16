import React from "react";
import { Typography, InputField, Button } from "../../../../../components";
import { FormWrapper } from "../../../../../components";
import { company_forgetPasswordEmail } from "../../../../../validations";

const FirstStep = ({ formValues, submitForm, isSubmitted }) => {
  return (
    <>
      <Typography
        as="h2"
        fontSize="2xl"
        fontWeight="bold"
        display="flex"
        alignItems="center"
      >
        فراموشی رمز عبور
      </Typography>
      <Typography fontSize="sm" mgTop="2">
        آدرس ایمیل خود را وارد کنید
      </Typography>
      <FormWrapper
        formValues={formValues}
        validationObj={company_forgetPasswordEmail}
        handleSubmit={submitForm}
      >
        <InputField
          type="text"
          label="ایمیل"
          variant="outlined"
          name="email"
          mgTop="4"
        />
        <Button type="submit" fullWidth mgTop="8" disabled={isSubmitted}>
          ارسال
        </Button>
      </FormWrapper>
    </>
  );
};

export default FirstStep;
