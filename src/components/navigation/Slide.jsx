import { Children, useEffect } from 'react';
import { useHighlight } from '../../contexts/HighlightContext';
import { useNote } from '../../contexts/NoteContext';
import { Note } from './Note';

export function Slide({ children }) {
  const { isHighlightActive } = useHighlight();
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
  }, [noteContent, setNoteContent]);

  return (
    <div className="w-full h-full relative">
      {otherChildren}
      {/* Dimming overlay - fixed to cover viewport, z-10 to be above normal content but below highlights (z-20) */}
      {isHighlightActive && (
        <div className="fixed inset-0 bg-black/60 pointer-events-none z-10" />
      )}
    </div>
  );
}
