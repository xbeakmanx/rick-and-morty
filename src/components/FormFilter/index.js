import { Button, Title } from "..";
import { useFormFilter } from "context/filter-context";
import { useCheckBox } from "hooks/useCheckbox";
import Checkbox from "./components/Checkbox";

export default function FormFilter() {
  const { inputProps, setValues, values, onSave } = useFormFilter();
  const { filterValues, handleCheckbox } = useCheckBox(setValues, values);

  return (
    <>
      <div className="formFilter">
        <Title>Select filters</Title>
        <Checkbox handleCheckbox={handleCheckbox} filterValues={filterValues} />
        <div className="formFilter__grid">
          {filterValues.map((el) => {
            const findValue = values.find((value) => el.id === value.id);
            return (
              <input
                key={el.id + 20}
                onChange={(e) =>
                  inputProps.onChange(e.target.value, findValue.id)
                }
                value={findValue.value}
                className="formFilter__input"
                type="text"
                placeholder={el.name}
              />
            );
          })}
        </div>

        <div className="formFilter__boxBtn">
          <Button
            className="formFilter__btn"
            onClick={() => {
              onSave();
            }}
            disabled={values.length === 0 ? true : false}
          >
            Search
          </Button>
        </div>
      </div>
    </>
  );
}
