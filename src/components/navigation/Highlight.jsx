import { useEffect, useId } from 'react';
import { useHighlight } from '../../contexts/HighlightContext';

export function Highlight({ children }) {
  const id = useId();
  const { registerHighlight, unregisterHighlight } = useHighlight();

  useEffect(() => {
    registerHighlight(id);
    return () => unregisterHighlight(id);
  }, [id, registerHighlight, unregisterHighlight]);

  return (
    <div className="relative z-20">
      {children}
    </div>
  );
}

Highlight.displayName = 'Highlight';
