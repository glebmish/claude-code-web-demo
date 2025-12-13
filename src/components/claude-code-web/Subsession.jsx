// Individual subsession item - standalone component similar to Session
export function Subsession({ children, selected }) {
  // Extract Name and Footer from children
  const childArray = Array.isArray(children) ? children : [children];
  const name = childArray.find(child => child?.type?.displayName === 'Name');
  const footer = childArray.find(child => child?.type?.displayName === 'Footer');

  return (
    <div className={`pl-8 pr-4 py-2.5 cursor-pointer transition-colors relative border-b border-claude-border ${
      selected ? 'bg-claude-hover' : 'hover:bg-claude-hover'
    }`}>
      {selected && (
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-claude-accent"></div>
      )}
      <div className="text-xs font-medium mb-1 line-clamp-2">
        {name}
      </div>
      {footer && (
        <div className="text-xs text-claude-text-dim ml-5">
          {footer}
        </div>
      )}
    </div>
  );
}

Subsession.displayName = 'Subsession';
