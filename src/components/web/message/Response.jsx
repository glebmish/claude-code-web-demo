export function Response({ children }) {
  return (
    <div className="mb-2 sm:mb-2.5 md:mb-3">
      <div className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap text-claude-text">
        {children}
      </div>
    </div>
  );
}

Response.displayName = "Response";
