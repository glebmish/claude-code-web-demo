export function TerminalUserMessage({ children }) {
  return (
    <div className="mb-3">
      <div className="bg-[#2d2d30] px-3 py-2 rounded">
        <div className="text-xs font-mono leading-relaxed whitespace-pre-wrap text-[#cccccc]">
          <span className="text-[#4FC1FF]">&gt; </span>
          {children}
        </div>
      </div>
    </div>
  );
}

TerminalUserMessage.displayName = 'Message';

export function TerminalResponse({ children, color, from, fromColor }) {
  const bulletColor = color || '#cccccc';

  // Color map matching Subsession component
  const colorNameMap = {
    green: '#22c55e',
    blue: '#3b82f6',
    red: '#ef4444',
    yellow: '#eab308',
    purple: '#a855f7',
    orange: '#f97316',
  };

  const resolvedFromColor = fromColor ? (colorNameMap[fromColor] || fromColor) : null;

  return (
    <div className="mb-3">
      <div className="text-xs font-mono leading-relaxed whitespace-pre-wrap text-[#cccccc]">
        {from ? (
          <>
            <div
              className="w-1.5 h-1.5 rounded-full inline-block mr-1.5"
              style={{ backgroundColor: resolvedFromColor || '#858585' }}
            />
            <span
              className="px-1 rounded mr-1"
              style={{
                backgroundColor: resolvedFromColor || '#858585',
                color: '#1f1f1f'
              }}
            >
              {from}
            </span>
            <span className="mr-1">-</span>
            {children}
          </>
        ) : (
          <>
            <span style={{ color: bulletColor }}>• </span>
            {children}
          </>
        )}
      </div>
    </div>
  );
}

TerminalResponse.displayName = 'Response';

export function TerminalToolUse({ children }) {
  const childArray = Array.isArray(children) ? children : [children];
  const toolName = childArray.find(child => child?.type?.displayName === 'ToolName');
  const command = childArray.find(child => child?.type?.displayName === 'Command');
  const result = childArray.find(child => child?.type?.displayName === 'Result');

  return (
    <div className="mb-3 bg-[#252526] border border-[#3e3e3e] rounded overflow-hidden text-xs">
      {/* Tool header with command */}
      <div className="px-3 py-2 border-b border-[#3e3e3e]">
        <span className="font-semibold text-xs text-[#cccccc]">
          {toolName?.props?.children}
          {command && (
            <>
              <span className="text-[#cccccc]">(</span>
              <span className="font-normal text-[#4FC1FF]">{command?.props?.children}</span>
              <span className="text-[#cccccc]">)</span>
            </>
          )}
        </span>
      </div>

      {/* Result section */}
      {result && (
        <div className="px-3 py-2">
          <pre className="text-xs font-mono overflow-x-auto text-[#858585] max-h-48 overflow-y-auto">
            <code>{result?.props?.children}</code>
          </pre>
        </div>
      )}
    </div>
  );
}

TerminalToolUse.displayName = 'ToolUse';

export function TerminalInput({ children }) {
  return (
    <div className="px-4 py-3 bg-[#1e1e1e]">
      <div className="border border-[#3e3e3e] rounded px-3 py-2 bg-[#1e1e1e]">
        <div className="text-xs font-mono text-[#cccccc]">
          <span className="text-[#4FC1FF]">&gt; </span>
          {children}
        </div>
      </div>
    </div>
  );
}

TerminalInput.displayName = 'Input';

export function TerminalFooter({ children }) {
  return (
    <div className="max-h-24 overflow-y-auto px-4 py-2 bg-[#1e1e1e]">
      {children}
    </div>
  );
}

TerminalFooter.displayName = 'Footer';

export function AgentSection({ color, children }) {
  const dotColor = color || '#858585';

  return (
    <div className="flex items-center gap-2 py-1">
      <div
        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{ backgroundColor: dotColor }}
      />
      <span className="text-xs font-mono text-[#858585]">
        {children}
      </span>
    </div>
  );
}

AgentSection.displayName = 'AgentSection';

export function Colored({ color, children }) {
  // Color map matching Subsession component
  const colorNameMap = {
    green: '#22c55e',   // text-green-500
    blue: '#3b82f6',    // text-blue-500
    red: '#ef4444',     // text-red-500
    yellow: '#eab308',  // text-yellow-500
    purple: '#a855f7',  // text-purple-500
    orange: '#f97316',  // text-orange-500
  };

  // Resolve color name to hex, or use as-is if already hex
  const resolvedColor = colorNameMap[color] || color;

  // Calculate if background is light or dark to determine readable text color
  const getTextColor = (bgColor) => {
    if (!bgColor) return '#cccccc';

    // Remove # if present
    const hex = bgColor.replace('#', '');

    // Convert to RGB
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    // Calculate luminance (perceived brightness)
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b);

    // Return dark text for light backgrounds, light text for dark backgrounds
    // Lowered threshold to 120 so green (#22c55e, luminance ~136) gets dark text
    return luminance > 120 ? '#1f1f1f' : '#cccccc';
  };

  const textColor = getTextColor(resolvedColor);

  return (
    <span style={{ backgroundColor: resolvedColor, color: textColor }} className="px-1 rounded">
      {children}
    </span>
  );
}

Colored.displayName = 'Colored';

export function TerminalTabs({ children }) {
  return (
    <div className="flex items-end gap-0 bg-[#1e1e1e] px-2 pt-2 border-b border-[#3e3e3e]">
      {children}
    </div>
  );
}

TerminalTabs.displayName = 'TerminalTabs';

export function TerminalTab({ active, children }) {
  const textColor = active ? '#1f1f1f' : '#858585';
  const slashColor = active ? '#cccccc' : '#858585';
  const bgColor = active ? '#cccccc' : 'transparent';

  return (
    <div className="font-mono text-xs px-3 py-1 relative flex items-center">
      <span style={{ color: slashColor }}>╱</span>
      <span
        className="px-1"
        style={{
          color: textColor,
          backgroundColor: bgColor
        }}
      >
        {children}
      </span>
      <span style={{ color: slashColor }}>╲</span>
    </div>
  );
}

TerminalTab.displayName = 'TerminalTab';
