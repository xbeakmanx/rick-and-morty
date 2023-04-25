import { Title } from "..";
import Heart from "components/Svg/heart";

export default function Card({ name, species, image, alt, episodes, status }) {
  return (
    <>
      <div className={`card relative`}>
        <div className="card__heart">
          <Heart />
        </div>
        <div className="card__grid">
          {image ? (
            <img src={image} alt={alt} className="card__image" />
          ) : (
            <div className="card__image--without" />
          )}

          <div className="col-span-2">
            <Title>{name}</Title>
            <p className="text-green-400 font-medium">{species}</p>
            <p className="text-green-400 font-medium">Episodes: {episodes}</p>
            <p className="text-green-400 font-medium">Status: {status}</p>
          </div>
        </div>
      </div>
    </>
  );
}
