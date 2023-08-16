import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useSessionStorage } from "hooks";

import useSnackbar from "./useSnackbar";

const defaultProps = {
  optionalSteps: [],
};

const useStepper = (props = defaultProps) => {
  const [activeStep, setActiveStep] = useSessionStorage({
    initialValue: 0,
    storageName: "stepper/activeStep",
  });

  const [skipped, setSkipped] = useState(new Set());
  const { snack } = useSnackbar();
  const navigate = useNavigate();

  // * checks is step optional or not
  const isStepOptional = (step) => props.optionalSteps.includes(step);

  // * checks step is skipped or not
  const isStepSkipped = (step) => (!!skipped ? skipped.has(step) : false);

  // * handle go to given step number
  const handleGo = (step, link) => {
    if (!!step && !!link) {
      navigate(link);
      setActiveStep(step);
    }
  };

  // * handle go to next step
  const handleNext = (link) => {
    let newSkipped = skipped;

    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    link && navigate(link);
    setSkipped(newSkipped);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  // * handle go to previous step
  const handleBack = (link) => {
    link && navigate(link);
    if (activeStep > 0) setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // * handle skip step
  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      snack.warning({ title: "این مرحله قابلیت رد کردن را ندارد" });
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  // * handle reset steps
  const handleReset = () => setActiveStep(0);

  // * handle remove stepper
  const handleRemove = () => sessionStorage.removeItem("stepper/activeStep");

  return {
    handleNext,
    handleBack,
    handleSkip,
    handleReset,
    handleRemove,
    handleGo,
    stepperProps: { activeStep, isStepSkipped },
  };
};

export default useStepper;

// ? this hook provides Mui stepper needed props and
// ? functionalities to simplify working with stepps
