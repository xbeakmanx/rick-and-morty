export function useLocalStorage(key) {
  let parsedData = [];
  const localStorage = window.localStorage.getItem(key);
  function handleClick(key, data) {
    window.localStorage.setItem(key, JSON.stringify(data));
    parsedData = data;
  }

  parsedData = JSON.parse(localStorage);

  return { data: parsedData, handleClick };
}
