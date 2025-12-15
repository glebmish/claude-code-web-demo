import { TAILWIND_COLOR_MAP } from '../../common';

export function AutocompleteItem({ children, color, selected = false }) {
  const dotColorClass =
    color && TAILWIND_COLOR_MAP[color] ? TAILWIND_COLOR_MAP[color] : "text-claude-text-dim";

  return (
    <div
      className={`px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-3 text-xs sm:text-sm cursor-pointer transition-colors flex items-center gap-1 sm:gap-1.5 md:gap-2 ${
        selected ? "bg-claude-selected" : ""
      }`}
    >
      <span className={`${dotColorClass} text-base sm:text-lg leading-none`}>•</span>
      <span className="text-claude-text">{children}</span>
    </div>
  );
}

AutocompleteItem.displayName = "AutocompleteItem";
