export function Session({ selected, children }) {
  // Extract Name and Footer from children
  const childArray = Array.isArray(children) ? children : [children];
  const name = childArray.find(child => child?.type?.displayName === 'Name');
  const footer = childArray.find(child => child?.type?.displayName === 'Footer');

  return (
    <div className={`px-4 py-2.5 cursor-pointer transition-colors relative ${
      selected ? 'bg-claude-hover' : 'hover:bg-claude-hover'
    }`}>
      {selected && (
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-claude-accent"></div>
      )}
      <div className="text-sm font-medium mb-1 line-clamp-2">
        {name}
      </div>
      <div className="text-xs text-claude-text-dim">
        {footer}
      </div>
    </div>
  );
}

export function Name({ children }) {
  return <>{children}</>;
}

Name.displayName = 'Name';

export function Footer({ children }) {
  return <>{children}</>;
}

Footer.displayName = 'Footer';
