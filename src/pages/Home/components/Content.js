import { useState } from "react";
import { Card, Grid, Loader } from "components";
import { useFormFilter } from "context/filter-context";
import { useFetchFilter } from "hooks/useFetchFilter";
import ButtonsPagination from "../components/ButtonsPagination";
import ButtonFilter from "./ButtonFilter";
import EmptyData from "../../../components/EmptyData";

export default function Content() {
  const [dataPages, setDataPages] = useState({
    currentPage: 1,
    currentPagePagination: 1,
  });
  const { activeSearch } = useFormFilter();
  const { data, setData } = useFetchFilter(
    dataPages.currentPage,
    dataPages.currentPagePagination,
    activeSearch
  );
  const { characters, isFetching } = data;
  return (
    <>
      <ButtonFilter />
      {isFetching ? (
        <Loader number={10} />
      ) : !data.characters ? (
        <EmptyData />
      ) : (
        <>
          <Grid>
            {characters.map((el) => (
              <Card
                key={el.id}
                name={el.name}
                species={el.species}
                image={el.image}
                alt={el.name}
                episodes={el.episode.length}
                status={el.status}
              />
            ))}
          </Grid>
          <ButtonsPagination
            data={data}
            setData={setData}
            setDataPages={setDataPages}
            dataPages={dataPages}
          />
        </>
      )}
    </>
  );
}
