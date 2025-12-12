import { SidebarHeader } from './SidebarHeader';
import { RepositorySelector } from './RepositorySelector';

export function ClaudeCodeWeb({ children }) {
  // Extract children by type for proper placement
  const childArray = Array.isArray(children) ? children : [children];
  const sessions = childArray.find(child => child?.type?.displayName === 'Sessions');
  const mainChat = childArray.find(child => child?.type?.displayName === 'MainChat');
  const repositorySelector = childArray.find(child => child?.type?.displayName === 'RepositorySelector');
  const envSelect = childArray.find(child => child?.type?.displayName === 'EnvSelect');
  const newSessionInput = childArray.find(child => child?.type?.displayName === 'NewSessionInput');

  return (
    <div className="flex h-full w-full bg-claude-bg text-claude-text">
      {/* Left Sidebar */}
      <div className="w-80 bg-claude-sidebar border-r border-claude-border flex flex-col">
        <SidebarHeader />

        {/* Horizontal selector row */}
        <div className="flex border-b border-claude-border">
          <div className={`flex-[3] ${envSelect ? 'border-r border-claude-border' : ''}`}>
            {repositorySelector || <RepositorySelector />}
          </div>
          {envSelect && (
            <div className="flex-[1]">
              {envSelect}
            </div>
          )}
        </div>

        {newSessionInput}

        {sessions}
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {mainChat}
      </div>
    </div>
  );
}
