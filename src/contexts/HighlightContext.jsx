import { createContext, useContext, useState, useEffect } from 'react';

const HighlightContext = createContext({
  isHighlightActive: false,
  isOverlayVisible: false,
  registerHighlight: () => {},
  unregisterHighlight: () => {}
});

export function HighlightProvider({ children }) {
  const [activeHighlights, setActiveHighlights] = useState(new Set());
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

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

  // Manage overlay visibility with delayed hiding to prevent flash during slide transitions
  useEffect(() => {
    if (activeHighlights.size > 0) {
      // Show overlay immediately when highlights are active
      setIsOverlayVisible(true);
    } else {
      // Delay hiding overlay when highlights become inactive
      const timer = setTimeout(() => {
        setIsOverlayVisible(false);
      }, 150); // 150ms delay

      return () => clearTimeout(timer);
    }
  }, [activeHighlights.size]);

  return (
    <HighlightContext.Provider value={{
      isHighlightActive: activeHighlights.size > 0,
      isOverlayVisible,
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
