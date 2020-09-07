import React, { useState } from "react";

import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";
import { AuthLogIn, AuthSignUp, AuthSignOut } from "../../../Auth";
import firebase from "../../../Firebase";

const ModalPopUp = (props) => {
  const currUser = firebase.auth().currentUser;
  const [signUp, setSignUp] = useState(false);

  const signUpDisplayHandler = () => {
    setSignUp(!signUp);
  };

  if (currUser) {
    return (
      <>
        <Backdrop
          logInPopUp={props.logInPopUp}
          logInToggleHandler={props.logInToggleHandler}
        />
        <div
          className={classes.ModalPopUp}
          style={{
            transform: props.logInPopUp ? "translateY(0)" : "translateY(200vh)",
            opacity: props.logInPopUp ? "1" : "0",
          }}
        >
          <AuthSignOut logInToggleHandler={props.logInToggleHandler} />;
        </div>
      </>
    );
  } else {
    return (
      <>
        <Backdrop
          logInPopUp={props.logInPopUp}
          logInToggleHandler={props.logInToggleHandler}
        />
        <div
          className={classes.ModalPopUp}
          style={{
            transform: props.logInPopUp ? "translateY(0)" : "translateY(200vh)",
            opacity: props.logInPopUp ? "1" : "0",
          }}
        >
          <AuthSignUp
            signUp={signUp}
            signUpDisplayHandler={signUpDisplayHandler}
            logInToggleHandler={props.logInToggleHandler}
          />
          <AuthLogIn
            signUp={signUp}
            signUpDisplayHandler={signUpDisplayHandler}
            logInToggleHandler={props.logInToggleHandler}
          />
        </div>
      </>
    );
  }
};

export default ModalPopUp;
