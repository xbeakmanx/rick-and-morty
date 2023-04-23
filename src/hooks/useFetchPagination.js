import { useState, useEffect } from "react";
import { getNumbersString } from "../services/getNumberString";

export const useFetchPagination = (n1, n2) => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        setIsFetching(true);
        const res = await fetch(
          `https://rickandmortyapi.com/api/character/${getNumbersString(
            n1,
            n2
          )}`
        );
        const dataRes = await res.json();
        setData(dataRes);
        setIsFetching(false);
      } catch (error) {
        setData([]);
        setIsFetching(false);
      }
    })();
  }, [n1, n2]);

  return { data, isFetching };
};
