import React from "react";
import {
  Typography,
  NumbericInputField,
  Button,
} from "../../../../../components";
import { FormWrapper } from "../../../../../components";
import { useTimer } from "../../../../../hooks";
import { verifyCodeValidate } from "../../../../../validations";

const SecStep = ({ formValues, submitForm, isSubmitted, prevStep }) => {
  // use useTimer hook
  const { timer, isTimerStart } = useTimer(60);

  return (
    <>
      <Typography
        as="h2"
        fontSize="2xl"
        fontWeight="bold"
        display="flex"
        alignItems="center"
      >
        کد تائید را وارد کنید
      </Typography>
      <Typography fontSize="sm" mgTop="2">
        کد اعتبار سنجی ۶ رقمی که از طریق ایمیل برای شما ارسال شد را وارد کنید.
      </Typography>
      <FormWrapper
        formValues={formValues}
        handleSubmit={submitForm}
        validationObj={verifyCodeValidate}
      >
        <NumbericInputField
          type="tel"
          name="verify_code"
          placeholder="______"
          maxLength={6}
          mgTop="4"
          mgBottom="4"
        />
        <div className="w-full flex justify-between">
          <Button
            width="48.5%"
            color={!isTimerStart ? "textQuaternary" : "textTertiary"}
            disabled={isTimerStart}
            onClick={() => prevStep({ ...formValues, verify_code: "" })}
          >
            {!isTimerStart ? "ارسال مجدد" : `${timer} ثانیه`}
          </Button>
          <Button type="submit" width="48.5%" disabled={isSubmitted}>
            اعتبار سنجی
          </Button>
        </div>
      </FormWrapper>
    </>
  );
};

export default SecStep;
