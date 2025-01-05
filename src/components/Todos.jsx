// import React from "react";
import "../css/Todos.css";
import Todo from "./Todo";

const Todos = ({ todos, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={Math.random()} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
};

export default Todos;
