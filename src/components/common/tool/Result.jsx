export function Result({ children }) {
  return (
    <pre className="px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-3 text-xs font-mono overflow-x-auto text-claude-text-dim max-h-32 sm:max-h-40 md:max-h-48 overflow-y-auto">
      <code>{children}</code>
    </pre>
  );
}

Result.displayName = "Result";
