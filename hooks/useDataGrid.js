import { useMemo, useState } from "react";

const useDataGrid = (props = { data: [] }) => {
  const { data } = props;

  const [sort, setSort] = useState({
    isActive: false,
    fieldName: "",
    mode: "",
    type: "",
  });

  // * sort data
  const sortedData = useMemo(() => {
    if (sort.isActive) {
      switch (sort.type) {
        case "dateTime":
          return data.sort((a, b) => {
            if (sort.mode === "asc")
              return new Date(b[sort.fieldName]) - new Date(a[sort.fieldName]);
            if (sort.mode === "desc")
              return new Date(a[sort.fieldName]) - new Date(b[sort.fieldName]);
          });
        case "number":
          return data.sort((a, b) => {
            if (sort.mode === "asc")
              return b[sort.fieldName] - a[sort.fieldName];
            if (sort.mode === "desc")
              return a[sort.fieldName] - b[sort.fieldName];
          });
        default:
          return data.sort((a, b) => {
            if (sort.mode === "asc")
              return a[sort.fieldName].localeCompare(b[sort.fieldName]);
            if (sort.mode === "desc")
              return b[sort.fieldName].localeCompare(a[sort.fieldName]);
          });
      }
    }

    return data;
  }, [data, sort]);

  return { sort, setSort, data: sortedData };
};

export default useDataGrid;

// ? this hook handles data grid functionalities
// ? such as sorting data for now
