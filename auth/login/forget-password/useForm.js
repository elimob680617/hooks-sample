import { useState } from "react";
import {
  sendResetPassEmail,
  verifyResetPassEmail,
  resetPassword,
} from "../../../../services";
import { ToastifyMessages } from "../../../../json";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const useForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formValues, setFormValues] = useState({
    email: "",
    verify_code: "",
    password: "",
    password_confirm: "",
  });
  const [isSubmitted, setIsSubmitted] = useState({
    step1: false,
    step2: false,
    step3: false,
  });

  // handle next
  const nextStep = (values) => {
    setFormValues((prevValue) => ({ ...prevValue, ...values }));
    setCurrentStep((prevStep) => prevStep + 1);
  };

  // handle prev
  const prevStep = (values) => {
    setFormValues((prevValue) => ({ ...prevValue, ...values }));
    setCurrentStep((prevStep) => prevStep - 1);
  };

  // destructure ToastifyMessages
  const {
    companyAuth: {
      resetPassSendEmailSuccess,
      resetPassSendEmailFailed,
      resetPassSendEmailNotRegistered,
      verifyPassSendEmailSuccess,
      verifyPassSendEmailFailed,
      resetPassSuccess,
      resetPassFailed,
    },
  } = ToastifyMessages;

  // use navigate
  let navigate = useNavigate();

  // handle submit form first step
  const handleSubmitForm_firstStep = async ({ email, ...rest }) => {
    // set submitted form to true
    setIsSubmitted((prev) => ({ ...prev, step1: true }));

    // make requests with try catch
    try {
      // send verify code to email api call
      const { status = 0 } = await sendResetPassEmail(email);

      // check api call status
      if (status === 200) {
        toast.success(resetPassSendEmailSuccess);
        nextStep({ email, ...rest });
        setIsSubmitted((prev) => ({ ...prev, step1: false }));
      }
    } catch (error) {
      setIsSubmitted((prev) => ({ ...prev, step1: false }));

      if (error.response) {
        if (error.status === 400) toast.error(resetPassSendEmailNotRegistered);
        else toast.error(resetPassSendEmailFailed);
      }
    }
  };

  // handle submit form sec step
  const handleSubmitForm_secStep = async ({ email, verify_code, ...rest }) => {
    // set submitted form to true
    setIsSubmitted((prev) => ({ ...prev, step2: true }));

    // make requests with try catch
    try {
      // send verify code to email api call
      const { status } = await verifyResetPassEmail(email, verify_code);

      // check api call status
      if (status === 200) {
        toast.success(verifyPassSendEmailSuccess);
        nextStep({ email, verify_code, ...rest });
        setIsSubmitted((prev) => ({ ...prev, step2: false }));
      }
    } catch (error) {
      setIsSubmitted((prev) => ({ ...prev, step2: false }));

      if (error.response.status === 400) toast.error(verifyPassSendEmailFailed);
    }
  };

  // handle submit form third step
  const handleSubmitForm_thirdStep = async (values) => {
    // set submitted form to true
    setIsSubmitted((prev) => ({ ...prev, step3: true }));

    // make requests with try catch
    try {
      // send verify code to email api call
      const { status } = await resetPassword({ ...values });

      // check api call status
      if (status === 200) {
        toast.success(resetPassSuccess);
        navigate("/login");
      }
    } catch (error) {
      setIsSubmitted((prev) => ({ ...prev, step3: false }));

      if (error.response) toast.error(resetPassFailed);
    }
  };

  return {
    currentStep,
    formValues,
    setFormValues,
    handleSubmitForm_firstStep,
    handleSubmitForm_secStep,
    handleSubmitForm_thirdStep,
    isSubmitted,
    nextStep,
    prevStep,
  };
};

export default useForm;
