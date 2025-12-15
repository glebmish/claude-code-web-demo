import { TERMINAL_COLORS } from "../../common";

export function TerminalTab({ selected, children }) {
  const textColor = selected ? TERMINAL_COLORS.background : TERMINAL_COLORS.textMuted;
  const slashColor = selected ? TERMINAL_COLORS.text : TERMINAL_COLORS.textMuted;
  const bgColor = selected ? TERMINAL_COLORS.text : "transparent";

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
