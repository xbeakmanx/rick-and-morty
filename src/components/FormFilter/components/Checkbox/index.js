import { dataFilters } from "../../dataFilters";

export default function Checkbox({ handleCheckbox, filterValues }) {
  return (
    <ul className="checkbox">
      {dataFilters.map((data) => (
        <li className="checkbox__li" key={data.id}>
          <div className="checkbox__container-li">
            <input
              onChange={() => handleCheckbox(data)}
              checked={filterValues.some((el) => el.id === data.id)}
              id={data.id}
              type="checkbox"
              value=""
              className="checkbox__checkbox peer"
            />
            <label htmlFor={data.id} className="checkbox__label">
              {data.name}
            </label>
          </div>
        </li>
      ))}
    </ul>
  );
}
