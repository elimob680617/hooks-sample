import { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";

import { GET_CARGO_TYPES } from "services/queries";

import useBool from "../useBool";

export default () => {
  const { bool: isEnabled, setTrue: setEnabled } = useBool();
  const [loadCargoTypes, { data, loading }] = useLazyQuery(GET_CARGO_TYPES);

  useEffect(() => {
    if (isEnabled) loadCargoTypes();
  }, [isEnabled, loadCargoTypes]);

  return { enableFetch: setEnabled, data, loading };
};

// ? this hook is used to lazy load : GET_CARGO_TYPES
// ? and mostly it's used in autocompletes when user focuses
