import { useFormikContext } from "formik";

const useField = (name, getValue) => {
  const { errors, touched, setFieldValue, values } = useFormikContext();

  const handleOnChange = (_event, value) => {
    setFieldValue(name, value);
    if (getValue) getValue(value || "");
  };

  const error = touched[name] && errors[name] && String(errors[name]);

  return {
    handleOnChange,
    errorText: error,
    hasError: Boolean(error),
    value: values[name],
  };
};

export default useField;

// ? this hook handles autocomplete component on change event and errors
// ? with help of formik context states
