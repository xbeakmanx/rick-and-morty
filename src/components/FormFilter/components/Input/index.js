export default function Input({ idKey, value, id, name, onChange }) {
  return (
    <input
      key={idKey + 20}
      onChange={(e) => onChange(e.target.value, id)}
      value={value}
      className="formFilter__input"
      type="text"
      placeholder={name}
    />
  );
}
