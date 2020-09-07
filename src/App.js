import React, { useState, useEffect } from "react";
import "./App.css";
import PizzaParty from "./containers/PizzaParty/PizzaParty";
import Home from "./containers/Home/Home";
import Bubble from "./components/UI/Bubble/Bubble";
import ThemeContextProvider from "./context/ThemeContext";
import ScreenContextProvider from "./context/ScreenContext";

function App() {
  const [showHome, setShowHome] = useState(true);

  const homeToggleHandler = () => {
    setShowHome(!showHome);
  };

  ////////// P I Z Z A  L O G I C //////////
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [startPressed, setStartPressed] = useState(false);
  const [pizzaCount, setPizzaCount] = useState(0);

  useEffect(() => {
    let interval = null;
    if (startPressed) {
      interval = setInterval(() => {
        setSecondsElapsed((secondsElapsed) => secondsElapsed + 1);
      }, 1000);
    } else if (!startPressed && secondsElapsed !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [startPressed, secondsElapsed]);

  useEffect(() => {
    if (secondsElapsed === 11) {
      setPizzaCount(pizzaCount + 1);
      setSecondsElapsed(0);
      setStartPressed(false);
    }
  }, [secondsElapsed, pizzaCount]);
  //////////////////////////////////////////

  return (
    <div>
      <ScreenContextProvider>
        <ThemeContextProvider>
          <PizzaParty
            homeToggleHandler={homeToggleHandler}
            showHome={showHome}
            secondsElapsed={secondsElapsed}
            setSecondsElapsed={setSecondsElapsed}
            startPressed={startPressed}
            setStartPressed={setStartPressed}
            pizzaCount={pizzaCount}
          />
          <Home homeToggleHandler={homeToggleHandler} showHome={showHome} />
          <Bubble />
        </ThemeContextProvider>
      </ScreenContextProvider>
    </div>
  );
}

export default App;

//51243
