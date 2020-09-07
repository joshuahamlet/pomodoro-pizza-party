import React, { useState } from "react";
import firebase from "../../../Firebase";
import classes from "./Modal.module.css";

const ToDoInput = ({ todo, todos, setTodos }) => {
  const [name, setName] = useState(todo.name);

  const currUser = firebase.auth().currentUser;

  const onUpdate = () => {
    if (currUser) {
      const db = firebase.firestore();
      db.collection("users")
        .doc(currUser.uid)
        .collection("todo")
        .doc(todo.id)
        .set({ ...todo, name });
    }
  };

  const staticDelete = () => {
    let todoArray = todos;
    setTodos(
      todoArray.filter((el) => {
        return el.id !== todo.id;
      })
    );
  };
  //////////////////////////////////////////////////////
  ///////////////////////////////////////////////////
  /////////////////////////////////////////////////////
  ////////////////////////////////////////////////////
  // possible create a timer counter to be triggered onDelete
  // could lint to a new collection on each user each feild would
  // have the date (possibly as ID) and a counter to increment
  const onDelete = () => {
    if (currUser) {
      const db = firebase.firestore();
      db.collection("users")
        .doc(currUser.uid)
        .collection("todo")
        .doc(todo.id)
        .delete();
    } else {
      staticDelete();
    }
  };

  return (
    <>
      <input
        className={classes.todoItem}
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        onBlur={onUpdate}
      />

      <button onClick={onDelete}>Delete</button>
    </>
  );
};

export default ToDoInput;

// import React, { useState, useEffect } from "react";
// import firebase from "../../../Firebase";
// import classes from "./Modal.module.css";

// const SpellInput = ({ spell }) => {
//   const [name, setName] = useState(spell.name);

//   // useEffect(() => {
//   //   const db = firebase.firestore();
//   //   db.collection("spells")
//   //     .doc(spell.id)
//   //     .set({ ...spell, name });
//   // });

//   const onUpdate = () => {
//     const db = firebase.firestore();
//     db.collection("spells")
//       .doc(spell.id)
//       .set({ ...spell, name });
//   };

//   const onDelete = () => {
//     const db = firebase.firestore();
//     db.collection("spells").doc(spell.id).delete();
//   };

//   return (
//     <>
//       <input
//         className={classes.todoItem}
//         value={name}
//         onChange={(e) => {
//           setName(e.target.value);
//         }}
//         onBlur={onUpdate}
//       />

//       <button onClick={onDelete}>Delete</button>
//     </>
//   );
// };

// export default SpellInput;
