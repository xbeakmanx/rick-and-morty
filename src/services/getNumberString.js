export const getNumbersString = (n1, n2) => {
  let numbersString = "";
  for (let i = n1; i <= n2; i++) {
    numbersString += `${i},`;
  }
  numbersString = numbersString.slice(0, -1);
  return numbersString;
};
