import { ButtonOutline, Card, Grid } from "components";
import Alert from "../Alert";

export default function Content({
  characters,
  data,
  setData,
  setDataPages,
  activeSearch,
  setActiveSearch,
}) {
  return (
    <>
      {activeSearch ? (
        <ButtonOutline
          onClick={() => {
            setActiveSearch("");
            setDataPages({ currentPage: 1, currentPagePagination: 1 });
            setData({ ...data, currentPaginator: 1 });
          }}
        >
          Reset
        </ButtonOutline>
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
    </>
  );
}
