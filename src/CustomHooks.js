import { useState } from "react";
import firebase from "./Firebase";

const useSignUpForm = () => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(inputs.signUpEmail, inputs.signUpPassword)
      .then((cred) => {
        firebase
          .firestore()
          .collection("users")
          .doc(cred.user.uid)
          .collection("todo")
          .add({ name: "Start a to do list!" });
      });
    setInputs("");
  };

  const handleLogIn = (event) => {
    if (event) {
      event.preventDefault();
    }
    firebase
      .auth()
      .signInWithEmailAndPassword(inputs.logInEmail, inputs.logInPassword)
      .then((cred) => {
        console.log(cred);
      });
    setInputs("");
  };

  const handleLogout = (event) => {
    if (event) {
      event.preventDefault();
    }
    firebase.auth().signOut();
  };

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleSubmit,
    handleInputChange,
    handleLogIn,
    handleLogout,
    inputs,
  };
};

export default useSignUpForm;
