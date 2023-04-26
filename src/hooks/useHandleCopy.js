import { useState } from "react";

export const useHandleCopy = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (url) => {
    navigator.clipboard.writeText(`${window.location.origin}/${url}`);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return { copied, handleCopy };
};
