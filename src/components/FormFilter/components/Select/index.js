export default function Select({ idKey, options, id, onChange }) {
  return (
    <select
      className="formFilter__input"
      placeholder="seleccione"
      onChange={(e) => onChange(e.target.value, id)}
    >
      <option value="">Seleccione</option>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
