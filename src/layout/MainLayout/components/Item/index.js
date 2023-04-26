export default function Item({ item, setExpand, navigate }) {
  return (
    <li className={item.class}>
      <div
        onClick={() => {
          navigate(item.link);
          setExpand(false);
        }}
        className="navbar__items--item"
        aria-current="page"
      >
        {item.name}
      </div>
    </li>
  );
}
