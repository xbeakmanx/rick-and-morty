import { Grid } from "..";
import CardLoader from "./CardLoader";

export default function Loader({ number }) {
  const n = number || 10;
  return (
    <Grid>
      {[...Array(n)].map((e, i) => (
        <CardLoader key={i} />
      ))}
    </Grid>
  );
}
