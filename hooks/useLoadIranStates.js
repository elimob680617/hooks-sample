import { useEffect, useState } from "react";

const useLoadIranStates = () => {
  const [states, setStates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    import("data/iran-states.json").then((states) => {
      setStates(states.default);
      setIsLoading(false);
    });
  }, []);

  return { states, isLoading };
};

export default useLoadIranStates;

// ? this hook used for lazy loading json file : iran-states.json
