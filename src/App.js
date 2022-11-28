import React, { useState } from "react";
import "./App.css";
import RandomGreeting from "./RandomGreeting";
import Square from "./Square";
import Input from "./Input";

export default function App() {
  const [color, setColor] = useState(" ");
  return (
    <div className="App">
      <div className="container">
        <h1>
          <RandomGreeting />
        </h1>
        <Square color={color} />
        <Input color={color} setColor={setColor} />
      </div>
    </div>
  );
}
