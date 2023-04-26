export default function Select({ idKey, options, id, onChange }) {
  return (
    <select
      className="formFilter__input"
      placeholder="Select"
      onChange={(e) => onChange(e.target.value, id)}
    >
      <option value="">Select</option>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
