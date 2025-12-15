export function Command({ children }) {
  return (
    <pre className="px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-3 text-xs font-mono overflow-x-auto">
      <code className="text-claude-text">{children}</code>
    </pre>
  );
}

Command.displayName = "Command";
