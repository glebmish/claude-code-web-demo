export function NewSessionInput({ children }) {
  return (
    <div className="px-4 py-3 border-b border-claude-border">
      <div className="flex items-center gap-2 bg-claude-input-bg border border-claude-border rounded-lg px-3 py-2">
        <svg
          className="w-4 h-4 text-claude-text-dim"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
        <input
          type="text"
          placeholder={children || "New session..."}
          className="flex-1 bg-transparent outline-none text-sm text-claude-text placeholder-claude-text-dim"
          readOnly
        />
      </div>
    </div>
  );
}

NewSessionInput.displayName = "NewSessionInput";
