import { createContext, useContext, useState } from "react";

const ViewContext = createContext({
  viewMode: "web", // 'web' | 'terminal'
  toggleView: () => {},
  hasShownTerminalOnSlide1: false,
  forceTerminalExposure: () => {},
  shouldAnimateSpacebar: false,
  stopSpacebarAnimation: () => {},
});

export function ViewProvider({ children }) {
  const [viewMode, setViewMode] = useState("web");
  const [hasShownTerminalOnSlide1, setHasShownTerminalOnSlide1] =
    useState(false);
  const [shouldAnimateSpacebar, setShouldAnimateSpacebar] = useState(false);

  const toggleView = () => {
    setViewMode((prev) => (prev === "web" ? "terminal" : "web"));
    setShouldAnimateSpacebar(false); // Stop animation when user toggles
  };

  const forceTerminalExposure = () => {
    setViewMode("terminal");
    setHasShownTerminalOnSlide1(true);
    setShouldAnimateSpacebar(true); // Start animation
  };

  const stopSpacebarAnimation = () => {
    setShouldAnimateSpacebar(false);
  };

  return (
    <ViewContext.Provider
      value={{
        viewMode,
        toggleView,
        hasShownTerminalOnSlide1,
        forceTerminalExposure,
        shouldAnimateSpacebar,
        stopSpacebarAnimation,
      }}
    >
      {children}
    </ViewContext.Provider>
  );
}

export function useView() {
  return useContext(ViewContext);
}
