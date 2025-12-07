export function Terminal({ children }) {
  // Extract Tabs and MainTerminalWindow from children
  const childArray = Array.isArray(children) ? children : [children];
  const tabs = childArray.find(child => child?.type?.displayName === 'Tabs');
  const mainWindow = childArray.find(child => child?.type?.displayName === 'MainTerminalWindow');

  return (
    <div className="absolute top-[10%] left-[10%] z-30 w-[700px] h-[450px] bg-[#1e1e1e] border border-[#3e3e3e] rounded-lg shadow-2xl overflow-hidden flex flex-col">
      {tabs}
      {mainWindow}
    </div>
  );
}

Terminal.displayName = 'Terminal';

export function Tabs({ children }) {
  return (
    <div className="flex bg-[#252526] border-b border-[#3e3e3e]">
      {children}
    </div>
  );
}

Tabs.displayName = 'Tabs';

export function Tab({ active, children }) {
  return (
    <div className={`px-4 py-2 text-xs font-mono cursor-pointer transition-colors relative ${
      active
        ? 'bg-[#1e1e1e] text-[#cccccc]'
        : 'bg-[#2d2d30] text-[#969696] hover:bg-[#3e3e42]'
    }`}>
      {active && (
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#007acc]"></div>
      )}
      {children}
    </div>
  );
}

Tab.displayName = 'Tab';

export function MainTerminalWindow({ children }) {
  return (
    <div className="flex-1 overflow-y-auto p-4 font-mono text-xs text-[#cccccc] bg-[#1e1e1e]">
      {children}
    </div>
  );
}

MainTerminalWindow.displayName = 'MainTerminalWindow';
