import React, { useState } from "react";
import "../css/Form.css";

const Form = ({ addTodo, showForm }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please enter a text");
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
            />
          </div>
          <button>SUBMIT</button>
        </form>
      )}
    </>
  );
};

export default Form;
