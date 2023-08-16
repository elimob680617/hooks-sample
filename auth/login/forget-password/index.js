import React from "react";
import { StyledForgetPassword } from "./style";
import FirstStep from "./first-step";
import SecStep from "./sec-step";
import ThirdStep from "./third-step";
import useForm from "./useForm";
import { useChangeBodyBg } from "../../../../hooks";

const ForgetPassword = () => {
  // use useForm hook
  const {
    currentStep,
    formValues,
    handleSubmitForm_firstStep,
    handleSubmitForm_secStep,
    handleSubmitForm_thirdStep,
    isSubmitted,
    prevStep,
  } = useForm();

  // use change body bg
  useChangeBodyBg("#d5dde4");

  const steps = [
    <FirstStep
      formValues={formValues}
      submitForm={handleSubmitForm_firstStep}
      isSubmitted={isSubmitted.step1}
    />,
    <SecStep
      formValues={formValues}
      submitForm={handleSubmitForm_secStep}
      isSubmitted={isSubmitted.step2}
      prevStep={prevStep}
    />,
    <ThirdStep
      formValues={formValues}
      submitForm={handleSubmitForm_thirdStep}
      isSubmitted={isSubmitted.step3}
      prevStep={prevStep}
    />,
  ];

  return (
    <StyledForgetPassword className="h-screen flex justify-center">
      <div className="forget-password-wrapper flex flex-col justify-between">
        {steps[currentStep]}
      </div>
    </StyledForgetPassword>
  );
};

export default ForgetPassword;
