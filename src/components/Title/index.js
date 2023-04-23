export default function Title({ children, className }) {
  return <h1 className={`title ${className}`}>{children}</h1>;
}
