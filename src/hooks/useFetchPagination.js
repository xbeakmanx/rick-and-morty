import { useState, useEffect } from "react";
import { getNumbersString } from "../services/getNumberString";

export const useFetchPagination = () => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [dataNumbers, setDataNumbers] = useState({ n1: 1, n2: 10 });

  useEffect(() => {
    (async () => {
      try {
        setIsFetching(true);
        const res = await fetch(
          `https://rickandmortyapi.com/api/character/${getNumbersString(
            dataNumbers.n1,
            dataNumbers.n2
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
  }, [dataNumbers]);

  return {
    data,
    isFetching,
    n1: dataNumbers.n1,
    n2: dataNumbers.n2,
    setData,
    setDataNumbers,
  };
};
