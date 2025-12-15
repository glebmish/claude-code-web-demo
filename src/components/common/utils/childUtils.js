/**
 * Normalizes React children to an array.
 * @param {React.ReactNode} children - React children prop
 * @returns {Array} Array of children
 */
export function toChildArray(children) {
  return Array.isArray(children) ? children : [children];
}

/**
 * Finds a child element by its displayName.
 * @param {React.ReactNode} children - React children prop
 * @param {string} displayName - The displayName to search for
 * @returns {React.ReactElement|undefined} The matching child or undefined
 */
export function findChildByDisplayName(children, displayName) {
  const childArray = toChildArray(children);
  return childArray.find((child) => child?.type?.displayName === displayName);
}

/**
 * Filters children by multiple displayNames.
 * @param {React.ReactNode} children - React children prop
 * @param {string[]} displayNames - Array of displayNames to match
 * @returns {React.ReactElement[]} Array of matching children
 */
export function filterChildrenByDisplayNames(children, displayNames) {
  const childArray = toChildArray(children);
  return childArray.filter((child) =>
    displayNames.includes(child?.type?.displayName)
  );
}

/**
 * Finds a child by displayName, looking inside wrapper components (e.g., Highlight).
 * @param {React.ReactNode} children - React children prop
 * @param {string} displayName - The displayName to search for
 * @param {string[]} wrapperNames - Array of wrapper displayNames to look inside
 * @returns {{ element: React.ReactElement|null, wrapper: React.ReactElement|null }}
 */
export function findChildByDisplayNameInWrapper(children, displayName, wrapperNames = ["Highlight"]) {
  const childArray = toChildArray(children);

  for (const child of childArray) {
    // Direct match
    if (child?.type?.displayName === displayName) {
      return { element: child, wrapper: null };
    }

    // Check inside wrappers
    if (wrapperNames.includes(child?.type?.displayName)) {
      const innerChild = findChildByDisplayName(child.props.children, displayName);
      if (innerChild) {
        return { element: innerChild, wrapper: child };
      }
    }
  }

  return { element: null, wrapper: null };
}
