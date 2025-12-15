import { findChildByDisplayName } from "../../common";

export function TerminalToolUse({ children }) {
  const toolName = findChildByDisplayName(children, "ToolName");
  const command = findChildByDisplayName(children, "Command");
  const result = findChildByDisplayName(children, "Result");

  return (
    <div className="mb-3 text-xs font-mono">
      {/* Tool header with command */}
      <div className="text-terminal-text-muted">
        <span>┌─ </span>
        <span className="text-terminal-text">
          {toolName?.props?.children}
          {command && (
            <>
              <span className="text-terminal-text-muted">(</span>
              <span className="text-terminal-accent">{command?.props?.children}</span>
              <span className="text-terminal-text-muted">)</span>
            </>
          )}
        </span>
      </div>

      {/* Result section */}
      {result && (
        <div className="pl-0">
          <pre className="text-xs font-mono overflow-x-auto text-terminal-text-muted max-h-48 overflow-y-auto whitespace-pre-wrap">
            <span className="text-terminal-text-muted">│ </span>
            <code>{result?.props?.children}</code>
          </pre>
        </div>
      )}
    </div>
  );
}

TerminalToolUse.displayName = "ToolUse";
