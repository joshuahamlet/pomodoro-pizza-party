import React from "react";
import classes from "./HomeLeft.module.css";

import Tomato from "../../assets/tomato.png";
import Mushroom from "../../assets/mushroom.png";
import Cheese from "../../assets/cheese.png";

import Slide from "react-reveal/Slide";
import Bounce from "react-reveal/Bounce";

const HomeLeft = (props) => {
  return (
    <div
      className={classes.HomeLeft}
      style={{
        transform: props.showHome ? "translateX(0)" : "translateX(-200vw)",
      }}
    >
      <div className={classes.top}></div>
      <div className={classes.bxc}>
        <div className={classes.bxc1}>
          <Slide right>
            <h1>What is a pomodoro?</h1>
          </Slide>
          <Slide left>
            <p>
              Pomodoro is the Italian word for tomato. It is also the name of a
              time management technique developed by Francesco Cirillo in the
              late 1980's. It utilizes a timer to break down work into 25 minute
              intervals seperated by short breaks. As a university student,
              Francesco used a tomato-shaped kitchen timer, hence the name.
              There are six steps in the original technique...
            </p>
          </Slide>
          <img src={Tomato} alt="Tomato" />
        </div>
        <div className={classes.bxc2}>
          <Slide right>
            <h1>The Six Steps</h1>
          </Slide>
          <Slide left>
            <div>
              <p>1. Decide on the task to be done.</p>
              <p>2. Set the pomodoro timer (traditionally to 25 minutes).</p>

              <p>3. Work on the task.</p>
              <p>
                4. End work when the timer rings and put a checkmark on a piece
                of paper.
              </p>
              <p>
                5. If you have fewer than four checkmarks, take a short break
                (3–5 minutes), then go to step 2.
              </p>
              <p>
                6. After four pomodoros, take a longer break (15–30 minutes),
                reset your checkmark count to zero, then go to step 1.
              </p>
            </div>
          </Slide>
          <Bounce bottom>
            <img src={Mushroom} alt="Mushroom" />
          </Bounce>
        </div>
        <div className={classes.bxc3}>
          <Slide right>
            <h1>shoop</h1>
          </Slide>
          <Slide left>
            <p>
              blah blah blah blah blah blah blah blah blah blah blah
              <br />
              words words words words words words words words words
              <br />
              blah blah blah blah blah blah blah blah blah blah blah
              <br />
              words words words words words words words words words
              <br />
              blah blah blah blah blah blah blah blah blah blah blah
            </p>
          </Slide>
          <Bounce bottom>
            <img src={Cheese} alt="Cheese" />
          </Bounce>
        </div>
      </div>
    </div>
  );
};

export default HomeLeft;
