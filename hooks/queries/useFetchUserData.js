import { useQuery } from "@apollo/client";

import { GET_USER_DATA } from "services/queries";

export default () => {
  const query = useQuery(GET_USER_DATA);

  return {
    cargoOwnerId:
      query.data?.getUser?.userprofileUser?.cargoOwnerUserprofile?.id,
    ...query,
  };
};
