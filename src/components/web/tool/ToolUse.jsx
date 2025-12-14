export function ToolUse({ children }) {
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
    <div className="mb-4 bg-claude-tool-bg border border-claude-border rounded overflow-hidden text-sm">
      {/* Tool header */}
      <div className="px-3 py-2 border-b border-claude-border flex items-center gap-2 bg-claude-sidebar">
        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
        {toolName}
      </div>

      {/* Command section */}
      {command && (
        <div className="border-b border-claude-border">{command}</div>
      )}

      {/* Result section */}
      {result && <div>{result}</div>}
    </div>
  );
}

ToolUse.displayName = "ToolUse";
