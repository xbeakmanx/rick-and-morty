import { Button } from "components";
import HeartIcon from "components/Svg/heart";
import MenuIcon from "components/Svg/menuIcon";
import ButtonFilter from "pages/Home/components/ButtonFilter";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [expand, setExpand] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div onClick={() => navigate("/")} className="navbar__container--image">
          <img
            src="/rick-and-morty.png"
            className="narvar__image"
            alt="Flowbite Logo"
          />
        </div>
        <div className="navbar__buttons">
          <ButtonFilter className="navbar__button-filter narvar__button--filter" />

          <Button
            onClick={() => navigate("/favorites")}
            className="navbar__button--heart"
          >
            <div className="navbar__button--icon">
              <HeartIcon />
            </div>
            Favorites
          </Button>
          <button
            onClick={() => setExpand(!expand)}
            type="button"
            className="navbar__button--menu"
          >
            <MenuIcon />
          </button>
        </div>
        <div
          className={`navbar__items ${
            expand ? "block md:hidden" : "hidden md:block"
          }`}
        >
          <ul className="navar__items--container">
            <li>
              <div
                onClick={() => {
                  navigate("/");
                  setExpand(false);
                }}
                className="navbar__items--item"
                aria-current="page"
              >
                Home
              </div>
            </li>
            <li className="md:hidden">
              <div
                onClick={() => {
                  navigate("/favorites");
                  setExpand(false);
                }}
                className="navbar__items--item"
                aria-current="page"
              >
                Favorites
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
