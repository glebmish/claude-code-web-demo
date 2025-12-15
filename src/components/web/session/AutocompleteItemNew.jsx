export function AutocompleteItemNew() {
  return (
    <div className="px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-3 text-xs sm:text-sm cursor-pointer transition-colors flex items-center gap-1 sm:gap-1.5 md:gap-2">
      <span className="text-claude-text-dim text-base sm:text-lg leading-none">+</span>
      <span className="text-claude-text-dim">New...</span>
    </div>
  );
}

AutocompleteItemNew.displayName = "AutocompleteItemNew";
