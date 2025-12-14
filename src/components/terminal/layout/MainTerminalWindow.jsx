import { useRef, useEffect } from "react";

export function MainTerminalWindow({ children, clawd, scroll }) {
  // Filter children by displayName
  const childArray = Array.isArray(children) ? children : [children];
  const messages = childArray.filter((child) =>
    ["Message", "Response", "ToolUse"].includes(child?.type?.displayName)
  );

  const containerRef = useRef(null);

  // Apply scroll position when scroll prop changes or messages update
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Default to bottom if no scroll prop
    if (!scroll) {
      container.scrollTop = container.scrollHeight;
      return;
    }

    // Parse percentage string
    if (scroll.endsWith("%")) {
      const percent = parseFloat(scroll) / 100;
      const maxScroll = container.scrollHeight - container.clientHeight;
      container.scrollTop = maxScroll * percent;
    }
  }, [scroll, messages]);

  return (
    <div
      ref={containerRef}
      className={`flex-1 overflow-y-auto font-mono text-xs text-[#cccccc] bg-[#1e1e1e] flex flex-col ${
        scroll ? "[&::-webkit-scrollbar]:hidden" : "justify-end"
      }`}
      style={scroll ? { scrollbarWidth: "none", msOverflowStyle: "none" } : {}}
    >
      <div className={`transform transition-transform`}>
        {clawd && <div className="border-b border-[#3e3e3e]">{clawd}</div>}
        <div className="p-4">{messages}</div>
      </div>
    </div>
  );
}

MainTerminalWindow.displayName = "MainTerminalWindow";
