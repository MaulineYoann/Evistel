import React, { useContext, useRef, useEffect } from "react";
import { BotContext } from "../../Context/botContext";
import "./Search.scss";

const Search = () => {
  const { search, setSearchTerm } = useContext(BotContext);
  const handleTerm = (e) => setSearchTerm(e.target.value);
  const inputEl = useRef(null);

  useEffect(() => {
    search && inputEl.current.focus();
  }, [search]);

  return (
    <div className="search">
      <div className="search_contain">
        <label>Rechercher un bot :</label>
        <input
          ref={inputEl}
          type="text"
          className="search_text"
          onChange={handleTerm}
        />
      </div>
    </div>
  );
};

export default Search;
