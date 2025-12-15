export function TerminalInput({ children }) {
  return (
    <div className="px-4 pt-3 pb-3 bg-terminal-bg">
      <div className="border border-terminal-border rounded px-3 py-2 bg-terminal-bg">
        <div className="text-xs font-mono text-terminal-text whitespace-pre-wrap">
          <span className="text-terminal-accent">&gt; </span>
          {children}
        </div>
      </div>
    </div>
  );
}

TerminalInput.displayName = "Input";
