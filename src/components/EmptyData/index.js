import { Title } from "..";

export default function EmptyData({ children, text }) {
  return (
    <div className="emptyData">
      <img
        alt="emptyState"
        src="/empty-state.png"
        className="emptyData__image"
      />
      <Title className="emptyData__text">{text}</Title>
      {children}
    </div>
  );
}
