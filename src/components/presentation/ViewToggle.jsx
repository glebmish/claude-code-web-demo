import { useView } from "../../contexts/ViewContext";

export function ViewToggle() {
  const { viewMode, toggleView } = useView();

  return (
    <button
      onClick={toggleView}
      className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-claude-sidebar border border-claude-border hover:bg-claude-bg transition-colors"
      title="Toggle between Web and Terminal view (Space)"
    >
      <span
        className={`text-xs font-medium ${
          viewMode === "web" ? "text-claude-text" : "text-claude-text-dim"
        }`}
      >
        Web
      </span>
      <div className="relative w-10 h-5 bg-gray-600 rounded-full">
        <div
          className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform duration-200 ${
            viewMode === "terminal" ? "translate-x-5" : ""
          }`}
        />
      </div>
      <span
        className={`text-xs font-medium ${
          viewMode === "terminal" ? "text-claude-text" : "text-claude-text-dim"
        }`}
      >
        Terminal
      </span>
    </button>
  );
}
