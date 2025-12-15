export function Insight({ children, className = "" }) {
  return (
    <div
      className={`
      bg-claude-selected border border-claude-border rounded-xl
      px-3 py-2 sm:px-4 sm:py-2.5 shadow-sm
      text-left text-claude-text text-xs sm:text-sm font-medium
      leading-snug max-w-full sm:max-w-xl
      ${className}
    `}
    >
      {children}
    </div>
  );
}
