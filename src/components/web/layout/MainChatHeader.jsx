export function MainChatHeader({ children }) {
  return (
    <div className="border-b border-claude-border px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 flex items-center gap-2">
      <h2 className="text-xs sm:text-sm font-medium text-claude-text truncate">{children}</h2>
      <svg
        className="w-4 h-4 text-claude-text-dim ml-auto"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  );
}

MainChatHeader.displayName = "MainChatHeader";
