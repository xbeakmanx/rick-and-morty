export default function Logo({ navigate }) {
  return (
    <div onClick={() => navigate("/")} className="navbar__container--image">
      <img
        src="/rick-and-morty.png"
        className="narvar__image"
        alt="Flowbite Logo"
      />
    </div>
  );
}
