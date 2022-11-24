import React, { useState } from "react";

export default function Input() {
  const [color, setColor] = useState("");

  function updateColor(event) {
    setColor(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searchin for ${color}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" onChange={updateColor} />
      <input type="submit" value="search" />
    </form>
  );
}
