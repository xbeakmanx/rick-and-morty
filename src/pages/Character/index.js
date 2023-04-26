import { ButtonHome, Card, Loader } from "components";
import EmptyData from "components/EmptyData";
import { useFetchById } from "hooks/useFetchById";
import { useParams } from "react-router-dom";

export default function Character() {
  const { id } = useParams();
  const { data } = useFetchById(id);
  const { characters, isFetching } = data;
  return (
    <div className="cardSimple mt-24">
      <ButtonHome />
      {isFetching ? (
        <Loader number={1} classNameGrid="grid-cols-1" classNameCard="h-96" />
      ) : characters.error ? (
        <EmptyData text={`Character not found`} />
      ) : (
        <>
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
              el={el}
            />
          ))}
        </>
      )}
    </div>
  );
}
