import { ButtonOutline, Card, Grid } from "components";
import ButtonsPagination from "../ButtonsPagination";
import Alert from "../Alert";

export default function Content({
  characters,
  data,
  setData,
  setDataPages,
  dataPages,
  activeSearch,
  setActiveSearch,
}) {
  return (
    <>
      {activeSearch ? (
        <ButtonOutline onClick={() => setActiveSearch("")}>Reset</ButtonOutline>
      ) : null}
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
      <Alert />
      <ButtonsPagination
        data={data}
        setData={setData}
        setDataPages={setDataPages}
        dataPages={dataPages}
      />
    </>
  );
}
