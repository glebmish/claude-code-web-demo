/**
 * Scrolls container to show highlighted element
 * @param {HTMLElement} container - Scrollable container
 * @param {Set<string>} activeHighlights - Set of active highlight IDs
 */
export function scrollToHighlight(container, activeHighlights) {
  if (!container || !activeHighlights || activeHighlights.size === 0) return;

  // Find first highlighted element in DOM
  const highlightedElement = document.querySelector('[data-highlighted="true"]');

  if (!highlightedElement) return;

  // Use scrollIntoView for simpler and more reliable scrolling
  // This works for both regular containers and the page container
  highlightedElement.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'nearest'
  });
}
