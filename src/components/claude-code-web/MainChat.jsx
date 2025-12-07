export function MainChat({ children }) {
  const childArray = Array.isArray(children) ? children : [children];
  const header = childArray.find(child => child?.type?.displayName === 'MainChatHeader');
  const textField = childArray.find(child => child?.type?.displayName === 'MainChatTextField');
  const messages = childArray.filter(child =>
    ['Message', 'Response', 'ToolUse', 'Highlight'].includes(child?.type?.displayName)
  );

  return (
    <>
      {header}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        {messages}
      </div>
      {textField}
    </>
  );
}

MainChat.displayName = 'MainChat';
