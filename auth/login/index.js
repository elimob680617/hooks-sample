import React from "react";
import { StyledCompanyLogin } from "./style";
import { FormWrapper } from "../../../components";
import {
  Button,
  AbrBarLogo,
  CheckboxLabel,
  InputField,
  PasswordInput,
  Wrapper,
  Typography,
  StyledLink,
} from "../../../components";
import { company_loginValidate } from "../../../validations";
import { useChangeBodyBg } from "../../../hooks";
import { useLoginCompany } from "../../utils";

const Login = () => {
  // form initial values
  const initialValues = {
    username: "",
    password: "",
    remember_me: false,
  };

  // use change body bg
  useChangeBodyBg("#d5dde4");

  // use login company hook
  const [isSubmitted, handleLoginCompany] = useLoginCompany();

  // submit form
  const handleSubmit = (values) => handleLoginCompany(values);

  return (
    <StyledCompanyLogin className="h-screen flex justify-center">
      <div className="company-login-wrapper flex flex-col justify-between">
        <AbrBarLogo />
        <Typography fontSize="2xl" fontWeight="bold" mgTop="4">
          خوش آمدید.
          <br />
          لطفا نام کاربری و رمز
          <br />
          عبور خود را وارد کنید.
        </Typography>

        <FormWrapper
          formValues={initialValues}
          validationObj={company_loginValidate}
          handleSubmit={handleSubmit}
        >
          <InputField
            type="text"
            label="نام کاربری یا ایمیل"
            variant="outlined"
            name="username"
            mgTop="5"
          />

          <PasswordInput
            type="password"
            name="password"
            mgTop="5"
            inputLabel="رمز عبور"
          />

          <CheckboxLabel
            name="remember_me"
            label="مرا به خاطر بسپار"
            mgTop="0.6em"
          />

          <Button fullWidth type="submit" mgTop="6" disabled={isSubmitted}>
            ورود
          </Button>
          <Wrapper className="flex justify-center items-center" mgTop="4">
            <StyledLink
              to="/login/forget-password"
              color="textQuaternary"
              cursor="pointer"
            >
              بازیابی رمز عبور
            </StyledLink>
          </Wrapper>
          <Wrapper className="flex justify-center items-center" mgTop="2">
            <Typography as="span">
              حساب کاربری ندارید ؟&nbsp;
              <StyledLink
                to="/signup"
                color="textQuaternary"
                mgTop="1"
                cursor="pointer"
              >
                ثبت نام
              </StyledLink>
              &nbsp;کنید
            </Typography>
          </Wrapper>
        </FormWrapper>
      </div>
    </StyledCompanyLogin>
  );
};

export default Login;
export { default as ForgetPassword } from "./forget-password";
