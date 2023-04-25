import { FavoriteProvider } from "context/favorite-context";
import { FilterProvider } from "context/filter-context";
import Router from "./routes";

function App() {
  return (
    <FilterProvider>
      <FavoriteProvider>
        <Router />
      </FavoriteProvider>
    </FilterProvider>
  );
}

export default App;
