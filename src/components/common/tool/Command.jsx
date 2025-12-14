export function Command({ children }) {
  return (
    <pre className="px-3 py-2 text-xs font-mono overflow-x-auto">
      <code className="text-claude-text">{children}</code>
    </pre>
  );
}

Command.displayName = "Command";
