import React from "react";
import useSignUpForm from "./CustomHooks";
import classes from "./components/UI/Modal/Modal.module.css";

const AuthSignUp = (props) => {
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm();

  return (
    <div
      className={classes.ModalPopUpBack}
      style={{
        transform: props.signUp ? "rotateY(0)" : "rotateY(180deg)",
      }}
    >
      <h1 style={{ margin: "0 auto" }}>SIGN UP</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            name="signUpEmail"
            placeholder="Email Address"
            className={classes.todoItem}
            onChange={handleInputChange}
            value={inputs.signUpEmail || ""}
            required
          />

          <label style={{ display: "inline-block" }}>Email Address</label>
        </div>
        <div>
          <input
            type="password"
            name="signUpPassword"
            placeholder="Password"
            className={classes.todoItem}
            onChange={handleInputChange}
            value={inputs.signUpPassword || ""}
            required
          />
          <label style={{ display: "block" }}>Password</label>
        </div>
        <button style={{ width: "300px" }}>Sign up</button>

        <div onClick={props.signUpDisplayHandler}>
          Already have an account? Log in here!{" "}
        </div>
      </form>
    </div>
  );
};

const AuthLogIn = (props) => {
  const { inputs, handleInputChange, handleLogIn } = useSignUpForm();

  const logIn = (event) => {
    if (event) {
      event.preventDefault();
    }
    handleLogIn();
    props.logInToggleHandler();
  };

  return (
    <div
      className={classes.ModalPopUpFront}
      style={{
        transform: props.signUp ? "rotateY(-180deg)" : "rotateY(0)",
      }}
    >
      <h1 style={{ margin: "0 auto" }}>LOG IN</h1>
      <form onSubmit={logIn}>
        <div>
          <input
            id="email"
            type="email"
            name="logInEmail"
            placeholder="Email Address"
            className={classes.todoItem}
            onChange={handleInputChange}
            value={inputs.logInEmail || ""}
            required
          />
          <label style={{ display: "inline-block" }} for="email">
            Email Address
          </label>
        </div>
        <div>
          <input
            id="password"
            type="password"
            name="logInPassword"
            placeholder="Password"
            className={classes.todoItem}
            onChange={handleInputChange}
            value={inputs.logInPassword || ""}
            required
          />
          <label style={{ display: "inline-block" }} for="password">
            Password
          </label>
        </div>
        <button style={{ width: "300px" }}>Log In</button>
        <div onClick={props.signUpDisplayHandler}>
          Don't have an account? Sign up here!
        </div>
      </form>
    </div>
  );
};

const AuthSignOut = (props) => {
  const { handleLogout } = useSignUpForm();

  const signOut = () => {
    handleLogout();
    props.logInToggleHandler();
  };

  return (
    <div className={classes.ModalPopUpFront}>
      <h1 style={{ margin: "0 auto" }}>Confirm Sign Out?</h1>
      <button style={{ width: "300px" }} onClick={signOut}>
        Sign out
      </button>
    </div>
  );
};

export { AuthSignUp, AuthLogIn, AuthSignOut };
