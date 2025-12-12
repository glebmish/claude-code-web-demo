import { Slide, Note, Highlight } from '../components/navigation';
import {
  ClaudeCodeTerminal,
  MainTerminalWindow,
  TerminalUserMessage,
  TerminalResponse,
  TerminalToolUse,
  TerminalInput,
  TerminalFooter,
  AgentSection,
  Colored,
  TerminalTabs,
  TerminalTab,
  Clawd
} from '../components/terminal';
import { ToolName, Command, Result } from '../components/claude-code-web/ToolUse';
import { Slide3 } from './Slide3';

export function Slide5() {
  return (
    <Slide3>
      <Note>
          Step 1: Subagent tabs (Terminal)<br/>
          Subagent is shown like usual in the main chat
      </Note>
      <ClaudeCodeTerminal>
        <TerminalTabs>
          <TerminalTab active>Main</TerminalTab>
          <TerminalTab>a493ccdb - Explore</TerminalTab>
        </TerminalTabs>

        <MainTerminalWindow>
          <TerminalUserMessage>
Explore the project and give a brief overview before the main task starts
          </TerminalUserMessage>

          <TerminalResponse>
I'll explore the project to give you a brief overview.
          </TerminalResponse>

          <Highlight>
            <TerminalToolUse>
              <ToolName>Explore</ToolName>
              <Command>Explore project structure and purpose</Command>
              <Result>
Done (21 tool uses · 46.1k tokens · 60s)
              </Result>
            </TerminalToolUse>
          </Highlight>

          <TerminalResponse>
{`The project is an AI-powered OpenRewrite Recipe Assistant. It uses Claude to automatically generate code refactoring recipes from Pull Request examples.

Main components: /rewrite-assist command, Expert Agent (Sonnet), Validator Agent, MCP Server (Python + PostgreSQL + pgvector), and validation scripts.`}
          </TerminalResponse>
        </MainTerminalWindow>

        <TerminalInput />
      </ClaudeCodeTerminal>
    </Slide3>
  );
}
