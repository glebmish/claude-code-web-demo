export function TerminalTabs({ children }) {
  return (
    <div className="flex items-end gap-0 bg-[#1e1e1e] px-2 pt-2 border-b border-[#3e3e3e]">
      {children}
    </div>
  );
}

TerminalTabs.displayName = "TerminalTabs";
