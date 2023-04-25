import { Title } from "..";

export default function EmptyData() {
  return (
    <div className="emptyData">
      <img
        alt="emptyState"
        src="empty-state.png"
        className="emptyData__image"
      />
      <Title className="emptyData__text">
        There is no data available, please, try again.
      </Title>
    </div>
  );
}
