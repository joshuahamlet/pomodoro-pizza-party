import React, { useContext } from "react";
import classes from "./MainScreen.module.css";
import { ScreenContext } from "../../context/ScreenContext";

const MainScreen = (props) => {
  const { screen } = useContext(ScreenContext);

  return (
    <div
      style={{
        transform: screen ? "translateY(0)" : "translateY(200vh)",
        opacity: screen ? "1" : "0",
      }}
      className={classes.MainScreen}
    >
      <div className={classes.MainScreenLeft} />
      <div className={classes.MainScreenRight} />
    </div>
  );
};

export default MainScreen;
