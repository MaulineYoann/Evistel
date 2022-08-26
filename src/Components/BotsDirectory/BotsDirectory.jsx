import React, { useContext} from "react";
import { BotContext } from "../../Context/botContext";
import Bots from "../Bots/Bots";
import "./BotsDirectory.scss";

const BotsDirectory = ({ categories }) => {
  const { botRequest } = useContext(BotContext);

  switch (categories) {
    case "all":
      return (
        <aside className="botsDirectory">
          {botRequest
            .sort(() => Math.random() - 0.5)
            .map((bots) => (
              <Bots key={bots.id} bots={bots} directory={true} />
            ))}
        </aside>
      );
    case categories:
      return (
        <aside className="botsDirectory">
          {botRequest
            .filter((bots) => bots.categories === categories)
            .map((bots) => (
              <Bots key={bots.id} bots={bots} directory={true} />
            ))}
        </aside>    
      );
      default: console.log(categories)
  }
 
};

export default BotsDirectory;
