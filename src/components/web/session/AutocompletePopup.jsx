import { toChildArray, findChildByDisplayName } from "../../common";

export function AutocompletePopup({ children, isOpen = true }) {
  if (!isOpen) return null;

  const childArray = toChildArray(children);
  const header = findChildByDisplayName(children, "AutocompleteHeader");
  const items = childArray.filter(
    (child) => child?.type?.displayName !== "AutocompleteHeader"
  );

  return (
    <div className="absolute bottom-full left-0 mb-2 w-104 bg-white border border-claude-border rounded-lg shadow-lg z-50 overflow-hidden">
      {header}
      <div className="py-1 max-h-64 overflow-y-auto">{items}</div>
    </div>
  );
}

AutocompletePopup.displayName = "AutocompletePopup";
