export function Response({ children }) {
  return (
    <div className="mb-3">
      <div className="text-sm leading-relaxed whitespace-pre-wrap text-claude-text">
        {children}
      </div>
    </div>
  );
}

Response.displayName = "Response";
