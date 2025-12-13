export function ClaudeCodeTerminal({ children }) {
  const childArray = Array.isArray(children) ? children : [children];

  const clawd = childArray.find(child => child?.type?.displayName === 'Clawd');
  const tabs = childArray.find(child => child?.type?.displayName === 'TerminalTabs');
  const mainWindow = childArray.find(child => child?.type?.displayName === 'MainTerminalWindow');
  const input = childArray.find(child => child?.type?.displayName === 'Input');
  const footer = childArray.find(child => child?.type?.displayName === 'Footer');

  // Clone mainWindow with clawd as a prop if clawd exists
  const enhancedMainWindow = mainWindow && clawd
    ? { ...mainWindow, props: { ...mainWindow.props, clawd } }
    : mainWindow;

  return (
    <div className="absolute top-[10%] left-[10%] z-30 w-[700px] h-[450px] bg-[#1e1e1e] border border-[#3e3e3e] rounded-lg shadow-2xl overflow-hidden flex flex-col">
      {tabs}
      {enhancedMainWindow || mainWindow}
      {input}
      {footer}
    </div>
  );
}

ClaudeCodeTerminal.displayName = 'ClaudeCodeTerminal';

export function MainTerminalWindow({ children, clawd }) {
  // Filter children by displayName
  const childArray = Array.isArray(children) ? children : [children];
  const messages = childArray.filter(child =>
    ['Message', 'Response', 'ToolUse'].includes(child?.type?.displayName)
  );

  return (
    <div className="flex-1 overflow-hidden font-mono text-xs text-[#cccccc] bg-[#1e1e1e] flex flex-col justify-end">
      <div className={`transform transition-transform`}>
        {clawd && (
          <div className="border-b border-[#3e3e3e]">
            {clawd}
          </div>
        )}
        <div className="p-4">
          {messages}
        </div>
      </div>
    </div>
  );
}

MainTerminalWindow.displayName = 'MainTerminalWindow';
