import { useState } from "react";

export function useHandleFavorite(data, handleClick) {
  const [values, setValues] = useState(data || []);
  const [error, setError] = useState(false);

  const handleClickFavorite = (data) => {
    if (values.some((el) => el.id === data) && values.length <= 5) {
      const removeArray = values.filter((el2) => el2.id !== data);
      setValues(removeArray);
      handleClick("favorites", removeArray);
      setError(false);
    } else if (values.length === 5) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    } else {
      const addArray = [...values, { id: data }];
      setValues(addArray);
      handleClick("favorites", addArray);
      setError(false);
    }
  };

  return { values, error, setError, handleClickFavorite };
}
