import React from "react";
import {
  Typography,
  Wrapper,
  PasswordInput,
  Button,
} from "../../../../../components";
import { FormWrapper, PasswordChecker } from "../../../../../components";
import { company_forgetPasswordChangePass } from "../../../../../validations";

const ThirdStep = ({ formValues, submitForm, isSubmitted, prevStep }) => {
  return (
    <>
      <Typography
        as="h2"
        fontSize="2xl"
        fontWeight="bold"
        display="flex"
        alignItems="center"
      >
        ایجاد رمز جدید
      </Typography>
      <FormWrapper
        formValues={formValues}
        handleSubmit={submitForm}
        validationObj={company_forgetPasswordChangePass}
        needProps={true}
      >
        {({ values }) => (
          <>
            <PasswordInput
              type="password"
              name="password"
              mgTop="5"
              inputLabel="رمز عبور جدید را وارد کنید"
            />
            <PasswordInput
              type="password"
              name="password_confirm"
              mgTop="5"
              inputLabel="رمز عبور را تکرار کنید"
            />
            <PasswordChecker mgTop="8" password={values.password} />
            <Wrapper className="w-full flex justify-between" mgTop="8">
              <Button
                width="48.5%"
                variant="outlined"
                onClick={() => prevStep(formValues)}
              >
                مرحله قبل
              </Button>
              <Button type="submit" width="48.5%" disabled={isSubmitted}>
                ثبت
              </Button>
            </Wrapper>
          </>
        )}
      </FormWrapper>
    </>
  );
};

export default ThirdStep;
