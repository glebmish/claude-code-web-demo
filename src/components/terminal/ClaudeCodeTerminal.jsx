export function ClaudeCodeTerminal({ children, scroll }) {
  const childArray = Array.isArray(children) ? children : [children];

  const clawd = childArray.find(
    (child) => child?.type?.displayName === "Clawd"
  );
  const tabs = childArray.find(
    (child) => child?.type?.displayName === "TerminalTabs"
  );
  const mainWindow = childArray.find(
    (child) => child?.type?.displayName === "MainTerminalWindow"
  );
  const input = childArray.find(
    (child) => child?.type?.displayName === "Input"
  );
  const footer = childArray.find(
    (child) => child?.type?.displayName === "Footer"
  );

  // Clone mainWindow with clawd and scroll props if they exist
  const enhancedMainWindow = mainWindow
    ? { ...mainWindow, props: { ...mainWindow.props, clawd, scroll } }
    : mainWindow;

  return (
    <div className="absolute top-[10%] left-[10%] z-30 w-[700px] h-[450px] bg-[#1e1e1e] border border-[#3e3e3e] rounded-lg shadow-2xl overflow-hidden flex flex-col">
      {tabs}
      {enhancedMainWindow}
      {input}
      {footer}
    </div>
  );
}

ClaudeCodeTerminal.displayName = "ClaudeCodeTerminal";
