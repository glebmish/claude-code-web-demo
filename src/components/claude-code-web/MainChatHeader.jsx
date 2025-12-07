export function MainChatHeader({ children }) {
  return (
    <div className="border-b border-claude-border px-6 py-3 flex items-center gap-2">
      <h2 className="text-sm font-medium">{children}</h2>
      <svg className="w-4 h-4 text-claude-text-dim ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );
}

MainChatHeader.displayName = 'MainChatHeader';
