export function ClaudeCodeTerminal({ children }) {
  const childArray = Array.isArray(children) ? children : [children];

  const clawd = childArray.find(child => child?.type?.displayName === 'Clawd');
  const tabs = childArray.find(child => child?.type?.displayName === 'TerminalTabs');
  const mainWindow = childArray.find(child => child?.type?.displayName === 'MainTerminalWindow');
  const input = childArray.find(child => child?.type?.displayName === 'Input');
  const footer = childArray.find(child => child?.type?.displayName === 'Footer');

  return (
    <div className="absolute top-[10%] left-[10%] z-30 w-[700px] h-[450px] bg-[#1e1e1e] border border-[#3e3e3e] rounded-lg shadow-2xl overflow-hidden flex flex-col">
      {clawd}
      {tabs}
      {mainWindow}
      {input}
      {footer}
    </div>
  );
}

ClaudeCodeTerminal.displayName = 'ClaudeCodeTerminal';

export function MainTerminalWindow({ children }) {
  // Filter children by displayName
  const childArray = Array.isArray(children) ? children : [children];
  const messages = childArray.filter(child =>
    ['Message', 'Response', 'ToolUse'].includes(child?.type?.displayName)
  );

  return (
    <div className="flex-1 overflow-hidden p-4 font-mono text-xs text-[#cccccc] bg-[#1e1e1e] flex flex-col justify-end">
      <div>
        {messages}
      </div>
    </div>
  );
}

MainTerminalWindow.displayName = 'MainTerminalWindow';
