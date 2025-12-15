export function TerminalUserMessage({ children }) {
  return (
    <div className="mb-2 sm:mb-2.5 md:mb-3">
      <div className="bg-terminal-user-message px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-3 rounded">
        <div className="text-xs font-mono leading-relaxed whitespace-pre-wrap text-terminal-text">
          <span className="text-terminal-accent">&gt; </span>
          {children}
        </div>
      </div>
    </div>
  );
}

TerminalUserMessage.displayName = "Message";
