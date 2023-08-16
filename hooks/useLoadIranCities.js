import { useEffect, useState } from "react";

const useLoadIranCities = () => {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    import("data/iran-cities.json").then((cities) => {
      setCities(cities.default);
      setIsLoading(false);
    });
  }, []);

  return { cities, isLoading };
};

export default useLoadIranCities;

// ? this hook used for lazy loading json file : iran-cities.json
