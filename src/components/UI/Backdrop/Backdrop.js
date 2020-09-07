import React from "react";

import classes from "./Backdrop.module.css";

const Backdrop = (props) =>
  props.show ? (
    <div
      className={classes.Backdrop}
      onClick={props.checkListToggleHandler}
    ></div>
  ) : props.logInPopUp ? (
    <div
      className={classes.Backdrop}
      onClick={props.logInToggleHandler}
      style={{ zIndex: 9000 }}
    ></div>
  ) : null;

export default Backdrop;
