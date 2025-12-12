export function EnvSelect({ children }) {
  return (
    <div className="px-2 py-2 flex items-center gap-1 text-[10px] text-claude-text">
      <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 16 16">
        <path d="M13.405 3.17A5.25 5.25 0 0 0 3.17 5.748a3.5 3.5 0 0 0 .042 6.975h9.538a2.75 2.75 0 0 0 .655-5.415v-.018a5.272 5.272 0 0 0 0-.119Z"/>
      </svg>
      <span className="font-medium">{children}</span>
    </div>
  );
}

EnvSelect.displayName = 'EnvSelect';
