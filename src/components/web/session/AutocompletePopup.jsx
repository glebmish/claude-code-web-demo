import { toChildArray, findChildByDisplayName } from "../../common";

export function AutocompletePopup({ children, isOpen = true }) {
  if (!isOpen) return null;

  const childArray = toChildArray(children);
  const header = findChildByDisplayName(children, "AutocompleteHeader");
  const items = childArray.filter(
    (child) => child?.type?.displayName !== "AutocompleteHeader"
  );

  return (
    <div className="absolute bottom-full left-0 mb-2 w-full max-w-[90vw] sm:max-w-md md:w-104 bg-white border border-claude-border rounded-lg shadow-lg z-50 overflow-hidden">
      {header}
      <div className="py-0.5 sm:py-1 max-h-48 sm:max-h-56 md:max-h-64 overflow-y-auto">{items}</div>
    </div>
  );
}

AutocompletePopup.displayName = "AutocompletePopup";
