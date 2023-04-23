export default function Button({ children, ...rest }) {
  return (
    <button className="btn" {...rest} type="button">
      {children}
    </button>
  );
}
