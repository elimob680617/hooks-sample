import { useState } from "react";

import useBool from "./useBool";

const useDatePicker = () => {
  const { bool, setTrue, setFalse } = useBool();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setTrue();
  };

  return { anchorEl, isOpen: bool, handleClick, handleClose: setFalse };
};

export default useDatePicker;

// ? this hook handles date picker component opening and
// ? closing props
