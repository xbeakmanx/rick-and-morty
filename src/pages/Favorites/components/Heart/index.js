import HeartIcon from "components/Svg/heart";
import HeartIconFull from "components/Svg/heartfull";
import { useFavorite } from "context/favorite-context";
import { memo } from "react";

function Heart({ id }) {
  const { handleClickFavorite, values } = useFavorite();
  return (
    <>
      <div className="card__heart" onClick={() => handleClickFavorite(id)}>
        {values.some((el) => el.id === id) ? <HeartIconFull /> : <HeartIcon />}
      </div>
    </>
  );
}

export default memo(Heart);
