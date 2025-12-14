import { COLOR_MAP, getTextColor } from '../../common';

export function TerminalResponse({ children, color, from, fromColor }) {
  const bulletColor = color ? COLOR_MAP[color] || color : "#cccccc";
  const resolvedFromColor = fromColor
    ? COLOR_MAP[fromColor] || fromColor
    : null;

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
