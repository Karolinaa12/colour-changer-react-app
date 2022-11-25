import React, { useState } from "react";

export default function Input() {
  const [color, setColor] = useState("");

  function updateColor(event) {
    setColor(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${color}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Add color name"
        onChange={updateColor}
      />
      <input type="submit" value="search" />
    </form>
  );
}
