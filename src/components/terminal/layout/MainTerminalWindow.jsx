import { useRef, useEffect } from "react";
import { filterChildrenByDisplayNames, useScrollPosition } from "../../common";
import { useView } from "../../../contexts/ViewContext";

export function MainTerminalWindow({ children, clawd, scroll }) {
  const messages = filterChildrenByDisplayNames(children, [
    "Message",
    "Response",
    "ToolUse",
  ]);

  const containerRef = useRef(null);
  const { viewMode } = useView();

  // Scroll to top when terminal view becomes active
  useEffect(() => {
    if (viewMode === "terminal" && containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [viewMode]);

  // Original scroll logic (for presentations with explicit scroll prop)
  useScrollPosition(containerRef, scroll, [messages]);

  return (
    <div
      ref={containerRef}
      className={`flex-1 overflow-hidden font-mono text-xs text-terminal-text bg-terminal-bg flex flex-col ${
        scroll ? "[&::-webkit-scrollbar]:hidden" : "justify-end"
      }`}
      style={{
        ...(scroll ? { scrollbarWidth: "none", msOverflowStyle: "none" } : {}),
        overscrollBehavior: 'contain'
      }}
      onWheel={(e) => {
        // Prevent mouse wheel scrolling inside terminal
        e.stopPropagation();
      }}
      onTouchMove={(e) => {
        // Prevent touch scrolling inside terminal
        e.stopPropagation();
      }}
    >
      <div className={`transform transition-transform`}>
        {clawd && <div className="border-b border-terminal-border">{clawd}</div>}
        <div className="p-2 sm:p-3 md:p-4">{messages}</div>
      </div>
    </div>
  );
}

MainTerminalWindow.displayName = "MainTerminalWindow";
