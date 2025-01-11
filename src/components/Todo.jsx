import React from "react";
import "../css/Todo.css";
import { BiTrash } from "react-icons/bi";

const Todo = ({ todo, deleteTodo }) => {
  return (
    <li>
      <span>
        <h3>{todo.text}</h3>
        <small>{todo.date}</small>
      </span>
      <BiTrash onClick={() => deleteTodo(todo.id)} />
    </li>
  );
};

export default Todo;
