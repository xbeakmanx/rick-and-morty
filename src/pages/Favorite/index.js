import { Card, Grid, Loader, Title } from "components";
import EmptyData from "components/EmptyData";
import { useFavorite } from "context/favorite-context";
import { useFetchById } from "hooks/useFetchById";
import { getNumbersString } from "services/getNumberString";

export default function Favorite() {
  const { values } = useFavorite();
  const { data } = useFetchById(getNumbersString(values));
  const { characters, isFetching } = data;
  return (
    <>
      <Title className="mt-5">Favorite characters</Title>
      {isFetching ? (
        <Loader number={values.length} />
      ) : characters.length === 0 ? (
        <EmptyData text={`You don't have any favorite characters`} />
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
        </>
      )}
    </>
  );
}
