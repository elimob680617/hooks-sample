import { useSnackbar as useNotistackSnackbar } from "notistack";

const useSnackbar = () => {
  const { enqueueSnackbar, closeSnackbar } = useNotistackSnackbar();

  // default options props
  const defaultOptions = {
    title: "",
    desc: "",
  };

  // create one instance function from enqueueSnackbar
  const callSnack = (options = { ...defaultOptions, theme: "" }) => {
    return enqueueSnackbar({
      variant: "default",
      theme: options.theme,
      title: options.title,
      desc: options.desc,
    });
  };

  // declare diffrent theme of snackbar from instance
  const snack = {
    success: (options = defaultOptions) => {
      return callSnack({ ...options, theme: "success" });
    },
    error: (options = defaultOptions) => {
      return callSnack({ ...options, theme: "error" });
    },
    warning: (options = defaultOptions) => {
      return callSnack({ ...options, theme: "warning" });
    },
  };

  return { snack, closeSnack: closeSnackbar };
};

export default useSnackbar;

// ? this hook is provides functionalities for working with snackbar
