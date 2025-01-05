// import React from "react";
import "../css/Header.css";
import Button from "./Button";

const Header = ({ showForm, toggleForm }) => {
  return (
    <header>
      <div className="main-header">
        <h1>PluralCode React</h1>
        <span>V.0.0.1</span>
      </div>
      <div className="sub-header">
        <h2>Toggle Form</h2>
        <span onClick={() => toggleForm()}>
          <Button
            text={showForm ? "close" : "open"}
            color={showForm ? "red" : "green"}
            onClick={() => toggleForm()}
          />
        </span>
      </div>
    </header>
  );
};

export default Header;
