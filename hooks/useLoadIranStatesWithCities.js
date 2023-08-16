import { useEffect, useState } from "react";

const useLoadIranStatesWithCities = () => {
  const [statesWithCities, setStatesWithCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    import("data/iran-states-with-cities.json").then((cities) => {
      setStatesWithCities(cities.default);
      setIsLoading(false);
    });
  }, []);

  return { statesWithCities, isLoading };
};

export default useLoadIranStatesWithCities;

// ? this hook used for lazy loading json file : iran-states-with-cities.json
