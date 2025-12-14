import { TAILWIND_COLOR_MAP } from '../../common';

export function AutocompleteItem({ children, color, selected = false }) {
  const dotColorClass =
    color && TAILWIND_COLOR_MAP[color] ? TAILWIND_COLOR_MAP[color] : "text-claude-text-dim";

  return (
    <div
      className={`px-3 py-2 text-sm cursor-pointer transition-colors flex items-center gap-2 ${
        selected ? "bg-claude-selected" : ""
      }`}
    >
      <span className={`${dotColorClass} text-lg leading-none`}>•</span>
      <span className="text-claude-text">{children}</span>
    </div>
  );
}

AutocompleteItem.displayName = "AutocompleteItem";
