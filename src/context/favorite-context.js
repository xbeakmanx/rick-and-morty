import { useLocalStorage } from "hooks/useLocalStorage";
import { useState, useContext, createContext } from "react";

const FavoriteContext = createContext();

function FavoriteProvider(props) {
  const { data, handleClick } = useLocalStorage("favorites");
  const [values, setValues] = useState(data || []);

  const handleClickFavorite = (data) => {
    if (values.some((el) => el.id === data)) {
      const removeArray = values.filter((el2) => el2.id !== data);
      setValues(removeArray);
      handleClick("favorites", removeArray);
    } else {
      const addArray = [...values, { id: data }];
      setValues(addArray);
      handleClick("favorites", addArray);
    }
  };

  return (
    <FavoriteContext.Provider
      value={{
        setValues,
        values,
        handleClickFavorite,
      }}
      {...props}
    />
  );
}

function useFavorite() {
  const context = useContext(FavoriteContext);

  if (context === undefined) {
    throw new Error("useFavorite must be used within a FavoriteProvider");
  }
  return context;
}

export { FavoriteProvider, useFavorite };
