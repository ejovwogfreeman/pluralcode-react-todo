import { useState, useEffect } from "react";
import Header from "./components/Header";
import Todos from "./components/Todos";
import Form from "./components/Form";

const App = () => {
  // const initalState = [
  //   {
  //     id: 1,
  //     text: "Todo 1",
  //     date: "12/02/2024",
  //   },
  //   {
  //     id: 2,
  //     text: "Todo 2",
  //     date: "12/02/2024",
  //   },
  //   {
  //     id: 3,
  //     text: "Todo 3",
  //     date: "12/02/2024",
  //   },
  // ];
  // const [todos, setTodos] = useState(initalState);

  const [todos, setTodos] = useState(() => {
    const localData = localStorage.getItem("pluralCodeTodos");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("pluralCodeTodos", JSON.stringify(todos));
  }, [todos]);

  const deleteTodo = (id) => {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const addTodo = (todo) => {
    const id = Math.random();
    const date =
      new Date().toDateString() + " | " + new Date().toLocaleTimeString();
    const newTodo = { ...todo, id, date };
    const newTodos = [newTodo, ...todos];
    setTodos(newTodos);
  };

  const [showForm, setShowForm] = useState(false);

  console.log(showForm);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <Header toggleForm={toggleForm} showForm={showForm} />
      <Form addTodo={addTodo} showForm={showForm} />
      <Todos todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
