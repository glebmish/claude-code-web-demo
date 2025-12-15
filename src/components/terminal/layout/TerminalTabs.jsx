export function TerminalTabs({ children }) {
  return (
    <div className="flex items-end gap-0 bg-terminal-bg px-1 pt-1 sm:px-1.5 sm:pt-1.5 md:px-2 md:pt-2 border-b border-terminal-border">
      {children}
    </div>
  );
}

TerminalTabs.displayName = "TerminalTabs";
