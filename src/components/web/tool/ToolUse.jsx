import { findChildByDisplayName } from "../../common";

export function ToolUse({ children }) {
  const toolName = findChildByDisplayName(children, "ToolName");
  const command = findChildByDisplayName(children, "Command");
  const result = findChildByDisplayName(children, "Result");

  return (
    <div className="mb-2 sm:mb-3 md:mb-4 bg-claude-tool-bg border border-claude-border rounded overflow-hidden text-xs sm:text-sm">
      {/* Tool header */}
      <div className="px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-3 border-b border-claude-border flex items-center gap-2 bg-claude-sidebar">
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
