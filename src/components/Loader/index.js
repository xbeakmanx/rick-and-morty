import { Grid } from "..";
import CardLoader from "./CardLoader";

export default function Loader({ number, classNameGrid, classNameCard }) {
  const n = number || 10;
  return (
    <Grid className={classNameGrid}>
      {[...Array(n)].map((e, i) => (
        <CardLoader classNameCard={classNameCard} key={i} />
      ))}
    </Grid>
  );
}
