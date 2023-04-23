import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const localStorage = useLocalStorage();

  function handleChange(e) {
    setValue(e.target.value);
  }
  function handleInsertName() {
    if (value) {
      localStorage.insert(value);
    }
  }

  const inputProps = {
    value: value,
    onChange: handleChange,
    onSave: handleInsertName,
  };

  return inputProps;
}
