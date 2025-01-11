// import React from "react";
import "../css/Todos.css";
import Todo from "./Todo";

const Todos = ({ todos, deleteTodo }) => {
  return (
    <ul>
      {todos.length === 0 ? (
        <li style={{ justifyContent: "center" }}>No Todo Items To Show</li>
      ) : (
        todos.map((todo) => (
          <Todo key={Math.random()} todo={todo} deleteTodo={deleteTodo} />
        ))
      )}
    </ul>
  );
};

export default Todos;
