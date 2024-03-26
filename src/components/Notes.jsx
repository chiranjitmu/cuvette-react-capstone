import React, { useState } from "react";
import "./Notes.css";

const Notes = () => {
  const [notes, setNotes] = useState(localStorage.getItem("notes")) ?? "";

  const handleChange = (e) => {
    setNotes(e.target.value);
    localStorage.setItem("notes", notes);
  };

  return (
    <section className="notes-container">
      <h1 className="notes-header">All notes</h1>
      <textarea
        className="notes-textarea"
        value={notes}
        onChange={handleChange}
      />
    </section>
  );
};

export default Notes;
