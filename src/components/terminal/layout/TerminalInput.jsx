export function TerminalInput({ children }) {
  return (
    <div className="px-4 pt-3 pb-3 bg-[#1e1e1e]">
      <div className="border border-[#3e3e3e] rounded px-3 py-2 bg-[#1e1e1e]">
        <div className="text-xs font-mono text-[#cccccc] whitespace-pre-wrap">
          <span className="text-[#4FC1FF]">&gt; </span>
          {children}
        </div>
      </div>
    </div>
  );
}

TerminalInput.displayName = "Input";
