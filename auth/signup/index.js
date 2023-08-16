import React, { useState, useEffect } from "react";
import { StyledCompanySignup } from "./style";
import { useChangeBodyBg } from "../../../hooks";
import FirstStep from "./steps/FirstStep";
import SecoundStep from "./steps/SecoundStep";
import ThirdStep from "./steps/ThirdStep";
import FourthStep from "./steps/FourthStep";

const Signup = () => {
  // company signup form states
  const [initialValues, setInitialValues] = useState({
    email: "",
    username: "",
    password: "",
    passwordConfirm: "",
    first_name: "",
    last_name: "",
    image: null,
    phone_number: "",
    address: "",
    state: "",
    city: "",
    name: "",
    fix_phone_number: "",
    company_national_id: "",
    logo: null,
  });

  // handle reset form
  const handleResetForm = () => {
    setInitialValues({
      email: "",
      username: "",
      password: "",
      passwordConfirm: "",
      first_name: "",
      last_name: "",
      image: null,
      phone_number: "",
      address: "",
      state: "",
      city: "",
      name: "",
      fix_phone_number: "",
      company_national_id: "",
      logo: null,
    });
  };

  // form current step
  const [currentStep, setCurrentStep] = useState(0);

  // handle next
  const handleNext = (values) => {
    setInitialValues((prevValue) => ({ ...prevValue, ...values }));
    setCurrentStep((prevStep) => prevStep + 1);
  };

  // handle prev
  const handlePrev = (values) => {
    setInitialValues((prevValue) => ({ ...prevValue, ...values }));
    setCurrentStep((prevStep) => prevStep - 1);
  };

  // cancell all subscription
  useEffect(() => {
    return () => handleResetForm();
  }, []);

  // use change body bg
  useChangeBodyBg("#d5dde4");

  // company signup form steps
  const steps = [
    <FirstStep values={initialValues} next={handleNext} />,
    <SecoundStep values={initialValues} next={handleNext} prev={handlePrev} />,
    <ThirdStep values={initialValues} next={handleNext} prev={handlePrev} />,
    <FourthStep
      values={initialValues}
      reset={handleResetForm}
      prev={handlePrev}
    />,
  ];

  return (
    <StyledCompanySignup className="h-screen flex justify-center">
      <div className="company-signup-wrapper flex flex-col justify-between">
        {steps[currentStep]}
      </div>
    </StyledCompanySignup>
  );
};

export default Signup;
