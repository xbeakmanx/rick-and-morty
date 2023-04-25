import { useState } from "react";
import { Card, Grid, Loader, EmptyData, ButtonOutline } from "components";
import { useFormFilter } from "context/filter-context";
import { useFetchFilter } from "hooks/useFetchFilter";
import ButtonsPagination from "./components/ButtonsPagination";

export default function Home() {
  const [dataPages, setDataPages] = useState({
    currentPage: 1,
    currentPagePagination: 1,
  });
  const { activeSearch, setActiveSearch } = useFormFilter();
  const { data, setData } = useFetchFilter(
    dataPages.currentPage,
    dataPages.currentPagePagination,
    activeSearch
  );
  const { characters, isFetching } = data;

  return (
    <>
      {isFetching ? (
        <Loader number={10} />
      ) : !data.characters ? (
        <EmptyData text="There is no data available, please, try again.">
          {activeSearch ? (
            <ButtonOutline
              className={"flex m-auto"}
              onClick={() => setActiveSearch("")}
            >
              Eliminar filtro
            </ButtonOutline>
          ) : null}
        </EmptyData>
      ) : (
        <>
          <Grid>
            {characters.map((el) => (
              <Card
                key={el.id}
                id={el.id}
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
