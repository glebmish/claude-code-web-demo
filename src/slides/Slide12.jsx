import { Slide, Note } from '../components/navigation';
import {
  ClaudeCodeTerminal,
  MainTerminalWindow,
  TerminalUserMessage,
  TerminalResponse,
  TerminalToolUse,
  TerminalInput,
  TerminalTabs,
  TerminalTab,
  Colored
} from '../components/terminal';
import { ToolName, Command, Result } from '../components/claude-code-web/ToolUse';

export function Slide12() {
  return (
    <Slide>
      <Note>
          Step 2: Direct subagent control (Terminal)<br/>
          Messages are relayed to the main chat, tool uses are not
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

          <TerminalToolUse>
            <ToolName>Explore</ToolName>
            <Command>Explore project structure and purpose</Command>
            <Result>
Done (21 tool uses · 46.1k tokens · 60s)
            </Result>
          </TerminalToolUse>

          <TerminalResponse>
{`The project is an AI-powered OpenRewrite Recipe Assistant. It uses Claude to automatically generate code refactoring recipes from Pull Request examples.

Main components: /rewrite-assist command, Expert Agent (Sonnet), Validator Agent, MCP Server (Python + PostgreSQL + pgvector), and validation scripts.`}
          </TerminalResponse>

          <TerminalUserMessage>
<Colored color="green">@a493ccdb</Colored> Take a look at the docs/ folder as well
          </TerminalUserMessage>

          <TerminalResponse from="a493ccdb" fromColor="green">
The architecture documentation provides deeper insights into the system design. The workflow is event-driven with clear separation between analysis, generation, and validation phases.
          </TerminalResponse>
        </MainTerminalWindow>

        <TerminalInput />
      </ClaudeCodeTerminal>
    </Slide>
  );
}
