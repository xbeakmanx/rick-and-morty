import { useFavorite } from "context/favorite-context";

export default function Alert() {
  const { error, setError } = useFavorite();
  if (!error) return null;
  return (
    <div className="fixed  bottom-14 md:top-24 md:bottom-auto right-4 bg-red-500 rounded-md sm:w-3/4 md:w-1/4 pt-9 pb-2 px-2">
      <div
        onClick={() => setError(false)}
        className="cursor-pointer border-white border absolute top-2 right-2 px-2 rounded-md"
      >
        X
      </div>
      Error! the limit is 5 characters
    </div>
  );
}
