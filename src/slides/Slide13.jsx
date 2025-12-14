import { Slide, Note, FullscreenText, Insight } from "../components/navigation";

export function Slide13() {
  return (
    <Slide>
      <Note>
        Step 4. Hire me to be a part of the team that<br />
        shapes the future of software engineer with features like this<br />
      </Note>

      <FullscreenText showInsights align="left" strongBlur layout="vertical">
        <div className="leading-tight">
          <div>Hire me</div>
          <div className="text-5xl mt-2">Staff Software Engineer @ Apple</div>
          <div className="text-2xl font-normal text-gray-300 mt-1">
            Previously interviewed with Anthropic for Platform Engineering (May) - spent 6 months since building with Claude Code and agentic AI
          </div>
        </div>
        <Insight>
          <b>Contact & Resume</b><br/>
          Phone/Telegram/WhatsApp: +44-740-430-55-63<br/>
          Email: gleb.mishchenko.96@gmail.com<br/>
        </Insight>
        <div className="grid grid-cols-2 gap-4 w-full">
          <Insight>
            <b>Open Source: Deterministic Refactoring with Claude Code</b><br/>
            Multi-agent system that generates OpenRewrite recipes from PR examples and validates with real metrics:<br/>
            • <b>89.6% Precision, 82.4% Recall</b> on Java-focused evals<br/>
            • Custom MCP server delivering OpenRewrite domain knowledge with RAG search<br/>
            • Deterministic precision/recall validation - not LLM-as-judge<br/>
            • Iterative refinement with feedback loops based on quantitative metrics<br/>
            <b>GitHub: github.com/glebmish/rewrite-claude-assisted</b>
          </Insight>
          <Insight>
            <b>Platform Engineering @ Apple</b><br/>
            Leading platform improvements and developer experience initiatives for internal marketing platform serving 500M+ daily notifications:<br/>
            • Built ticket→PR automation using Claude Code in CI - fully closes the loop for simple fixes<br/>
            • Custom Claude Code commands automating contribution workflows and serving as executable documentation<br/>
            • Led technical workshops and mentored intern to full-time hire<br/>
            • Led platform-wide migrations: Prometheus/Grafana, Kubernetes, secret management across 50+ services
          </Insight>
        </div>
      </FullscreenText>
    </Slide>
  );
}
