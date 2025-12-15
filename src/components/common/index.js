// Tool components (shared between web and terminal)
export { ToolName, Command, Result } from './tool';

// Text components
export { Colored } from './text';

// Utilities
export { COLOR_MAP, TAILWIND_COLOR_MAP, TERMINAL_COLORS, resolveColor, getTextColor } from './utils/colorUtils';
export { toChildArray, findChildByDisplayName, filterChildrenByDisplayNames, findChildByDisplayNameInWrapper } from './utils/childUtils';

// Hooks
export { useScrollPosition } from './hooks/useScrollPosition';
