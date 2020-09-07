import React, { useState, useContext } from "react";

import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import MainScreen from "../../components/MainScreen/MainScreen";
import StopWatch from "../../components/StopWatch/StopWatch";
import Modal from "../../components/UI/Modal/Modal";
import classes from "./PizzaParty.module.css";
import { ThemeContext } from "../../context/ThemeContext";
import { ScreenContext } from "../../context/ScreenContext";

const PizzaParty = (props) => {
  const { theme } = useContext(ThemeContext);
  const { screen } = useContext(ScreenContext);
  const [checkList, setCheckList] = useState(false);

  const checkListToggleHandler = () => {
    setCheckList(!checkList);
  };

  return (
    <div
      className={
        classes.PizzaParty + " " + (theme ? classes.bkDark : classes.bkLight)
      }
    >
      <Toolbar
        style={{
          transform: screen ? "translateY(0)" : "translateY(200vh)",
          opacity: screen ? "1" : "0",
        }}
        checkListToggleClicked={checkListToggleHandler}
        homeToggleHandler={props.homeToggleHandler}
        pizzaCount={props.pizzaCount}
      />
      <MainScreen
        style={{
          transform: screen ? "translateY(0)" : "translateY(200vh)",
          opacity: screen ? "1" : "0",
        }}
      />
      <StopWatch
        style={{
          transform: screen ? "translateY(0)" : "translateY(200vh)",
          opacity: screen ? "1" : "0",
        }}
        secondsElapsed={props.secondsElapsed}
        setSecondsElapsed={props.setSecondsElapsed}
        startPressed={props.startPressed}
        setStartPressed={props.setStartPressed}
      />
      <Modal show={checkList} checkListToggleHandler={checkListToggleHandler} />
    </div>
  );
};

export default PizzaParty;
