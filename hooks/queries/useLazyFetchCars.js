import { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";

import { GET_CARS } from "services/queries";

import useBool from "../useBool";

export default () => {
  const { bool: isEnabled, setTrue: setEnabled } = useBool();
  const [loadCars, { data, loading }] = useLazyQuery(GET_CARS);

  useEffect(() => {
    if (isEnabled) loadCars();
  }, [isEnabled, loadCars]);

  return { enableFetch: setEnabled, data, loading };
};

// ? this hook is used to lazy load : GET_CARS
// ? and mostly it's used in autocompletes when user focuses
