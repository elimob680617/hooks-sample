import { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";

import { GET_CARGO_PACKING_TYPES } from "services/queries";

import useBool from "../useBool";

export default () => {
  const { bool: isEnabled, setTrue: setEnabled } = useBool();
  const [loadCargoPackingTypes, { data, loading }] = useLazyQuery(
    GET_CARGO_PACKING_TYPES
  );

  useEffect(() => {
    if (isEnabled) loadCargoPackingTypes();
  }, [isEnabled, loadCargoPackingTypes]);

  return { enableFetch: setEnabled, data, loading };
};

// ? this hook is used to lazy load : GET_CARGO_PACKING_TYPES
// ? and mostly it's used in autocompletes when user focuses
