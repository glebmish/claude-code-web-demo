export function Sessions({ children }) {
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 flex items-center justify-between border-b border-claude-border">
        <span className="text-[10px] sm:text-xs font-semibold text-claude-text-dim uppercase">
          Sessions
        </span>
        <span className="text-[10px] sm:text-xs text-claude-text-dim">Active</span>
      </div>
      <div className="py-0.5 sm:py-1">{children}</div>
    </div>
  );
}

Sessions.displayName = "Sessions";
