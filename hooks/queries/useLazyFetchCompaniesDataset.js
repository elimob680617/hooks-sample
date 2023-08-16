import { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";

import { GET_COMPANIES_DATASET } from "services/queries";

import useBool from "../useBool";

export default () => {
  const { bool: isEnabled, setTrue: setEnabled } = useBool();
  const [loadCompaniesDataset, { data, loading }] = useLazyQuery(
    GET_COMPANIES_DATASET
  );

  useEffect(() => {
    if (isEnabled) loadCompaniesDataset();
  }, [isEnabled, loadCompaniesDataset]);

  return { enableFetch: setEnabled, data, loading };
};

// ? this hook is used to lazy load : GET_COMPANIES_DATASET
// ? and mostly it's used in autocompletes when user focuses
