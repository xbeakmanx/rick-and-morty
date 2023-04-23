import { useState } from "react";
import { Button, Card, Grid, Loader, Title } from "../../components";
import { useFetchPagination } from "../../hooks/useFetchPagination";
import Paginator from "./Paginator";

export default function Home() {
  const [dataNumbers, setDataNumbers] = useState({ n1: 1, n2: 10 });
  const { data: characters, isFetching } = useFetchPagination(
    dataNumbers.n1,
    dataNumbers.n2
  );
  return (
    <>
      {isFetching ? (
        <Loader />
      ) : characters.error ? (
        <Title>
          Hubo un error al consultar los datos, por favor inténtalo mas tarde
        </Title>
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
              />
            ))}
          </Grid>
          <Paginator
            isFetching
            dataNumbers={dataNumbers}
            setDataNumbers={setDataNumbers}
          />
        </>
      )}
    </>
  );
}
