import { useMemo } from "react";

import useLoadIranStatesWithCities from "./useLoadIranStatesWithCities";

const useHandleStateAndCityAutocomplete = (options) => {
  const { stateValue } = options;

  const { statesWithCities } = useLoadIranStatesWithCities();

  return useMemo(() => {
    if (!stateValue) return [];
    else {
      return statesWithCities.filter(({ name }) => name === stateValue)?.[0]
        ?.cities;
    }
  }, [stateValue, statesWithCities]);
};

export default useHandleStateAndCityAutocomplete;

// ? this hook accepts state as arg and filters cities
// ? based on state and returns states cities
