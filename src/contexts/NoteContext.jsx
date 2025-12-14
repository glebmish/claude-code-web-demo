import { createContext, useContext, useState } from "react";

const NoteContext = createContext({
  noteContent: null,
  setNoteContent: () => {},
});

export function NoteProvider({ children }) {
  const [noteContent, setNoteContent] = useState(null);

  return (
    <NoteContext.Provider value={{ noteContent, setNoteContent }}>
      {children}
    </NoteContext.Provider>
  );
}

export function useNote() {
  return useContext(NoteContext);
}
