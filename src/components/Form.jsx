import React, { useState } from "react";
import "../css/Form.css";
import Button from "./Button";

const Form = ({ addTodo, showForm }) => {
  const [text, setText] = useState("");
  const [err, setErr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      setErr("Please enter a text");
      setTimeout(() => {
        setErr("");
      }, 3000);
    } else {
      addTodo({ text });
    }
    setText("");
  };
  return (
    <>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <h3>Add A Todo</h3>
          <div>
            <input
              placeholder="Add A Todo"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className={err ? "err-border" : ""}
            />
          </div>
          {err ? <span class="err">{err}</span> : ""}
          <Button text="Submit" />
        </form>
      )}
    </>
  );
};

export default Form;
