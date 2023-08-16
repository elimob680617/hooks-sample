import { useState } from "react";

const usePopover = (id) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleToggle = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isOpen = !!anchorEl;

  return {
    anchorEl,
    open: isOpen,
    id: isOpen ? id : undefined,
    handleToggle,
    handleClick,
    handleClose,
    popoverProps: { id, open: isOpen, anchorEl, onClose: handleClose },
  };
};

export default usePopover;

// ? this hook handles Mui popover props functionalities
