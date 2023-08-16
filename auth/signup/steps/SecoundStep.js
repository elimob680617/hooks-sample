import React from "react";
import { FormWrapper } from "../../../../components";
import { company_registerSecoundStepValidate } from "../../../../validations";
import {
  AbrBarLogo,
  InputField,
  Button,
  Typography,
  Wrapper,
} from "../../../../components";
import { ValidCompaniesAutocomplete } from "../../../utils";

const SecoundStep = ({ next, prev, values }) => {
  // handle submit form
  const handleSubmitForm = (values) => next(values);

  return (
    <>
      <AbrBarLogo />
      <Typography fontSize="2xl" fontWeight="bold">
        لطفا اطلاعات شرکت حمل و
        <br />
        نقل خود را وارد کنید.
      </Typography>

      <FormWrapper
        formValues={values}
        validationObj={company_registerSecoundStepValidate}
        handleSubmit={handleSubmitForm}
      >
        <ValidCompaniesAutocomplete
          inputProps={{
            name: "name",
            label: "نام شرکت حمل و نقل",
            type: "text",
          }}
          mgTop="6"
        />

        <InputField
          type="text"
          label="شناسه ملی شرکت"
          variant="outlined"
          name="company_national_id"
          mgTop="5"
          inputProps={{ maxLength: 11 }}
        />

        <InputField
          type="tel"
          label="تلفن ثابت شرکت"
          variant="outlined"
          name="fix_phone_number"
          mgTop="5"
          inputProps={{ maxLength: 11 }}
        />

        <Wrapper className="flex justify-between items-center" mgTop="20">
          <Button width="48.5%" variant="outlined" onClick={() => prev(values)}>
            مرحله قبل
          </Button>
          <Button type="submit" width="48.5%">
            مرحله بعد
          </Button>
        </Wrapper>
      </FormWrapper>
    </>
  );
};

export default SecoundStep;
