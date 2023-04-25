export const filterParamsString = (values) => {
  let numbersString = "";
  for (let i = 0; i < values.length; i++) {
    numbersString += `&${values[i].id}=${values[i].value}`;
  }
  return numbersString;
};
