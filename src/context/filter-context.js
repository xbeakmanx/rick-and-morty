import { useHandleFilter } from "hooks/useHandleFilter";
import { useContext, createContext } from "react";

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
