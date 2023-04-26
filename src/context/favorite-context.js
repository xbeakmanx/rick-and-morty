import { useHandleFavorite } from "hooks/useHandleFavorite";
import { useLocalStorage } from "hooks/useLocalStorage";
import { useContext, createContext } from "react";

const FavoriteContext = createContext();

function FavoriteProvider(props) {
  const { data, handleClick } = useLocalStorage("favorite");
  const { values, setValues, error, setError, handleClickFavorite } =
    useHandleFavorite(data, handleClick);
  return (
    <FavoriteContext.Provider
      value={{
        setValues,
        values,
        handleClickFavorite,
        error,
        setError,
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
