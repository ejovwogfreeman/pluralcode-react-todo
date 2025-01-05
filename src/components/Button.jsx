// import React from "react";
import "../css/Button.css";

const Button = ({ text, color }) => {
  return <button style={{ background: color }}>{text}</button>;
};

export default Button;
