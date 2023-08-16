import { useState } from "react";

const useBool = (initialState = false) => {
  const [bool, setBool] = useState(initialState);

  // * Set To True
  const setTrue = () => setBool(true);

  // * Set To False
  const setFalse = () => setBool(false);

  // * toggle bool
  const toggle = () => setBool((prevState) => !prevState);

  return { bool, setTrue, setFalse, toggle, setBool };
};

export default useBool;

// ? this hook is making easy to work with boolean states
// ? by returning functions that handles setting true the state or setting false
// ? and toggleing the boolean
