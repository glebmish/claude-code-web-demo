export function MainChatTextField({ children }) {
  // Extract autocomplete from children
  const childArray = Array.isArray(children) ? children : [children];
  const autocomplete = childArray.find(child => child?.type?.displayName === 'AutocompletePopup');

  return (
    <div className="border-t border-claude-border px-6 py-4 bg-claude-bg">
      <div className="flex items-end gap-3 relative">
        {autocomplete}
        <div className="flex-1 bg-claude-input-bg border border-claude-border rounded-lg overflow-hidden">
          <textarea
            placeholder="Reply..."
            className="w-full bg-transparent px-4 py-3 outline-none resize-none text-sm placeholder-claude-text-dim focus:outline-none"
            rows={1}
            readOnly
          />
        </div>
        <button className="p-2.5 bg-claude-accent text-white rounded-lg hover:bg-opacity-90 transition-colors flex-shrink-0">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </div>
      <div className="flex items-center gap-4 mt-3 text-xs text-claude-text-dim">
        <button className="flex items-center gap-1 hover:text-claude-text transition-colors">
          <span>claude/analyze-test-runs-011f...</span>
        </button>
        <button className="flex items-center gap-1 hover:text-claude-text transition-colors">
          <span>Create PR</span>
        </button>
      </div>
    </div>
  );
}

MainChatTextField.displayName = 'MainChatTextField';
