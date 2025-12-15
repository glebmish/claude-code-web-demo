import { useRef } from "react";
import { filterChildrenByDisplayNames, useScrollPosition } from "../../common";

export function MainTerminalWindow({ children, clawd, scroll }) {
  const messages = filterChildrenByDisplayNames(children, [
    "Message",
    "Response",
    "ToolUse",
  ]);

  const containerRef = useRef(null);
  useScrollPosition(containerRef, scroll, [messages]);

  return (
    <div
      ref={containerRef}
      className={`flex-1 overflow-y-auto font-mono text-xs text-terminal-text bg-terminal-bg flex flex-col ${
        scroll ? "[&::-webkit-scrollbar]:hidden" : "justify-end"
      }`}
      style={scroll ? { scrollbarWidth: "none", msOverflowStyle: "none" } : {}}
    >
      <div className={`transform transition-transform`}>
        {clawd && <div className="border-b border-terminal-border">{clawd}</div>}
        <div className="p-4">{messages}</div>
      </div>
    </div>
  );
}

MainTerminalWindow.displayName = "MainTerminalWindow";
