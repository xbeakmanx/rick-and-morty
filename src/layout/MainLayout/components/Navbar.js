import { Button } from "components";
import HeartIcon from "components/Svg/heart";
import MenuIcon from "components/Svg/menuIcon";
import SearchIcon from "components/Svg/searchIcon";
import { useFormFilter } from "context/filter-context";
import ButtonFilter from "pages/Home/components/ButtonFilter";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { items } from "../items";
import Item from "./Item";
import Logo from "./Logo";

export default function Navbar() {
  const navigate = useNavigate();
  const [expand, setExpand] = useState(false);
  const { setShowModal } = useFormFilter();
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Logo navigate={navigate} />
        <div className="navbar__buttons">
          <ButtonFilter className="navbar__button-filter narvar__button--filter" />

          <Button
            onClick={() => navigate("/favorite")}
            className="navbar__button--heart"
          >
            <div className="navbar__button--icon">
              <HeartIcon />
            </div>
            Favorite
          </Button>
          <button
            onClick={() => setShowModal(true)}
            type="button"
            className="navbar__button--menu"
          >
            <SearchIcon />
          </button>
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
            {items.map((el, index) => (
              <Item
                key={index}
                item={el}
                navigate={navigate}
                setExpand={setExpand}
              />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
