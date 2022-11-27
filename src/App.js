import React from "react";
import "./App.css";
import RandomName from "./RandomName";
import Square from "./Square";
import Input from "./Input";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          <RandomName />
        </h1>
        <Square />
        <Input />
      </div>
    </div>
  );
}
