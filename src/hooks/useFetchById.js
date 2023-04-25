import { useState, useEffect } from "react";

export const useFetchById = (dataIds) => {
  const [data, setData] = useState({
    characters: [],
    isFetching: true,
  });
  useEffect(() => {
    (async () => {
      let res, dataRes;
      try {
        setData({ characters: [], isFetching: true });
        if (dataIds) {
          res = await fetch(
            `https://rickandmortyapi.com/api/character/${dataIds}`
          );
          dataRes = await res.json();
        } else {
          dataRes = [];
        }

        dataRes.id
          ? setData({ characters: [dataRes], isFetching: false })
          : setData({ characters: dataRes, isFetching: false });
      } catch (error) {
        setData({ isFetching: false });
      }
    })();
  }, [dataIds]);

  return { data, setData };
};
