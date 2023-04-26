import { Title } from "..";
import Heart from "./Heart";
import { useNavigate } from "react-router-dom";
import Share from "./Share";

export default function Card({
  id,
  name,
  species,
  image,
  alt,
  episodes,
  status,
  el,
}) {
  const navigate = useNavigate();
  return (
    <>
      <div className={`card relative `}>
        <Heart id={id} />
        <Share id={id} />
        <div className={el ? "card__grid--simple " : "card__grid "}>
          {image ? (
            <img
              src={image}
              alt={alt}
              className="card__image card__image--pixel"
            />
          ) : (
            <div className="card__image--without" />
          )}

          <div className="col-span-2">
            <Title className="w-10/12 sm:w-auto text-2xl mb-3">{name}</Title>

            <p className="w-10/12 -mb-7 sm:w-auto text-green-400 font-medium text-lg">
              Species: {species}
            </p>
            <p className="text-green-400 font-medium text-lg">
              <br />
              Episodes: {episodes}
              <br />
              Status: {status}
              {el ? (
                <>
                  <br />
                  Origin: {el.origin.name}
                  <br />
                  Location: {el.location.name}
                  <br />
                  Gender: {el.gender}
                  <br />
                </>
              ) : null}
            </p>
            {!el ? (
              <button
                className="card__btn"
                onClick={() => navigate(`/character/${id}`)}
              >
                More info
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
