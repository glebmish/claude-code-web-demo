import { findChildByDisplayName } from "../../common";

export function Subsession({ children, selected }) {
  const name = findChildByDisplayName(children, "Name");
  const footer = findChildByDisplayName(children, "Footer");

  return (
    <div
      className={`pl-4 pr-2 py-1.5 sm:pl-6 sm:pr-3 sm:py-2 md:pl-8 md:pr-4 md:py-2.5 cursor-pointer transition-colors relative border-b border-claude-border ${
        selected ? "bg-claude-hover" : "hover:bg-claude-hover"
      }`}
    >
      {selected && (
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-claude-accent"></div>
      )}
      <div className="text-[10px] sm:text-xs font-medium mb-0.5 sm:mb-1 line-clamp-2">{name}</div>
      {footer && (
        <div className="text-[10px] sm:text-xs text-claude-text-dim ml-3 sm:ml-4 md:ml-5">{footer}</div>
      )}
    </div>
  );
}

Subsession.displayName = "Subsession";
