import { useState } from "react";
import { Button, Card, Grid, Loader, Title } from "../../components";
import { useFetchPagination } from "../../hooks/useFetchPagination";

export default function Paginator({ dataNumbers, setDataNumbers, isFetching }) {
  return (
    <>
      <div className="home__flexButton">
        <Button
          disabled={dataNumbers.n1 <= 1 ? true : false || isFetching}
          onClick={() =>
            setDataNumbers({
              n1: dataNumbers.n1 - 10,
              n2: dataNumbers.n2 - 10,
            })
          }
        >
          Atrás
        </Button>
        <Button
          onClick={() =>
            setDataNumbers({
              n1: dataNumbers.n1 + 10,
              n2: dataNumbers.n2 + 10,
            })
          }
        >
          Siguiente
        </Button>
      </div>
    </>
  );
}
