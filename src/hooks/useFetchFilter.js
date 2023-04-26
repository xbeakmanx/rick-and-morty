import { useState, useEffect } from "react";
import { splice } from "../services/splice";

export const useFetchFilter = (
  currentPage,
  currentPagePagination,
  activeSearch
) => {
  const [data, setData] = useState({
    activeNextPage: true,
    activePreviousPage: false,
    characters: [],
    isFetching: true,
    currentPaginator: 1,
  });
  useEffect(() => {
    (async () => {
      try {
        setData({ ...data, isFetching: true });
        const res = await fetch(
          `https://rickandmortyapi.com/api/character?page=${currentPage}${activeSearch}`
        );
        const dataRes = await res.json();
        const dataCharacters =
          currentPagePagination === 1
            ? splice(dataRes.results, 0, 10)
            : splice(dataRes.results, 10, 20);
        setData({
          ...data,
          characters: dataCharacters,
          isFetching: false,
          totalPages: dataRes.info.pages,
        });
      } catch (error) {
        setData({ isFetching: false });
      }
    })();
    // eslint-disable-next-line
  }, [currentPage, currentPagePagination, activeSearch]);

  return { data, setData };
};
