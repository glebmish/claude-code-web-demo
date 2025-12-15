import { SidebarHeader } from "./layout/SidebarHeader";
import { RepositorySelector } from "./controls/RepositorySelector";
import { toChildArray, findChildByDisplayName } from "../common";

export function ClaudeCodeWeb({ children }) {
  const sessions = findChildByDisplayName(children, "Sessions");

  // Handle MainChat that might be wrapped in Highlight
  let mainChat = findChildByDisplayName(children, "MainChat");
  if (!mainChat) {
    const highlight = findChildByDisplayName(children, "Highlight");
    if (highlight) {
      const innerMainChat = findChildByDisplayName(
        highlight.props.children,
        "MainChat"
      );
      if (innerMainChat) {
        mainChat = highlight; // Use the Highlight wrapper
      }
    }
  }

  const repositorySelector = findChildByDisplayName(children, "RepositorySelector");
  const envSelect = findChildByDisplayName(children, "EnvSelect");
  const newSessionInput = findChildByDisplayName(children, "NewSessionInput");

  return (
    <div className="flex flex-col lg:flex-row min-h-full lg:h-full w-full bg-claude-bg text-claude-text">
      {/* Left Sidebar */}
      <div className="w-full lg:w-80 bg-claude-sidebar border-b lg:border-b-0 lg:border-r border-claude-border flex flex-col">
        <SidebarHeader newSessionInput={newSessionInput} />

        {/* Horizontal selector row */}
        <div className="flex border-b border-claude-border">
          <div
            className={`flex-[3] ${
              envSelect ? "border-r border-claude-border" : ""
            }`}
          >
            {repositorySelector || <RepositorySelector />}
          </div>
          {envSelect && <div className="flex-[1]">{envSelect}</div>}
        </div>

        {sessions}
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col overflow-visible lg:overflow-hidden min-h-0">{mainChat}</div>
    </div>
  );
}
