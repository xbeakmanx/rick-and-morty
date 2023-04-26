import { useState } from "react";
import { filterParamsString } from "services/getFilterParamsString";

export function useHandleFilter() {
  const [values, setValues] = useState([
    { id: "name", name: "Name", value: "", type: "input" },
  ]);
  const [showModal, setShowModal] = useState(false);
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
      setShowModal(false);
    }
  }

  const inputProps = {
    onChange: handleChange,
  };

  return {
    values,
    setValues,
    showModal,
    setShowModal,
    activeSearch,
    setActiveSearch,
    inputProps,
    handleFilter,
  };
}
