import { useCallback, useState } from "react";

const useHttpReq = (fetchFunc) => {
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);

  const httpReq = useCallback(
    async (
      args = { payload: null, onSuccess: () => {}, onError: () => {} }
    ) => {
      // ? set fetching states
      setIsLoading(true);
      setIsError(false);
      setData(null);
      setIsSuccessful(false);

      try {
        const resault = await fetchFunc(args.payload);

        // call onSuccess function
        args.onSuccess(resault);

        // ? set fetching states
        setIsLoading(false);
        setIsError(false);
        setData(resault.data);
        setIsSuccessful(true);
      } catch (error) {
        // call onError function
        args.onError(error);

        // ? set fetching states
        setIsLoading(false);
        setIsError(true);
        setData(null);
        setIsSuccessful(false);
      }
    },
    [fetchFunc]
  );

  return { httpReq, data, isLoading, isError, isSuccessful };
};

export default useHttpReq;

// ? this hook accepts a function that returns promise
// ? and provides functionalities to handle http request better
