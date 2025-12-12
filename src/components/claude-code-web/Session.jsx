export function Session({ selected, children }) {
  // Extract Name and Footer from children
  const childArray = Array.isArray(children) ? children : [children];
  const name = childArray.find(child => child?.type?.displayName === 'Name');
  const footer = childArray.find(child => child?.type?.displayName === 'Footer');

  return (
    <div className={`px-4 py-2.5 cursor-pointer transition-colors relative border-b border-claude-border ${
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

// Autocomplete popup for agent/session selection
export function AutocompletePopup({ children, isOpen = true }) {
  if (!isOpen) return null;

  // Extract header from children
  const childArray = Array.isArray(children) ? children : [children];
  const header = childArray.find(child => child?.type?.displayName === 'AutocompleteHeader');
  const items = childArray.filter(child => child?.type?.displayName !== 'AutocompleteHeader');

  return (
    <div className="absolute bottom-full left-0 mb-2 w-80 bg-white border border-claude-border rounded-lg shadow-lg z-50 overflow-hidden">
      {header}
      <div className="py-1 max-h-64 overflow-y-auto">
        {items}
      </div>
    </div>
  );
}

AutocompletePopup.displayName = 'AutocompletePopup';

// Optional header for autocomplete with back arrow
export function AutocompleteHeader({ children }) {
  return (
    <div className="px-3 py-2 border-b border-claude-border bg-claude-sidebar flex items-center gap-2">
      <svg className="w-4 h-4 text-claude-text-dim" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      <span className="text-sm font-medium text-claude-text">{children}</span>
    </div>
  );
}

AutocompleteHeader.displayName = 'AutocompleteHeader';

// Individual autocomplete item
export function AutocompleteItem({ children, color, selected = false }) {
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
    <div className={`px-3 py-2 text-sm cursor-pointer transition-colors flex items-center gap-2 ${
      selected ? 'bg-claude-selected' : 'hover:bg-claude-hover'
    }`}>
      <span className={`${dotColorClass} text-lg leading-none`}>•</span>
      <span className="text-claude-text">{children}</span>
    </div>
  );
}

AutocompleteItem.displayName = 'AutocompleteItem';

export { Subsession } from './Subsession';
