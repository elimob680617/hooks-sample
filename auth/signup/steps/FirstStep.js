import React from "react";
import { FormWrapper, StyledLink } from "../../../../components";
import { company_registerFirstStepValidate } from "../../../../validations";
import {
  AbrBarLogo,
  InputField,
  Button,
  Typography,
  Wrapper,
} from "../../../../components";

const FirstStep = ({ next, values }) => {
  // handle submit form
  const handleSubmitForm = (values) => next(values);

  return (
    <>
      <Wrapper className="flex flex-col">
        <AbrBarLogo />
        <Typography fontSize="2xl" fontWeight="bold" mgTop="6">
          ثبت نام شرکت‌ حمل و نقل
        </Typography>
        <Typography mgTop="1">لطفا اطلاعات زیر را تکمیل کنید.</Typography>
      </Wrapper>

      <FormWrapper
        formValues={values}
        validationObj={company_registerFirstStepValidate}
        handleSubmit={handleSubmitForm}
      >
        <InputField
          type="text"
          label="نام"
          variant="outlined"
          name="first_name"
          mgTop="6"
        />

        <InputField
          type="text"
          label="نام خانوادگی"
          variant="outlined"
          name="last_name"
          mgTop="5"
        />

        <InputField
          type="tel"
          label="شماره تلفن همراه"
          variant="outlined"
          name="phone_number"
          mgTop="5"
          inputProps={{ maxLength: 11 }}
        />

        <InputField
          type="email"
          label="آدرس ایمیل شرکت"
          variant="outlined"
          name="email"
          mgTop="5"
        />
        <Button type="submit" mgTop="10" fullWidth>
          مرحله بعد
        </Button>
        <Wrapper className="flex justify-center items-center" mgTop="4">
          <Typography as="span">
            حساب کاربری دارید ؟&nbsp;
            <StyledLink
              to="/login"
              color="textQuaternary"
              mgTop="1"
              cursor="pointer"
            >
              وارد
            </StyledLink>
            &nbsp;شوید
          </Typography>
        </Wrapper>
      </FormWrapper>
    </>
  );
};

export default FirstStep;
