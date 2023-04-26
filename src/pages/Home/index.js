import { useState } from "react";
import { Loader, EmptyData, ButtonOutline } from "components";
import { useFormFilter } from "context/filter-context";
import { useFetchFilter } from "hooks/useFetchFilter";
import Content from "./components/Content";
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
  const { characters, isFetching, totalPages, currentPaginator } = data;

  return (
    <>
      {isFetching ? (
        <Loader number={10} />
      ) : !data.characters ? (
        <EmptyData text="There is no data available, please, try again.">
          {activeSearch ? (
            <ButtonOutline
              className={"flex m-auto"}
              onClick={() => {
                setActiveSearch("");
                setData({ ...data, currentPaginator: 1 });
                setDataPages({ currentPage: 1, currentPagePagination: 1 });
              }}
            >
              Reset
            </ButtonOutline>
          ) : null}
        </EmptyData>
      ) : (
        <Content
          characters={characters}
          setData={setData}
          setDataPages={setDataPages}
          data={data}
          activeSearch={activeSearch}
          setActiveSearch={setActiveSearch}
        />
      )}
      <ButtonsPagination
        data={data}
        setData={setData}
        setDataPages={setDataPages}
        dataPages={dataPages}
        totalPages={totalPages * 2 - 1}
        currentPaginator={currentPaginator}
      />
    </>
  );
}
