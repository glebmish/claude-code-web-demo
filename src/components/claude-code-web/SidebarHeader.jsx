export function SidebarHeader() {
  return (
    <div className="p-4 border-b border-claude-border">
      <h1 className="text-base font-semibold mb-4">Claude Code</h1>
      <div className="relative">
        <textarea
          placeholder="Find a small todo in the codebase and do it"
          className="w-full bg-claude-input-bg border border-claude-border rounded-lg px-4 py-3 text-sm placeholder-claude-text-dim focus:outline-none focus:ring-1 focus:ring-claude-accent resize-none"
          rows={3}
          readOnly
        />
        <button className="absolute right-3 bottom-3 p-1.5 hover:bg-claude-hover rounded">
          <svg className="w-4 h-4 text-claude-text-dim" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
