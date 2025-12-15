export function AutocompleteHeader({ children, arrow = true }) {
  return (
    <div className="px-2 py-1 sm:px-2.5 sm:py-1.5 md:px-3 md:py-2 border-b border-claude-border bg-claude-sidebar flex items-center gap-1 sm:gap-1.5 md:gap-2">
      {arrow && (
        <svg
          className="w-3 h-3 sm:w-4 sm:h-4 text-claude-text-dim"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      )}
      <span className="text-xs sm:text-sm font-medium text-claude-text">{children}</span>
    </div>
  );
}

AutocompleteHeader.displayName = "AutocompleteHeader";
