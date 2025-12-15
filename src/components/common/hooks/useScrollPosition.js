import { useEffect } from "react";

/**
 * Hook to manage scroll position of a container.
 * Scrolls to bottom by default, or to a percentage position if specified.
 *
 * @param {React.RefObject} containerRef - Ref to the scrollable container
 * @param {string|undefined} scroll - Scroll position (e.g., "50%" or undefined for bottom)
 * @param {Array} deps - Additional dependencies to trigger scroll update
 */
export function useScrollPosition(containerRef, scroll, deps = []) {
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Default to bottom if no scroll prop
    if (!scroll) {
      container.scrollTop = container.scrollHeight;
      return;
    }

    // Parse percentage string
    if (scroll.endsWith("%")) {
      const percent = parseFloat(scroll) / 100;
      const maxScroll = container.scrollHeight - container.clientHeight;
      container.scrollTop = maxScroll * percent;
    }
  }, [scroll, ...deps]);
}
