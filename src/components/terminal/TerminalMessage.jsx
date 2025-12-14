export function TerminalUserMessage({ children }) {
  return (
    <div className="mb-3">
      <div className="bg-[#2d2d30] px-3 py-2 rounded">
        <div className="text-xs font-mono leading-relaxed whitespace-pre-wrap text-[#cccccc]">
          <span className="text-[#4FC1FF]">&gt; </span>
          {children}
        </div>
      </div>
    </div>
  );
}

TerminalUserMessage.displayName = "Message";

export function TerminalResponse({ children, color, from, fromColor }) {
  // Color map matching Subsession component
  const colorNameMap = {
    green: "#22c55e",
    blue: "#3b82f6",
    red: "#ef4444",
    yellow: "#eab308",
    purple: "#a855f7",
    orange: "#f97316",
  };

  const bulletColor = color ? colorNameMap[color] || color : "#cccccc";
  const resolvedFromColor = fromColor
    ? colorNameMap[fromColor] || fromColor
    : null;

  // Calculate text color for from badge (same logic as ColoredTerminal)
  const getTextColor = (bgColor) => {
    if (!bgColor) return "#cccccc";
    // Purple needs light text for readability
    if (bgColor.toLowerCase() === "#a855f7") return "#cccccc";
    const hex = bgColor.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
    return luminance > 120 ? "#1f1f1f" : "#cccccc";
  };

  const textColor = from
    ? getTextColor(resolvedFromColor || "#858585")
    : "#cccccc";

  return (
    <div className="mb-3">
      <div className="text-xs font-mono leading-relaxed whitespace-pre-wrap text-[#cccccc]">
        {from ? (
          <>
            <div
              className="w-1.5 h-1.5 rounded-full inline-block mr-1.5"
              style={{ backgroundColor: resolvedFromColor || "#858585" }}
            />
            <span
              className="px-1 mr-1"
              style={{
                backgroundColor: resolvedFromColor || "#858585",
                color: textColor,
              }}
            >
              {from}
            </span>
            <span className="mr-1">-</span>
            {children}
          </>
        ) : (
          <>
            <span style={{ color: bulletColor }}>• </span>
            {children}
          </>
        )}
      </div>
    </div>
  );
}

TerminalResponse.displayName = "Response";

export function TerminalToolUse({ children }) {
  const childArray = Array.isArray(children) ? children : [children];
  const toolName = childArray.find(
    (child) => child?.type?.displayName === "ToolName"
  );
  const command = childArray.find(
    (child) => child?.type?.displayName === "Command"
  );
  const result = childArray.find(
    (child) => child?.type?.displayName === "Result"
  );

  return (
    <div className="mb-3 text-xs font-mono">
      {/* Tool header with command */}
      <div className="text-[#858585]">
        <span>┌─ </span>
        <span className="text-[#cccccc]">
          {toolName?.props?.children}
          {command && (
            <>
              <span className="text-[#858585]">(</span>
              <span className="text-[#4FC1FF]">{command?.props?.children}</span>
              <span className="text-[#858585]">)</span>
            </>
          )}
        </span>
      </div>

      {/* Result section */}
      {result && (
        <div className="pl-0">
          <pre className="text-xs font-mono overflow-x-auto text-[#858585] max-h-48 overflow-y-auto whitespace-pre-wrap">
            <span className="text-[#858585]">│ </span>
            <code>{result?.props?.children}</code>
          </pre>
        </div>
      )}
    </div>
  );
}

TerminalToolUse.displayName = "ToolUse";

export function TerminalInput({ children }) {
  return (
    <div className="px-4 pt-3 pb-3 bg-[#1e1e1e]">
      <div className="border border-[#3e3e3e] rounded px-3 py-2 bg-[#1e1e1e]">
        <div className="text-xs font-mono text-[#cccccc] whitespace-pre-wrap">
          <span className="text-[#4FC1FF]">&gt; </span>
          {children}
        </div>
      </div>
    </div>
  );
}

TerminalInput.displayName = "Input";

export function TerminalFooter({ children }) {
  return <div className="px-4 pt-0 pb-2 bg-[#1e1e1e]">{children}</div>;
}

TerminalFooter.displayName = "Footer";

export function AgentSection({
  color,
  children,
  selected = false,
  hideDot = false,
}) {
  // Color map matching Colored component
  const colorNameMap = {
    green: "#22c55e", // text-green-500
    blue: "#3b82f6", // text-blue-500
    red: "#ef4444", // text-red-500
    yellow: "#eab308", // text-yellow-500
    purple: "#a855f7", // text-purple-500
    orange: "#f97316", // text-orange-500
  };

  // Resolve color name to hex, or use as-is if already hex
  const dotColor = colorNameMap[color] || color || "#858585";

  if (selected) {
    return (
      <div className="flex items-center gap-2 py-1 px-3">
        <span className="text-xs font-mono text-[#cccccc]">{">"}</span>
        {!hideDot && (
          <div
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ backgroundColor: dotColor }}
          />
        )}
        <span className="text-xs font-mono text-[#cccccc]">{children}</span>
        <span className="text-xs font-mono text-[#cccccc]">{"<"}</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 py-1 px-3">
      {!hideDot && (
        <div
          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
          style={{ backgroundColor: dotColor }}
        />
      )}
      <span className="text-xs font-mono text-[#cccccc]">{children}</span>
    </div>
  );
}

AgentSection.displayName = "AgentSection";

// New agent section with plus icon
export function AgentSectionNew() {
  return (
    <div className="flex items-center gap-2 py-1 px-3">
      <span className="text-xs font-mono text-[#cccccc] leading-none">+</span>
      <span className="text-xs font-mono text-[#cccccc]">New...</span>
    </div>
  );
}

AgentSectionNew.displayName = "AgentSectionNew";

export function Colored({ color, children }) {
  // Color map matching Subsession component
  const colorNameMap = {
    green: "#22c55e", // text-green-500
    blue: "#3b82f6", // text-blue-500
    red: "#ef4444", // text-red-500
    yellow: "#eab308", // text-yellow-500
    purple: "#a855f7", // text-purple-500
    orange: "#f97316", // text-orange-500
  };

  // Resolve color name to hex, or use as-is if already hex
  const resolvedColor = colorNameMap[color] || color;

  // Calculate if background is light or dark to determine readable text color
  const getTextColor = (bgColor) => {
    if (!bgColor) return "#cccccc";

    // Purple needs light text for readability
    if (bgColor.toLowerCase() === "#a855f7") return "#cccccc";

    // Remove # if present
    const hex = bgColor.replace("#", "");

    // Convert to RGB
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    // Calculate luminance (perceived brightness)
    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

    // Return dark text for light backgrounds, light text for dark backgrounds
    // Lowered threshold to 120 so green (#22c55e, luminance ~136) gets dark text
    return luminance > 120 ? "#1f1f1f" : "#cccccc";
  };

  const textColor = getTextColor(resolvedColor);

  return (
    <span
      style={{ backgroundColor: resolvedColor, color: textColor }}
      className="px-1 rounded"
    >
      {children}
    </span>
  );
}

Colored.displayName = "Colored";

export function ColoredTerminal({ color, children }) {
  // Color map matching Subsession component
  const colorNameMap = {
    green: "#22c55e",
    blue: "#3b82f6",
    red: "#ef4444",
    yellow: "#eab308",
    purple: "#a855f7",
    orange: "#f97316",
  };

  // Resolve color name to hex, or use as-is if already hex
  const resolvedColor = colorNameMap[color] || color;

  // Calculate if background is light or dark to determine readable text color
  const getTextColor = (bgColor) => {
    if (!bgColor) return "#cccccc";

    // Purple needs light text for readability
    if (bgColor.toLowerCase() === "#a855f7") return "#cccccc";

    // Remove # if present
    const hex = bgColor.replace("#", "");

    // Convert to RGB
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    // Calculate luminance (perceived brightness)
    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

    // Return dark text for light backgrounds, light text for dark backgrounds
    // Lowered threshold to 120 so green (#22c55e, luminance ~136) gets dark text
    return luminance > 120 ? "#1f1f1f" : "#cccccc";
  };

  const textColor = getTextColor(resolvedColor);

  return (
    <span
      style={{ backgroundColor: resolvedColor, color: textColor }}
      className="px-1"
    >
      {children}
    </span>
  );
}

ColoredTerminal.displayName = "ColoredTerminal";

export function TerminalTabs({ children }) {
  return (
    <div className="flex items-end gap-0 bg-[#1e1e1e] px-2 pt-2 border-b border-[#3e3e3e]">
      {children}
    </div>
  );
}

TerminalTabs.displayName = "TerminalTabs";

export function TerminalTab({ active, children }) {
  const textColor = active ? "#1f1f1f" : "#858585";
  const slashColor = active ? "#cccccc" : "#858585";
  const bgColor = active ? "#cccccc" : "transparent";

  return (
    <div className="font-mono text-xs px-3 py-1 relative flex items-center">
      <span style={{ color: slashColor }}>╱</span>
      <span
        className="px-1"
        style={{
          color: textColor,
          backgroundColor: bgColor,
        }}
      >
        {children}
      </span>
      <span style={{ color: slashColor }}>╲</span>
    </div>
  );
}

TerminalTab.displayName = "TerminalTab";
