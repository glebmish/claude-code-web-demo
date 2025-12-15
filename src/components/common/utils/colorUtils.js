/**
 * Shared color utilities for consistent color handling across web and terminal components.
 */

/**
 * Color name to hex mapping used throughout the application.
 */
export const COLOR_MAP = {
  green: "#22c55e",
  blue: "#3b82f6",
  red: "#ef4444",
  yellow: "#eab308",
  purple: "#a855f7",
  orange: "#f97316",
};

/**
 * Resolves a color name to its hex value, or returns the color as-is if already hex.
 * @param {string} color - Color name (e.g., "green") or hex value (e.g., "#22c55e")
 * @returns {string} Resolved hex color value
 */
export function resolveColor(color) {
  return COLOR_MAP[color] || color;
}

/**
 * Calculates appropriate text color (light or dark) based on background color luminance.
 * Uses the formula for perceived brightness: 0.299*R + 0.587*G + 0.114*B
 *
 * @param {string} bgColor - Background color in hex format (e.g., "#22c55e")
 * @returns {string} Text color - either dark (#1f1f1f) or light (#cccccc)
 */
export function getTextColor(bgColor) {
  if (!bgColor) return "#cccccc";

  // Purple needs light text for readability (special case)
  if (bgColor.toLowerCase() === "#a855f7") return "#cccccc";

  // Remove # if present
  const hex = bgColor.replace("#", "");

  // Convert to RGB
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Calculate luminance (perceived brightness)
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

  // Return dark text for light backgrounds, light text for dark backgrounds
  // Threshold of 120 ensures green (#22c55e, luminance ~136) gets dark text
  return luminance > 120 ? "#1f1f1f" : "#cccccc";
}

/**
 * Tailwind CSS color class mapping for dot/bullet colors.
 */
export const TAILWIND_COLOR_MAP = {
  green: "text-green-500",
  blue: "text-blue-500",
  red: "text-red-500",
  yellow: "text-yellow-500",
  purple: "text-purple-500",
  orange: "text-orange-500",
};

/**
 * Terminal color palette constants.
 * Used for consistent styling across terminal components.
 */
export const TERMINAL_COLORS = {
  text: "#cccccc",
  textMuted: "#858585",
  background: "#1e1e1e",
  border: "#3e3e3e",
  accent: "#4FC1FF",
};
