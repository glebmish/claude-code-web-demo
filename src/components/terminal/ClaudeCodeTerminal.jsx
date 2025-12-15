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
    <div className="absolute z-30 bg-terminal-bg border border-terminal-border rounded-lg shadow-2xl overflow-hidden flex flex-col w-[90vw] h-[60vh] top-[5%] left-1/2 -translate-x-1/2 sm:w-[85vw] sm:h-[65vh] md:w-[80vw] md:h-[70vh] lg:w-[700px] lg:h-[450px] lg:top-[10%] lg:left-[10%] lg:translate-x-0">
      {tabs}
      {enhancedMainWindow}
      {input}
      {footer}
    </div>
  );
}

ClaudeCodeTerminal.displayName = "ClaudeCodeTerminal";
