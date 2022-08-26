import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaDesktop, FaSearch } from "react-icons/fa";
import { TbMessageCircle } from "react-icons/tb";
import { BotContext } from "../../Context/botContext";
import "./Footer.scss";

const Footer = () => {
  const { search, setSearch } = useContext(BotContext);

  
  return (
    <footer>
      <ul className="icons_contain">
        <Link to="/" className="icons" onClick={() => setSearch(false)}>
          <FaDesktop />
        </Link>
        <li className="icons">
          <TbMessageCircle />
        </li>
        <li className="icons" onClick={() => setSearch(!search)}>
          <FaSearch />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
