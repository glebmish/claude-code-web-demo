export function EnvSelect({ children }) {
  return (
    <div className="px-4 py-2 flex items-center gap-2 text-xs text-claude-text">
      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 16 16">
        <path d="M13.405 3.17A5.25 5.25 0 0 0 3.17 5.748a3.5 3.5 0 0 0 .042 6.975h9.538a2.75 2.75 0 0 0 .655-5.415v-.018a5.272 5.272 0 0 0 0-.119Z"/>
      </svg>
      <span className="font-medium text-xs">{children}</span>
    </div>
  );
}

EnvSelect.displayName = 'EnvSelect';
