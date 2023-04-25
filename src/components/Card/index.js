import { Title } from "..";
import Heart from "pages/Home/components/Heart";
import { useState } from "react";

export default function Card({
  id,
  name,
  species,
  image,
  alt,
  episodes,
  status,
}) {
  return (
    <>
      <div className={`card relative`}>
        <Heart id={id} />
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
