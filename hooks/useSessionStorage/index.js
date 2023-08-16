import { useEffect, useState } from "react";

import getSessionState from "./getSessionState";

const useSessionStorage = (options = { storageName: "", initialValue: {} }) => {
  const [state, setState] = useState(() => {
    return getSessionState(options.storageName, options.initialValue);
  });

  // ? whenever state value changed set new state to session
  useEffect(() => {
    sessionStorage.setItem(options.storageName, JSON.stringify(state));
  }, [state, options.storageName]);

  return [state, setState];
};

export default useSessionStorage;

// ? this hook works exacly like useState hook
// ? but the state value persists in session storage
