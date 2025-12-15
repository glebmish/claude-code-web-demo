import { COLOR_MAP, getTextColor, TERMINAL_COLORS } from '../../common';

export function TerminalResponse({ children, color, from, fromColor }) {
  const bulletColor = color ? COLOR_MAP[color] || color : TERMINAL_COLORS.text;
  const resolvedFromColor = fromColor
    ? COLOR_MAP[fromColor] || fromColor
    : null;

  const textColor = from
    ? getTextColor(resolvedFromColor || TERMINAL_COLORS.textMuted)
    : TERMINAL_COLORS.text;

  return (
    <div className="mb-3">
      <div className="text-xs font-mono leading-relaxed whitespace-pre-wrap text-terminal-text">
        {from ? (
          <>
            <div
              className="w-1.5 h-1.5 rounded-full inline-block mr-1.5"
              style={{ backgroundColor: resolvedFromColor || TERMINAL_COLORS.textMuted }}
            />
            <span
              className="px-1 mr-1"
              style={{
                backgroundColor: resolvedFromColor || TERMINAL_COLORS.textMuted,
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
