import { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";
import { useView } from "./ViewContext";

const HighlightContext = createContext({
  isHighlightActive: false,
  isOverlayVisible: false,
  registerHighlight: () => {},
  unregisterHighlight: () => {},
  activeHighlights: new Set(),
});

export function HighlightProvider({ children }) {
  const { viewMode } = useView();
  const [activeHighlights, setActiveHighlights] = useState(new Set());
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const registerHighlight = useCallback((id) => {
    setActiveHighlights((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  }, []);

  const unregisterHighlight = useCallback((id) => {
    setActiveHighlights((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  }, []);

  // Manage overlay visibility with delayed hiding to prevent flash during slide transitions
  // Only show overlay in web view mode
  useEffect(() => {
    if (!activeHighlights) return;

    if (viewMode === "web" && activeHighlights.size > 0) {
      // Show overlay immediately when highlights are active and in web view
      setIsOverlayVisible(true);
    } else {
      // Delay hiding overlay when highlights become inactive or view mode changes
      const timer = setTimeout(() => {
        setIsOverlayVisible(false);
      }, 150); // 150ms delay

      return () => clearTimeout(timer);
    }
  }, [activeHighlights?.size, viewMode]);

  const value = useMemo(
    () => ({
      isHighlightActive: activeHighlights?.size > 0,
      isOverlayVisible,
      registerHighlight,
      unregisterHighlight,
      activeHighlights: activeHighlights || new Set(),
    }),
    [activeHighlights, isOverlayVisible, registerHighlight, unregisterHighlight]
  );

  return (
    <HighlightContext.Provider value={value}>
      {children}
    </HighlightContext.Provider>
  );
}

export function useHighlight() {
  return useContext(HighlightContext);
}
