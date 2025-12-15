export function Note({ children }) {
  return (
    <div
      className="absolute top-1 sm:top-4 left-1/2 transform -translate-x-1/2 z-50
                    bg-claude-sidebar border border-claude-border rounded-lg
                    px-2 py-1 sm:px-6 sm:py-3 shadow-sm max-w-xs sm:max-w-2xl"
    >
      <p className="text-claude-text-dim text-xs sm:text-sm font-medium text-center">
        {children}
      </p>
    </div>
  );
}

Note.displayName = "Note";
