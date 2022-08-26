import React from "react";
import logo from "..//../assets/images/Evistel.png";
import { useNavigate } from "react-router-dom";
import "./Loader.scss";

const Loader = () => {
  const navigate = useNavigate();
  const timer = 1000;

  setTimeout(() => {
    navigate("./home", { replace: true });
  }, timer);

  return (
    <main className="Loader">
      <img src={logo} className="loader-img" alt='logo'/>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </main>
  );
};

export default Loader;
