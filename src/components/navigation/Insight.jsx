export function Insight({ children, className = "" }) {
  return (
    <div
      className={`
      bg-claude-selected border border-claude-border rounded-xl
      px-4 py-2 shadow-sm
      text-left text-claude-text text-sm font-medium
      leading-snug max-w-xl
      ${className}
    `}
    >
      {children}
    </div>
  );
}
