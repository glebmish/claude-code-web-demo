import { useRef, useEffect } from "react";

export function MainChat({ children, scroll }) {
  const childArray = Array.isArray(children) ? children : [children];
  const header = childArray.find(
    (child) => child?.type?.displayName === "MainChatHeader"
  );
  const textField = childArray.find(
    (child) => child?.type?.displayName === "MainChatTextField"
  );
  const messages = childArray.filter((child) =>
    ["Message", "Response", "ToolUse", "Highlight"].includes(
      child?.type?.displayName
    )
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
    <>
      {header}
      <div
        ref={containerRef}
        className={`flex-1 px-6 py-4 flex flex-col overflow-y-auto ${
          scroll ? "[&::-webkit-scrollbar]:hidden" : "justify-end"
        }`}
        style={
          scroll ? { scrollbarWidth: "none", msOverflowStyle: "none" } : {}
        }
      >
        <div className="flex flex-col gap-4">{messages}</div>
      </div>
      {textField}
    </>
  );
}

MainChat.displayName = "MainChat";
