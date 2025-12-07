export function Sessions({ children }) {
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="px-4 py-2 flex items-center justify-between border-b border-claude-border">
        <span className="text-xs font-semibold text-claude-text-dim uppercase">Sessions</span>
        <span className="text-xs text-claude-text-dim">Active</span>
      </div>
      <div className="py-1">
        {children}
      </div>
    </div>
  );
}
