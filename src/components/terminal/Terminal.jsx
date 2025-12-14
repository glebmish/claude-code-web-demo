import { useRef, useEffect } from "react";

export function ClaudeCodeTerminal({ children, scroll }) {
  const childArray = Array.isArray(children) ? children : [children];

  const clawd = childArray.find(
    (child) => child?.type?.displayName === "Clawd"
  );
  const tabs = childArray.find(
    (child) => child?.type?.displayName === "TerminalTabs"
  );
  const mainWindow = childArray.find(
    (child) => child?.type?.displayName === "MainTerminalWindow"
  );
  const input = childArray.find(
    (child) => child?.type?.displayName === "Input"
  );
  const footer = childArray.find(
    (child) => child?.type?.displayName === "Footer"
  );

  // Clone mainWindow with clawd and scroll props if they exist
  const enhancedMainWindow = mainWindow
    ? { ...mainWindow, props: { ...mainWindow.props, clawd, scroll } }
    : mainWindow;

  return (
    <div className="absolute top-[10%] left-[10%] z-30 w-[700px] h-[450px] bg-[#1e1e1e] border border-[#3e3e3e] rounded-lg shadow-2xl overflow-hidden flex flex-col">
      {tabs}
      {enhancedMainWindow}
      {input}
      {footer}
    </div>
  );
}

ClaudeCodeTerminal.displayName = "ClaudeCodeTerminal";

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
