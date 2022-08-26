import React, { useState, useContext } from "react";
import { BotContext } from "../../Context/botContext";
import Carousel from "../../Components/carousel/Carousel";
import Search from "../../Components/Search/Search";
import evistel from "../../assets/images/Evistel.png";
import "./Home.scss";
import BotsDirectory from "../../Components/BotsDirectory/BotsDirectory";

const Home = () => {

  const { search } = useContext(BotContext);
  const [categories, setCategories] = useState("all");
  const handleCategories = (e) => setCategories(e.target.value);


  return (
    <main className="home">
      <div className="logo_contain">
        <img className="logo" src={evistel} alt="logo" />
      </div>
      <h3 className="secondary_title">Nos Bots :</h3>
      <Carousel />
      <div className="filter">
        <label className="label" htmlFor="category">
          Selectionner une catégorie :
        </label>
        <select name="categories" id="bots" onChange={handleCategories}>
          <option value="all">Tous</option>
          <option value="1">catégorie 1</option>
          <option value="2">catégorie 2</option>
          <option value="3">catégorie 3</option>
        </select>
      </div>
      <div className="home_bots">
        <BotsDirectory categories={categories} />
      </div>
      {search && <Search className="search" />}
    </main>
  );
};

export default Home;
