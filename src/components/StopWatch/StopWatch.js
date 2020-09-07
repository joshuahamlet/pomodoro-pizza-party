import React, { useContext } from "react";
import classes from "./StopWatch.module.css";
import { ScreenContext } from "../../context/ScreenContext";

const StopWatch = (props) => {
  const { screen } = useContext(ScreenContext);
  const getSeconds = () => {
    return ("0" + (props.secondsElapsed % 60)).slice(-2);
  };

  const getMinutes = () => {
    return ("0" + Math.floor(props.secondsElapsed / 60)).slice(-2);
  };

  const handleStartClick = () => {
    if (!props.startPressed) {
      props.setStartPressed(true);
    }
  };

  const handleQuitClick = () => {
    if (props.startPressed) {
      props.setStartPressed(false);
      props.setSecondsElapsed(0);
    }
  };

  return (
    <div
      style={{
        transform: screen ? "translateY(0)" : "translateY(200vh)",
        opacity: screen ? "1" : "0",
      }}
      className={classes.StopWatch}
    >
      <h1 className={classes.Title}>P O M O D R O</h1>
      <h1 className={classes.Timer}>
        {getMinutes()}:{getSeconds()}
      </h1>

      <button
        type="button"
        onClick={handleStartClick}
        className={classes.Start}
      >
        Start
      </button>
      <button type="button" onClick={handleQuitClick} className={classes.Quit}>
        Quit
      </button>
    </div>
  );
};

export default StopWatch;
