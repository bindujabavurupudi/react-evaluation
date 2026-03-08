import { useContext, useState, useMemo } from "react";
import { NotesContext } from "../context/NotesContext";

const NotesList = () => {

  const { notes } = useContext(NotesContext);
  const [selected, setSelected] = useState(null);


  const totalNotes = useMemo(() => {
    return notes.length;
  }, [notes]);

  return (
    <div>

      <h3>Total Notes: {totalNotes}</h3>

      <ul>
        {notes.map((note, index) => (
          <li
            key={index}
            onClick={() => setSelected(index)}
            style={{
              cursor: "pointer",
              backgroundColor:
                selected === index ? "yellow" : "transparent"
            }}
          >
            {note}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default NotesList;