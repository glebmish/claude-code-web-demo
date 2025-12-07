/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Claude Code specific colors (light theme from screenshot)
        'claude-bg': '#ffffff',           // Main background (white)
        'claude-sidebar': '#f7f7f7',       // Sidebar background (very light gray)
        'claude-border': '#e0e0e0',        // Border color (light gray)
        'claude-text': '#1f1f1f',          // Primary text (dark)
        'claude-text-dim': '#737373',      // Secondary text (medium gray)
        'claude-accent': '#7c3aed',        // Purple accent (unchanged)
        'claude-hover': '#f0f0f0',         // Hover state (light gray)
        'claude-selected': '#e8e8e8',      // Selected item (slightly darker gray)
        'claude-tool-bg': '#fafafa',       // Tool use background (off-white)
        'claude-input-bg': '#f9f9f9',      // Input background (very light gray)
        'claude-message-user': '#f0f0f0',      // User message background
        'claude-message-unknown': '#e8e8e8',    // Unknown sender background
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Monaco', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}
