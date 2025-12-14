import { Colored } from '../terminal';

export function Message({ from, fromColor, children }) {
  const isUser = from === 'user';
  const isAssistant = from === 'assistant';

  // Determine background class
  let backgroundClass = '';
  if (isUser) {
    backgroundClass = 'bg-claude-message-user';
  } else if (!isAssistant) {
    // Unknown sender (neither user nor assistant)
    backgroundClass = 'bg-claude-message-unknown';
  }
  // If isAssistant, backgroundClass remains empty (no background)

  // Add padding and rounding when there's a background
  const paddingClass = backgroundClass ? 'px-4 py-3 rounded-lg' : '';

  return (
    <div className="mb-3">
      <div className={`${backgroundClass} ${paddingClass}`}>
        <div className="text-xs text-claude-text-dim mb-2 font-medium uppercase tracking-wide">
          {fromColor ? (
            <Colored color={fromColor}>{from}</Colored>
          ) : (
            from
          )}
        </div>
        <div className="text-sm leading-relaxed whitespace-pre-wrap text-claude-text">
          {children}
        </div>
      </div>
    </div>
  );
}

Message.displayName = 'Message';

export function Response({ children }) {
  return (
    <div className="mb-3">
      <div className="text-sm leading-relaxed whitespace-pre-wrap text-claude-text">
        {children}
      </div>
    </div>
  );
}

Response.displayName = 'Response';
