export const dataFilters = [
  {
    name: "Name",
    id: "name",
    type: "input",
  },
  {
    name: "Status",
    id: "status",
    type: "select",
    options: [
      {
        value: "alive",
        label: "Alive",
      },
      {
        value: "dead",
        label: "Dead",
      },
      {
        value: "unknown",
        label: "Unknown",
      },
    ],
  },
  {
    name: "Species",
    id: "species",
    type: "input",
  },
  {
    name: "Type",
    id: "type",
    type: "input",
  },
  {
    name: "Gender",
    id: "gender",
    type: "select",
    options: [
      {
        value: "female",
        label: "Female",
      },
      {
        value: "male",
        label: "Male",
      },
      {
        value: "genderless",
        label: "Genderless",
      },
      {
        value: "unknown",
        label: "Unknown",
      },
    ],
  },
];

export const TYPES = { SELECT: "select", INPUT: "input" };
