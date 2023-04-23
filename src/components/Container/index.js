export default function Container({ children }) {
  return (
    <div className="containerComponent containerComponent--background">
      <div className="containerComponent__content">{children}</div>
    </div>
  );
}
