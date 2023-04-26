import { useHandleFilter } from "hooks/useHandleFilter";
import { useState, useContext, createContext } from "react";
import { filterParamsString } from "../services/getFilterParamsString";

const FilterContext = createContext();

function FilterProvider(props) {
  const {
    activeSearch,
    handleFilter,
    inputProps,
    setActiveSearch,
    setShowModal,
    showModal,
    setValues,
    values,
  } = useHandleFilter();

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
        setActiveSearch,
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
