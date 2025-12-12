// Individual subsession item - standalone component similar to Session
export function Subsession({ children, selected, color }) {
  // Predefined color map for Tailwind JIT compatibility
  const colorMap = {
    green: 'text-green-500',
    blue: 'text-blue-500',
    red: 'text-red-500',
    yellow: 'text-yellow-500',
    purple: 'text-purple-500',
    orange: 'text-orange-500',
  };

  const dotColorClass = color && colorMap[color] ? colorMap[color] : 'text-claude-text-dim';

  return (
    <div className={`pl-8 pr-4 py-2 cursor-pointer transition-colors relative border-b border-claude-border ${
      selected ? 'bg-claude-hover' : 'hover:bg-claude-hover'
    }`}>
      {selected && (
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-claude-accent"></div>
      )}
      <div className="text-xs text-claude-text flex items-center gap-2">
        <span className={dotColorClass}>•</span>
        <span>{children}</span>
      </div>
    </div>
  );
}

Subsession.displayName = 'Subsession';
