export function AutocompleteHeader({ children, arrow = true }) {
  return (
    <div className="px-3 py-2 border-b border-claude-border bg-claude-sidebar flex items-center gap-2">
      {arrow && (
        <svg
          className="w-4 h-4 text-claude-text-dim"
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
      <span className="text-sm font-medium text-claude-text">{children}</span>
    </div>
  );
}

AutocompleteHeader.displayName = "AutocompleteHeader";
