import { TAILWIND_COLOR_MAP } from '../../common';

export function Name({ children, color }) {
  // If color is provided, render with bullet (for Subsession)
  if (color) {
    const dotColorClass = TAILWIND_COLOR_MAP[color] || "text-claude-text-dim";

    return (
      <div className="flex items-center gap-2">
        <span className={dotColorClass}>•</span>
        <span>{children}</span>
      </div>
    );
  }

  // Otherwise, just render children (for Session)
  return <>{children}</>;
}

Name.displayName = "Name";
