import ShareIcon from "components/Svg/share";
import { useHandleCopy } from "hooks/useHandleCopy";
import { memo, useState } from "react";

function Share({ id }) {
  const { copied, handleCopy } = useHandleCopy();
  console.log(copied);

  return (
    <>
      <div className="share" onClick={() => handleCopy(`character/${id}`)}>
        <ShareIcon />
        {copied ? <p className="share__text">Copied!</p> : null}
      </div>
    </>
  );
}

export default memo(Share);
