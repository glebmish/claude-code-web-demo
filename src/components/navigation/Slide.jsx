import { Children, useEffect } from "react";
import { useNote } from "../../contexts/NoteContext";
import { Note } from "./Note";

export function Slide({ children }) {
  const { setNoteContent } = useNote();

  // Extract Note component from children
  let noteContent = null;
  const otherChildren = [];

  Children.forEach(children, (child) => {
    if (child?.type === Note) {
      noteContent = child.props.children;
    } else {
      otherChildren.push(child);
    }
  });

  // Push note content up to Demo via context
  useEffect(() => {
    setNoteContent(noteContent);
  }, [noteContent, setNoteContent]); // setNoteContent is now stable due to memoized context value

  return (
    <div className="w-full h-full relative">
      {otherChildren}
      {/* Dimming overlay - always visible since all slides have highlights or terminals */}
      <div className="fixed inset-0 bg-black/40 pointer-events-none z-10" />
    </div>
  );
}
