import { useEffect } from "react";

const useOutsideClick = (ref, state, eventHandler) => {
  // ? keep track clicks
  useEffect(() => {
    const handleOutsideEvent = (event) => {
      if (state && ref.current && !ref.current.contains(event.target))
        eventHandler();
    };

    document.addEventListener("click", handleOutsideEvent);

    return () => document.removeEventListener("click", handleOutsideEvent);
  }, [ref, state, eventHandler]);

  return null;
};

export default useOutsideClick;

// ? this hook tracks user is clicking the outside of a element with ref to that element
// ? and executes given function as arg when is clicking outside
