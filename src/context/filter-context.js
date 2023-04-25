import { useState, useContext, createContext } from "react";
import { filterParamsString } from "../services/getFilterParamsString";

const FilterContext = createContext();

function FilterProvider(props) {
  const [values, setValues] = useState([
    { id: "name", name: "Name", value: "" },
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

  return (
    <FilterContext.Provider
      value={{
        inputProps,
        activeSearch,
        setValues,
        values,
        onSave: handleFilter,
        showModal,
        setShowModal,
      }}
      {...props}
    />
  );
}

function useFormFilter() {
  const context = useContext(FilterContext);

  if (context === undefined) {
    throw new Error("useFormFilter must be used within a FilterProvider");
  }
  return context;
}

export { FilterProvider, useFormFilter };
