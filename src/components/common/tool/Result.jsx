export function Result({ children }) {
  return (
    <pre className="px-3 py-2 text-xs font-mono overflow-x-auto text-claude-text-dim max-h-48 overflow-y-auto">
      <code>{children}</code>
    </pre>
  );
}

Result.displayName = "Result";
