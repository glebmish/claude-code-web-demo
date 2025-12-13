import { useView } from '../../contexts/ViewContext';

export function TerminalView({ children }) {
  const { viewMode } = useView();

  // Only render when terminal view is active
  if (viewMode !== 'terminal') {
    return null;
  }

  return <>{children}</>;
}
