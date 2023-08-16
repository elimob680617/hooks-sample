import { useState } from "react";

const usePasswordInput = (type) => {
  const [showPassword, setShowPassword] = useState(Boolean(type === "text"));

  // handle toggle show password
  const togglePassword = () => setShowPassword((prevBool) => !prevBool);

  return { showPassword, togglePassword };
};

export default usePasswordInput;
