import { findChildByDisplayName } from "../../common";

export function Session({ selected, children }) {
  const name = findChildByDisplayName(children, "Name");
  const footer = findChildByDisplayName(children, "Footer");

  return (
    <div
      className={`px-4 py-2.5 cursor-pointer transition-colors relative border-b border-claude-border ${
        selected ? "bg-claude-hover" : "hover:bg-claude-hover"
      }`}
    >
      {selected && (
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-claude-accent"></div>
      )}
      <div className="text-sm font-medium mb-1 line-clamp-2">{name}</div>
      <div className="text-xs text-claude-text-dim">{footer}</div>
    </div>
  );
}

Session.displayName = "Session";
