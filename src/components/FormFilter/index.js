import { Button, Title } from "..";
import { useFormFilter } from "context/filter-context";
import { useCheckBox } from "hooks/useCheckbox";
import Checkbox from "./components/Checkbox";
import { TYPES } from "./dataFilters";
import Input from "./components/Input";
import Select from "./components/Select";

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
            return TYPES.INPUT === el.type ? (
              <Input
                idKey={el.id + 20}
                value={findValue.value}
                id={findValue.id}
                name={el.name}
                onChange={inputProps.onChange}
              />
            ) : (
              <Select
                idKey={el.id + 20}
                options={el.options}
                id={findValue.id}
                onChange={inputProps.onChange}
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
