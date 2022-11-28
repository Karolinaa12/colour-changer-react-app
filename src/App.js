import React from "react";
import "./App.css";
import RandomGreeting from "./RandomGreeting";
import Square from "./Square";
import Input from "./Input";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          <RandomGreeting />
        </h1>
        <Square />
        <Input />
      </div>
    </div>
  );
}
