import React, { createContext, useState } from "react";
import { fakeBot } from "../Data/fakeBot";

export const BotContext = createContext();

export const BotProvider = ({ children }) => {
  const botRequest = [...fakeBot];
  const [search, setSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <BotContext.Provider
      value={{ botRequest, search, setSearch, searchTerm, setSearchTerm }}
    >
      {children}
    </BotContext.Provider>
  );
};
