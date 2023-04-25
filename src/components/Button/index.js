export default function Button({ children, className, ...rest }) {
  return (
    <button className={`btn ${className}`} {...rest} type="button">
      {children}
    </button>
  );
}
