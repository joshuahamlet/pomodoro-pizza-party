import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "../NavigationItem/NavigationItem";
// import Pizza from "../../../assets/pizza.png";

const navigationItems = (props) => (
  <div className={classes.NavigationItems}>
    <NavigationItem link="/" active></NavigationItem>
    <NavigationItem link="/"></NavigationItem>
  </div>
);

export default navigationItems;
