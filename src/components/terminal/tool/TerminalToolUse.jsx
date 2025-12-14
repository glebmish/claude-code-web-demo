export function TerminalToolUse({ children }) {
  const childArray = Array.isArray(children) ? children : [children];
  const toolName = childArray.find(
    (child) => child?.type?.displayName === "ToolName"
  );
  const command = childArray.find(
    (child) => child?.type?.displayName === "Command"
  );
  const result = childArray.find(
    (child) => child?.type?.displayName === "Result"
  );

  return (
    <div className="mb-3 text-xs font-mono">
      {/* Tool header with command */}
      <div className="text-[#858585]">
        <span>┌─ </span>
        <span className="text-[#cccccc]">
          {toolName?.props?.children}
          {command && (
            <>
              <span className="text-[#858585]">(</span>
              <span className="text-[#4FC1FF]">{command?.props?.children}</span>
              <span className="text-[#858585]">)</span>
            </>
          )}
        </span>
      </div>

      {/* Result section */}
      {result && (
        <div className="pl-0">
          <pre className="text-xs font-mono overflow-x-auto text-[#858585] max-h-48 overflow-y-auto whitespace-pre-wrap">
            <span className="text-[#858585]">│ </span>
            <code>{result?.props?.children}</code>
          </pre>
        </div>
      )}
    </div>
  );
}

TerminalToolUse.displayName = "ToolUse";
