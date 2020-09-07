import React, { useContext, useState } from "react";

import classes from "./HomeRight.module.css";
import Slice from "../../assets/slice.png";
import { ScreenContext } from "../../context/ScreenContext";
import firebase from "../../Firebase";

const HomeRight = (props) => {
  const currUser = firebase.auth().currentUser;
  const { screenHandler } = useContext(ScreenContext);

  const [bloop, setBloop] = useState(false);

  const bloopHandler = () => {
    setBloop(!bloop);
  };

  const togglers = () => {
    props.homeToggleHandler();
    screenHandler();
  };

  return (
    <div
      className={classes.HomeRight}
      style={{
        transform: props.showHome ? "translateX(0)" : "translateX(200vw)",
      }}
    >
      <div
        style={{
          transform: bloop ? "translateX(200vw)" : "translateX(0)",
        }}
        className={classes.bxr}
      >
        <button onClick={props.logInToggleHandler}>
          {currUser ? "SIgn OUT" : "LOG IN"}
        </button>
        <button onClick={togglers}>GUEST</button>
        <button onClick={bloopHandler}>BLOOP</button>
      </div>
      <div className={classes.top}></div>
      <div className={classes.bml}></div>
      <div
        style={{
          transform: bloop ? "translateY(-200vh)" : "translateY(0)",
        }}
        className={classes.cen}
      >
        Pomodoro
        <img src={Slice} alt="pizza slice" />
        Pizza Party
      </div>
      <div
        style={{
          transform: bloop ? "translateX(200vw)" : "translateX(0)",
        }}
        className={classes.bmr}
      ></div>
      <div className={classes.bxl}></div>
    </div>
  );
};

export default HomeRight;
