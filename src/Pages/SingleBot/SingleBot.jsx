import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { fakeBot } from "../../Data/fakeBot";
import { RiSendPlaneFill } from "react-icons/ri";

import "./SingleBot.scss";

const SingleBot = () => {
  const { id } = useParams();
  const bot = fakeBot.find((bot) => bot.id === parseInt(id));

  const [text, setText] = useState("");
  const [value, setValue] = useState("");

  const handleText = (e) => setText(e.target.value);

  const handleForm = (e) => {
    e.preventDefault();
    text && setValue(text);
    setText("");
  };

  return (
    <div className="singleBot">
      <h3 className="bot_title">{bot.name}</h3>
      <p className="description">{bot.description}</p>
      <form className="form_contain" onSubmit={handleForm}>
        <div className="section_text">
          <textarea
            type="text"
            value={text.charAt(0).toUpperCase() + text.slice(1)}
            onChange={handleText}
            className="text"
            placeholder="Entrer votre text ..."
          />
          <button type="submit" className="button_text">
            <RiSendPlaneFill className="send" />
          </button>
        </div>
        <div className="discuss">
          <p>{value}</p>
        </div>
      </form>
    </div>
  );
};

export default SingleBot;
