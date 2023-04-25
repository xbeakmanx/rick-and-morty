export const useCheckBox = (setValue, values) => {
  const handleCheckbox = (data) => {
    values.some((el) => el.id === data.id)
      ? setValue(values.filter((el2) => el2.id !== data.id))
      : setValue([...values, { ...data, value: "" }]);
  };

  return { filterValues: values, handleCheckbox };
};
