export function Clawd() {
  return (
    <div className="font-mono text-xs text-terminal-text bg-terminal-bg p-4 border-b border-terminal-border">
      <pre className="whitespace-pre">
        {`╭─── Claude Code v2.0.67 ─────────────────────────────────────────────────────────────────╮
│                                                    │                                    │
│                 Welcome back Gleb!                 │                                    │
│                                                    │ ────────────────────────────────── │
│                     * ▐▛███▜▌ *                    │ Recent activity                    │
│                    * ▝▜█████▛▘ *                   │ No recent activity                 │
│                     *  ▘▘ ▝▝  *                    │                                    │
│                                                    │                                    │
│     Sonnet 4.5 · Claude Pro ·                      │                                    │
│     example@gmail.com's Organization               │                                    │
│           ~/projects/rewrite-claude-assisted       │                                    │
╰─────────────────────────────────────────────────────────────────────────────────────────╯`}
      </pre>
    </div>
  );
}

Clawd.displayName = "Clawd";
