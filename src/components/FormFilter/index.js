import { Button, Title } from "..";
import { useFormFilter } from "context/filter-context";
import { useCheckBox } from "hooks/useCheckbox";
import Checkbox from "./components/Checkbox";
import { TYPES } from "./dataFilters";
import Input from "./components/Input";
import Select from "./components/Select";
import { useNavigate } from "react-router-dom";

export default function FormFilter() {
  const { inputProps, setValues, values, onSave } = useFormFilter();
  const { filterValues, handleCheckbox } = useCheckBox(setValues, values);
  const isValued = values.filter((el) =>
    el.value.length > 0 ? true : false
  ).length;
  const navigate = useNavigate();
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
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    onSave();
                  }
                }}
                key={el.id + 20}
                value={findValue.value}
                id={findValue.id}
                name={el.name}
                onChange={inputProps.onChange}
              />
            ) : (
              <Select
                key={el.id + 20}
                options={el.options}
                id={findValue.id}
                onChange={inputProps.onChange}
              />
            );
          })}
        </div>

        <div className="formFilter__boxBtn">
          <div className="formFilter__textRequired">
            {isValued !== values.length ? "Complete required fields" : null}
          </div>
          <Button
            className="formFilter__btn"
            onClick={() => {
              onSave();
              navigate("/");
            }}
            disabled={isValued !== values.length ? true : false}
          >
            Search
          </Button>
        </div>
      </div>
    </>
  );
}
