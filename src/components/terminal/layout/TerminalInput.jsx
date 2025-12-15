export function TerminalInput({ children }) {
  return (
    <div className="px-2 pt-2 pb-2 sm:px-3 sm:pt-2.5 sm:pb-2.5 md:px-4 md:pt-3 md:pb-3 bg-terminal-bg">
      <div className="border border-terminal-border rounded px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-3 bg-terminal-bg">
        <div className="text-xs font-mono text-terminal-text whitespace-pre-wrap">
          <span className="text-terminal-accent">&gt; </span>
          {children}
        </div>
      </div>
    </div>
  );
}

TerminalInput.displayName = "Input";
