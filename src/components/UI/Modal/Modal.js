import React, { useState, useEffect } from "react";

import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";
import firebase from "../../../Firebase";
import ToDoInput from "./ToDoInput";
import uuid from "uuid/v4";

const Modal = (props) => {
  const [todos, setTodos] = useState([]);
  const [newToDoName, setNewToDoName] = useState();

  const currUser = firebase.auth().currentUser; //"fwl8e9vPVsgwxgLZjo2oN3wdUjj2";

  useEffect(() => {
    if (currUser) {
      const db = firebase.firestore();
      const unsubscribe = db
        .collection("users")
        .doc(currUser.uid)
        .collection("todo")
        .onSnapshot((snapshot) => {
          const todoData = [];
          snapshot.forEach((doc) =>
            todoData.push({ ...doc.data(), id: doc.id })
          );
          setTodos(todoData);
        });
      return unsubscribe;
    } else {
      setTodos([]);
    }
  }, [currUser]);

  console.log(todos);

  const onCreate = () => {
    if (currUser) {
      const db = firebase.firestore();
      db.collection("users")
        .doc(currUser.uid)
        .collection("todo")
        .add({ name: newToDoName });
      setNewToDoName("");
    } else {
      let todoArray = todos;
      todoArray.push({ name: newToDoName, id: uuid() });
      setTodos(todoArray);
      setNewToDoName("");
    }
  };

  return (
    <>
      <Backdrop
        show={props.show}
        checkListToggleHandler={props.checkListToggleHandler}
      />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(200vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        <ul>
          <input
            className={classes.itemAddBox}
            value={newToDoName || ""}
            onChange={(e) => setNewToDoName(e.target.value)}
          />
          <button onClick={onCreate}>Create</button>
          {todos.map((todo) => (
            <li key={todo.id}>
              <ToDoInput
                todo={todo}
                todos={todos}
                setTodos={setTodos}
                className={classes.todoitem}
              />
            </li>
          ))}
        </ul>
        {/* {props.children} */}
      </div>
    </>
  );
};

export default Modal;

// import React, { useState, useEffect } from "react";

// import classes from "./Modal.module.css";
// import Backdrop from "../Backdrop/Backdrop";
// import firebase from "../../../Firebase";
// import SpellInput from "./SpellInput";

// const Modal = (props) => {
//   const [spells, setspells] = useState([]);
//   const [newSpellName, setNewSpellName] = useState();

//   useEffect(() => {
//     const db = firebase.firestore();
//     const unsubscribe = db.collection("spells").onSnapshot((snapshot) => {
//       const spellsData = [];
//       snapshot.forEach((doc) => spellsData.push({ ...doc.data(), id: doc.id }));
//       setspells(spellsData);
//     });

//     return unsubscribe;
//   }, []);

//   const onCreate = () => {
//     const db = firebase.firestore();
//     db.collection("spells").add({ name: newSpellName });
//     setNewSpellName("");
//   };

//   return (
//     <>
//       <Backdrop show={props.show} clicked={props.modalClosed} />
//       <div
//         className={classes.Modal}
//         style={{
//           transform: props.show ? "translateY(0)" : "translateY(200vh)",
//           opacity: props.show ? "1" : "0",
//         }}
//       >
//         <ul>
//           <input
//             className={classes.itemAddBox}
//             value={newSpellName}
//             onChange={(e) => setNewSpellName(e.target.value)}
//           />
//           <button onClick={onCreate}>Create</button>
//           {spells.map((spell) => (
//             <li key={spell.name}>
//               <SpellInput spell={spell} className={classes.todoitem} />
//             </li>
//           ))}
//         </ul>
//         {/* {props.children} */}
//       </div>
//     </>
//   );
// };

// export default Modal;
