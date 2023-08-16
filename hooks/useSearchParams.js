import { useSearchParams } from "react-router-dom";

import { getAllUrlParams } from "utils";

export default () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const params = getAllUrlParams(searchParams);

  return [params, setSearchParams];
};

// ? this hook simplifies the useSearchParams of
// ? react router dom and returns resolved params
// ? and works exacly like useSearchParams
