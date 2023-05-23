import React, { createContext, useState } from "react";


export const TjTest =  createContext();

export const TjTestProvider = (props) => {
  const [selectedAnimeIds,setSelectedAnimeIds] = useState([]);

  return (
    <TjTest.Provider value={{ selectedAnimeIds, setSelectedAnimeIds }}>
      {props.children}
    </TjTest.Provider>
  );
};