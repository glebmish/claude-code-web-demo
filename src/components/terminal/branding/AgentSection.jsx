import { COLOR_MAP } from '../../common';

export function AgentSection({
  color,
  children,
  selected = false,
  hideDot = false,
}) {
  // Resolve color name to hex, or use as-is if already hex
  const dotColor = COLOR_MAP[color] || color || "#858585";

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
