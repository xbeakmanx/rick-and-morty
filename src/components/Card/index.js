import { Title } from "..";

export default function Card({ name, species, image, alt }) {
  return (
    <>
      <div className={`card`}>
        <div className="card__grid">
          <img src={image} alt={alt} className="card__image" />
          <div className="col-span-2">
            <Title>{name}</Title>
          </div>
        </div>
      </div>
    </>
  );
}
