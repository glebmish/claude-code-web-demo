import { findChildByDisplayName } from "../common";

export function ClaudeCodeTerminal({ children, scroll }) {
  const clawd = findChildByDisplayName(children, "Clawd");
  const tabs = findChildByDisplayName(children, "TerminalTabs");
  const mainWindow = findChildByDisplayName(children, "MainTerminalWindow");
  const input = findChildByDisplayName(children, "Input");
  const footer = findChildByDisplayName(children, "Footer");

  // Clone mainWindow with clawd and scroll props if they exist
  const enhancedMainWindow = mainWindow
    ? { ...mainWindow, props: { ...mainWindow.props, clawd, scroll } }
    : mainWindow;

  return (
    <div className="absolute top-[10%] left-[10%] z-30 w-[700px] h-[450px] bg-terminal-bg border border-terminal-border rounded-lg shadow-2xl overflow-hidden flex flex-col">
      {tabs}
      {enhancedMainWindow}
      {input}
      {footer}
    </div>
  );
}

ClaudeCodeTerminal.displayName = "ClaudeCodeTerminal";
