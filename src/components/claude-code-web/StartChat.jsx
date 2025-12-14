export function StartChat({ children }) {
  return (
    <div className="px-4 py-2">
      <button className="w-full px-3 py-1.5 bg-claude-bg border border-claude-border text-claude-text rounded hover:bg-claude-hover transition-colors text-sm font-medium flex items-center justify-center gap-2">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
        {children}
      </button>
    </div>
  );
}
