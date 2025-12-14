import { resolveColor, getTextColor } from '../utils/colorUtils';

export function Colored({ color, children }) {
  const resolvedColor = resolveColor(color);
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
