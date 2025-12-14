import { createContext, useContext, useState, useMemo } from "react";

const NoteContext = createContext({
  noteContent: null,
  setNoteContent: () => {},
});

export function NoteProvider({ children }) {
  const [noteContent, setNoteContent] = useState(null);

  const value = useMemo(
    () => ({ noteContent, setNoteContent }),
    [noteContent]
  );

  return (
    <NoteContext.Provider value={value}>
      {children}
    </NoteContext.Provider>
  );
}

export function useNote() {
  return useContext(NoteContext);
}
