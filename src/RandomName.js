import React from "react";
import "./RandomName.css";

export default function RandomName() {
  const handleNameChange = () => {
    const names = [`Bob`, `Matt`, `Dave`];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };
  return (
    <div className="RandomName">
      <p>Hello {handleNameChange()}!</p>
    </div>
  );
}
