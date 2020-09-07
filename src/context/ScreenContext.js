import React, { createContext, useState } from "react";

export const ScreenContext = createContext();

const ScreenContextProvider = (props) => {
  const [screen, setScreen] = useState(false);

  const screenHandler = () => {
    setScreen(!screen);
  };

  return (
    <ScreenContext.Provider value={{ screen, screenHandler }}>
      {props.children}
    </ScreenContext.Provider>
  );
};

export default ScreenContextProvider;
