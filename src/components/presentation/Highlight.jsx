import { useEffect, useId } from "react";
import { useHighlight } from "../../contexts/HighlightContext";
import { toChildArray } from "../common";

export function Highlight({ children }) {
  const id = useId();
  const { registerHighlight, unregisterHighlight, activeHighlights } = useHighlight();
  const isActive = activeHighlights?.has(id) || false;

  useEffect(() => {
    registerHighlight(id);
    return () => unregisterHighlight(id);
  }, [id, registerHighlight, unregisterHighlight]);

  // Check if children includes MainChat to apply flex layout
  const childArray = toChildArray(children);
  const hasMainChat = childArray.some(
    (child) => child?.type?.displayName === "MainChat"
  );

  return (
    <div
      className={`relative z-20 bg-claude-bg ${
        hasMainChat ? "flex flex-col flex-1 overflow-visible lg:overflow-hidden" : ""
      }`}
      data-highlighted={isActive ? "true" : "false"}
    >
      {children}
    </div>
  );
}

Highlight.displayName = "Highlight";
