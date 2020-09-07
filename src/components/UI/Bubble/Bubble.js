import React, { useContext } from "react";
import classes from "./Bubble.module.css";

import { ScreenContext } from "../../../context/ScreenContext";

const Bubble = (props) => {
  const { screen } = useContext(ScreenContext);

  return (
    <div
      style={{
        transform: screen ? "translateY(0)" : "translateY(200vh)",
        opacity: screen ? "1" : "0",
      }}
      className={classes.Bubble}
    >
      <p className={classes.bubble + " " + classes.speech}>
        Welcome! Click the "Start" button below to begin the timer.
      </p>
    </div>
  );
};

export default Bubble;
