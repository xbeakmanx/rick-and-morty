export const getNumbersString = (data) => {
  let numbersString = "";
  for (let i = 0; i < data.length; i++) {
    numbersString += `${data[i].id},`;
  }
  numbersString = numbersString.slice(0, -1);
  return numbersString;
};
