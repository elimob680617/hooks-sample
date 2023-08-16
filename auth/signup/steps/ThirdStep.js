import React, { useState, useMemo } from "react";
import { FormWrapper } from "../../../../components";
import { company_registerThirdStepValidate } from "../../../../validations";
import {
  AbrBarLogo,
  InputField,
  Button,
  AutocompleteInput,
  Wrapper,
  Typography,
} from "../../../../components";
import {
  IranStatesData,
  IranCitiesWithState,
  IranCitiesData,
} from "../../../../json";
import { funcCheckCityState } from "../../../../helper";
import { toast } from "react-toastify";

const ThirdStep = ({ next, prev, values }) => {
  const [stateValue, setStateValue] = useState("");

  // filter city by state
  const filteredCity = useMemo(() => {
    if (!Boolean(stateValue)) return IranCitiesData;
    else
      return IranCitiesWithState.filter(
        ({ state }) => state === stateValue
      ).map(({ label }) => label);
  }, [stateValue]);

  // handle submit form
  const handleSubmitForm = (values) => {
    const isCityExistOnState = funcCheckCityState(values.state, values.city);
    if (!isCityExistOnState)
      toast.warning(`شهر ${values.city} در استان ${values.state} وجود ندارد`);
    else {
      next(values);
    }
  };

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
        validationObj={company_registerThirdStepValidate}
        handleSubmit={handleSubmitForm}
      >
        <AutocompleteInput
          inputProps={{
            name: "state",
            label: "استان",
            type: "text",
          }}
          options={IranStatesData}
          getValue={setStateValue}
          isOptionEqualToValue={(option, value) => option !== value}
          mgTop="5"
        />

        <AutocompleteInput
          inputProps={{
            name: "city",
            label: "شهر",
            type: "text",
          }}
          options={filteredCity}
          isOptionEqualToValue={(option, value) => option !== value}
          mgTop="5"
        />

        <InputField
          type="text"
          label="آدرس شرکت"
          variant="outlined"
          name="address"
          mgTop="5"
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

export default ThirdStep;
