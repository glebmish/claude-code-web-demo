export function TerminalTabs({ children }) {
  return (
    <div className="flex items-end gap-0 bg-terminal-bg px-2 pt-2 border-b border-terminal-border">
      {children}
    </div>
  );
}

TerminalTabs.displayName = "TerminalTabs";
