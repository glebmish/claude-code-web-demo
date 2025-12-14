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
