import React, { useContext } from "react";
import classes from "./Toolbar.module.css";
import Pizza from "../../../assets/pizza.png";
import CheckList from "../../../assets/checklist.png";
import House from "../../../assets/house.png";
import Light from "../../../assets/light-bulb.png";
import { ThemeContext } from "../../../context/ThemeContext";
import { ScreenContext } from "../../../context/ScreenContext";

// import NavigationItems from "../NavigationItems/NavigationItems";
// import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const Toolbar = (props) => {
  const { themeHandler } = useContext(ThemeContext);
  const { screen, screenHandler } = useContext(ScreenContext);

  const togglers = () => {
    props.homeToggleHandler();
    screenHandler();
  };

  return (
    <header
      style={{
        transform: screen ? "translateY(0)" : "translateY(200vh)",
        opacity: screen ? "1" : "0",
      }}
      className={classes.Toolbar}
    >
      <div className={classes.left}>
        <img src={Pizza} className={classes.icon} alt="Pizza Icon" />
        {props.pizzaCount}
      </div>

      <div className={classes.right}>
        <img
          src={CheckList}
          className={classes.icon}
          onClick={props.checkListToggleClicked}
          alt="CheckList Icon"
        />
        <img
          src={House}
          className={classes.icon}
          onClick={togglers}
          alt="House Icon"
        />
        <img
          src={Light}
          className={classes.icon}
          onClick={themeHandler}
          alt="Light Icon"
        />
      </div>
    </header>
  );
};

export default Toolbar;

//Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
//Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
