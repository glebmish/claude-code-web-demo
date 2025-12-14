import { resolveColor, getTextColor } from '../../common';

export function ColoredTerminal({ color, children }) {
  const resolvedColor = resolveColor(color);
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
