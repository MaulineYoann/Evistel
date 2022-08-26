import React, { useContext} from "react";
import { Link } from "react-router-dom";
import { BotContext } from "../../Context/botContext";
import "./Bots.scss";

const Bots = ({ bots, directory }) => {
  
  const { setSearch, setSearchTerm } = useContext(BotContext);

  const handleClick = () => {
    setSearchTerm("");
    setSearch(false);
  };

  return (
    <Link
      to={`/bots/${bots.id}`}
      className={directory ? "directory_bots" : "carrousel_bots"}
      onClick={() => handleClick}
    >
      <div className="image" style={{ backgroundImage: `url(${bots.url})` }}>
        <p className="bots_name">{bots.name}</p>
      </div>
    </Link>
  );
};

export default Bots;
