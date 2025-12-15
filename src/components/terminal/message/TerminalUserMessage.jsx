export function TerminalUserMessage({ children }) {
  return (
    <div className="mb-3">
      <div className="bg-terminal-user-message px-3 py-2 rounded">
        <div className="text-xs font-mono leading-relaxed whitespace-pre-wrap text-terminal-text">
          <span className="text-terminal-accent">&gt; </span>
          {children}
        </div>
      </div>
    </div>
  );
}

TerminalUserMessage.displayName = "Message";
