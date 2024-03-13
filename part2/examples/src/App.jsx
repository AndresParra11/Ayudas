import { useEffect, useState } from "react";
import Note from "./components/Note/Note";
import noteService from "./services/notes";
import Notification from "./components/Notification/Notification";
import Footer from "./components/Footer/Footer";

function App() {
  const [notes, setNotes] = useState(null);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    getAllNotes();
  }, []);

  const getAllNotes = async () => {
    try {
      const data = await noteService.getAll("notes");
      setNotes(data);
    } catch (error) {
      console.error(error);
    }
  };

  const addNote = async (e) => {
    e.preventDefault();
    const noteToAdd = {
      content: newNote,
      important: Math.random() < 0.5,
    };

    try {
      const data = await noteService.create("notes", noteToAdd);
      setNotes(notes.concat(data));
      setNewNote("");
    } catch (error) {
      setErrorMessage(
        `Note '${noteToAdd.content}' was already removed from server`
      );
    }
  };

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  const notesToShow = showAll ? notes : notes?.filter((note) => note.important);

  const toggleImportanceOf = async (id) => {
    const note = notes.find((note) => note.id === id);
    const changeNote = { ...note, important: !note.important };

    try {
      const data = await noteService.update(id, changeNote);
      setNotes(notes.map((note) => (note.id !== id ? note : data)));
    } catch (error) {
      setErrorMessage(`Note '${note.content}' was already removed from server`);
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
      setNotes(notes.filter((n) => n.id !== id));
    }
  };

  if (!notes) {
    return null;
  }

  return (
    <>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
        <ul>
          {notesToShow.map((note) => (
            <Note
              key={note.id}
              note={note}
              toggleImportance={() => toggleImportanceOf(note.id)}
            />
          ))}
        </ul>
        <form onSubmit={addNote}>
          <input value={newNote} onChange={handleNoteChange} />
          <button type="submit">save</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default App;
