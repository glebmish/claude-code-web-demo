export function AutocompleteItemNew() {
  return (
    <div className="px-3 py-2 text-sm cursor-pointer transition-colors flex items-center gap-2">
      <span className="text-claude-text-dim text-lg leading-none">+</span>
      <span className="text-claude-text-dim">New...</span>
    </div>
  );
}

AutocompleteItemNew.displayName = "AutocompleteItemNew";
