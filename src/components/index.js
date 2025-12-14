/**
 * Main component library barrel export.
 *
 * Structure mirrors the DSL hierarchy:
 * - common/      - Shared components between web and terminal
 * - presentation/ - Presentation/slide DSL elements
 * - views/       - View containers (WebView, TerminalView)
 * - web/         - ClaudeCodeWeb DSL branch
 * - terminal/    - ClaudeCodeTerminal DSL branch
 */

// Common components (shared between web and terminal)
export { ToolName, Command, Result, Colored, COLOR_MAP, TAILWIND_COLOR_MAP, resolveColor, getTextColor } from './common';

// Presentation components
export { Demo, Slide, Note, Highlight, MermaidDiagram, FullscreenText, Insight, ViewToggle, NavigationButtons } from './presentation';

// View containers
export { WebView, TerminalView } from './views';

// Web components (ClaudeCodeWeb DSL branch)
export {
  ClaudeCodeWeb,
  SidebarHeader,
  Sessions,
  MainChat,
  MainChatHeader,
  MainChatTextField,
  Session,
  Subsession,
  Name,
  Footer,
  AutocompletePopup,
  AutocompleteHeader,
  AutocompleteItem,
  AutocompleteItemNew,
  Message,
  Response,
  ToolUse,
  RepositorySelector,
  EnvSelect,
  NewSessionInput,
} from './web';

// Terminal components (ClaudeCodeTerminal DSL branch)
export {
  ClaudeCodeTerminal,
  MainTerminalWindow,
  TerminalTabs,
  TerminalTab,
  TerminalInput,
  TerminalFooter,
  TerminalUserMessage,
  TerminalResponse,
  TerminalToolUse,
  Clawd,
  AgentSection,
  AgentSectionNew,
  ColoredTerminal,
} from './terminal';
