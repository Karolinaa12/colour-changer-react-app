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
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Add color name..."
            className="form-control"
            autoFocus="on"
            onChange={updateColor}
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="search"
            className="btn btn-primary w-100"
          />
        </div>
      </div>
    </form>
  );
}
