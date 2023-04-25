import { useState } from "react";
import { filterParamsString } from "../services/getFilterParamsString";

export function useFormFilter() {
  const [values, setValues] = useState([
    { id: "name", name: "Name", value: "" },
  ]);
  const [activeSearch, setActiveSearch] = useState("");

  function handleChange(e, id) {
    const index = values.findIndex((item) => item.id === id);
    const updatedItem = { ...values[index], value: e };
    const updatedItems = [...values];
    updatedItems[index] = updatedItem;
    setValues(updatedItems);
  }
  function handleFilter() {
    if (values.length) {
      setActiveSearch(filterParamsString(values));
    }
  }

  const inputProps = {
    onChange: handleChange,
    onSave: handleFilter,
  };

  return { inputProps, activeSearch, setValues, values };
}
