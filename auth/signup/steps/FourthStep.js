import React from "react";
import { FormWrapper } from "../../../../components";
import { company_registerFourthStepValidate } from "../../../../validations";
import {
  AbrBarLogo,
  InputField,
  Button,
  Wrapper,
  Typography,
  PasswordInput,
} from "../../../../components";
import { useRegisterCompany } from "../../../utils";

const FourthStep = ({ prev, values }) => {
  // use register company hook
  const { isLoading, handleRegisterCompany } = useRegisterCompany();

  // submit form
  const handleSubmit = (values) => handleRegisterCompany(values);

  return (
    <>
      <Wrapper className="flex flex-col">
        <AbrBarLogo />
        <Typography fontSize="2xl" fontWeight="bold" mgTop="6">
          نام کاربری و رمز عبور برای خود انتخاب کنید.
        </Typography>
        <Typography mgTop="1.5">
          رمز عبور باید حداقل ۸ کاراکتر و شامل حروف و عدد باشد.
        </Typography>
      </Wrapper>

      <FormWrapper
        formValues={values}
        validationObj={company_registerFourthStepValidate}
        handleSubmit={handleSubmit}
      >
        <InputField
          type="text"
          label="نام کاربری"
          variant="outlined"
          name="username"
          autoComplete="off"
          mgTop="6"
        />

        <PasswordInput
          type="password"
          name="password"
          inputLabel="رمز عبور"
          autoComplete="off"
          mgTop="5"
        />

        <PasswordInput
          type="password"
          name="passwordConfirm"
          inputLabel="تکرار رمز عبور"
          autoComplete="off"
          mgTop="5"
        />

        <Wrapper className="flex justify-between items-center" mgTop="16">
          <Button width="48.5%" variant="outlined" onClick={() => prev(values)}>
            مرحله قبل
          </Button>
          <Button type="submit" width="48.5%" disabled={isLoading}>
            ثبت نام
          </Button>
        </Wrapper>
      </FormWrapper>
    </>
  );
};

export default FourthStep;
