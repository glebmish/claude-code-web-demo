import { Colored } from '../../common';

export function Message({ from, fromColor, children }) {
  const isUser = from === "user";
  const isAssistant = from === "assistant";

  // Determine background class
  let backgroundClass = "";
  if (isUser) {
    backgroundClass = "bg-claude-message-user";
  } else if (!isAssistant) {
    // Unknown sender (neither user nor assistant)
    backgroundClass = "bg-claude-message-unknown";
  }
  // If isAssistant, backgroundClass remains empty (no background)

  // Add padding and rounding when there's a background
  const paddingClass = backgroundClass ? "px-2 py-2 sm:px-3 sm:py-2.5 md:px-4 md:py-3 rounded-lg" : "";

  return (
    <div className="mb-2 sm:mb-2.5 md:mb-3">
      <div className={`${backgroundClass} ${paddingClass}`}>
        <div className="text-[10px] sm:text-xs text-claude-text-dim mb-1 sm:mb-1.5 md:mb-2 font-medium uppercase tracking-wide">
          {fromColor ? <Colored color={fromColor}>{from}</Colored> : from}
        </div>
        <div className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap text-claude-text">
          {children}
        </div>
      </div>
    </div>
  );
}

Message.displayName = "Message";
