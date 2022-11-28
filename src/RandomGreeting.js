import React from "react";
import "./RandomGreeting.css";

export default function RandomGreeting() {
  const handleGreetingChange = () => {
    const names = [`Hola`, `Ciao`, `Hello`];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };
  return (
    <div className="RandomGreeting">
      <p>{handleGreetingChange()}!</p>
    </div>
  );
}
