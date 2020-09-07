import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState(false);

  const themeHandler = () => {
    setTheme(!theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, themeHandler }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
