export default function Input({ value, id, name, onChange, ...rest }) {
  return (
    <input
      {...rest}
      onChange={(e) => onChange(e.target.value, id)}
      value={value}
      className="formFilter__input"
      type="text"
      placeholder={name}
    />
  );
}
