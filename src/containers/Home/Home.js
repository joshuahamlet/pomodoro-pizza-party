import React, { useState } from "react";

import classes from "./Home.module.css";
import HomeRight from "../../components/HomeRight/HomeRight";
import HomeLeft from "../../components/HomeLeft/HomeLeft";
import ModalPopUp from "../../components/UI/Modal/ModalPopUp";

const Home = (props) => {
  const [logInPopUp, setLogInPopUp] = useState(false);

  const logInToggleHandler = () => {
    setLogInPopUp(!logInPopUp);
  };

  return (
    <div className={classes.Home}>
      <HomeRight
        homeToggleHandler={props.homeToggleHandler}
        logInToggleHandler={logInToggleHandler}
        showHome={props.showHome}
        logInPopUp={logInPopUp}
      />
      <HomeLeft
        homeToggleHandler={props.homeToggleHandler}
        showHome={props.showHome}
      />
      <ModalPopUp
        logInPopUp={logInPopUp}
        logInToggleHandler={logInToggleHandler}
      ></ModalPopUp>
    </div>
  );
};

export default Home;
