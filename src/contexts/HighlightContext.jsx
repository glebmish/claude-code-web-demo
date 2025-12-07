import { createContext, useContext, useState } from 'react';

const HighlightContext = createContext({
  isHighlightActive: false,
  registerHighlight: () => {},
  unregisterHighlight: () => {}
});

export function HighlightProvider({ children }) {
  const [activeHighlights, setActiveHighlights] = useState(new Set());

  const registerHighlight = (id) => {
    setActiveHighlights(prev => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  };

  const unregisterHighlight = (id) => {
    setActiveHighlights(prev => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  };

  return (
    <HighlightContext.Provider value={{
      isHighlightActive: activeHighlights.size > 0,
      registerHighlight,
      unregisterHighlight
    }}>
      {children}
    </HighlightContext.Provider>
  );
}

export function useHighlight() {
  return useContext(HighlightContext);
}
