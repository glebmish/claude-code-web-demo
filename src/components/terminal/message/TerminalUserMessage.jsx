export function TerminalUserMessage({ children }) {
  return (
    <div className="mb-3">
      <div className="bg-[#2d2d30] px-3 py-2 rounded">
        <div className="text-xs font-mono leading-relaxed whitespace-pre-wrap text-[#cccccc]">
          <span className="text-[#4FC1FF]">&gt; </span>
          {children}
        </div>
      </div>
    </div>
  );
}

TerminalUserMessage.displayName = "Message";
