import { useState, useContext, useRef, useEffect } from "react";
import { NotesContext } from "../context/NotesContext";

const NotesInput = () => {

  const [input, setInput] = useState("");
  const { notes, setNotes } = useContext(NotesContext);

  const inputRef = useRef(null);


  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const addNote = () => {
    if (input.trim() === "") return;

    setNotes([...notes, input]);
    setInput("");
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter note"
      />

      <button onClick={addNote}>
        Add Note
      </button>
    </div>
  );
};

export default NotesInput;