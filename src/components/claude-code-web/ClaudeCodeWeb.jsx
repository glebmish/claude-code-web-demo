import { SidebarHeader } from './SidebarHeader';
import { RepositorySelector } from './RepositorySelector';

export function ClaudeCodeWeb({ children }) {
  // Extract children by type for proper placement
  const childArray = Array.isArray(children) ? children : [children];
  const sessions = childArray.find(child => child?.type?.displayName === 'Sessions');
  const mainChat = childArray.find(child => child?.type?.displayName === 'MainChat');

  return (
    <div className="flex h-full w-full bg-claude-bg text-claude-text">
      {/* Left Sidebar */}
      <div className="w-80 bg-claude-sidebar border-r border-claude-border flex flex-col">
        <SidebarHeader />
        <RepositorySelector />
        {sessions}
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {mainChat}
      </div>
    </div>
  );
}
