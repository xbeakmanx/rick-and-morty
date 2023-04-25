import { FilterProvider } from "../../context/filter-context";
import Content from "./components/Content";

export default function Home() {
  return (
    <FilterProvider>
      <Content />
    </FilterProvider>
  );
}
