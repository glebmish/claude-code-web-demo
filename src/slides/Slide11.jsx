import { Slide, Note } from '../components/navigation';
import {
  ClaudeCodeTerminal,
  MainTerminalWindow,
  TerminalUserMessage,
  TerminalResponse,
  TerminalToolUse,
  TerminalInput,
  TerminalTabs,
  TerminalTab
} from '../components/terminal';
import { ToolName, Command, Result } from '../components/claude-code-web/ToolUse';

export function Slide11() {
  return (
    <Slide>
      <Note>
          Step 2: Direct subagent control (Terminal)<br/>
          Talk to subagents directly
      </Note>
      <ClaudeCodeTerminal>
        <TerminalTabs>
          <TerminalTab>Main</TerminalTab>
          <TerminalTab active>a493ccdb - Explore</TerminalTab>
        </TerminalTabs>

        <MainTerminalWindow>
          <TerminalUserMessage>
{`Explore this project to understand:
Provide a comprehensive overview of what this project does and how it's organized.`}
          </TerminalUserMessage>

          <TerminalResponse>
I'll explore this project to understand its purpose, structure, and technologies. Let me start by examining the key files and directories.
          </TerminalResponse>

          <TerminalToolUse>
            <ToolName>Bash</ToolName>
            <Command>find /home/glebmish/projects/rewrite-claude-assisted -maxdepth 2 -type f -name "README*" -o -name "*.md" | head -20</Command>
            <Result>
{`/home/glebmish/projects/rewrite-claude-assisted/CLAUDE.md
/home/glebmish/projects/rewrite-claude-assisted/README.md
/home/glebmish/projects/rewrite-claude-assisted/LICENSE.md`}
            </Result>
          </TerminalToolUse>

          <TerminalResponse>
Now let me read the main README and key documentation files:
          </TerminalResponse>

          <TerminalToolUse>
            <ToolName>Read</ToolName>
            <Command>/home/glebmish/projects/rewrite-claude-assisted/README.md</Command>
            <Result>
(Reading file...)
            </Result>
          </TerminalToolUse>

          <TerminalResponse>
{`Based on my exploration:

This is an AI-powered OpenRewrite Recipe Assistant that generates code refactoring recipes from Pull Requests.

Key components: /rewrite-assist command, Expert Agent (Sonnet), Validator Agent, MCP Server (PostgreSQL + pgvector), validation scripts.

Workflow: PR analysis → recipe generation → validation → refinement.`}
          </TerminalResponse>

          <TerminalUserMessage>
Take a look at the docs/ folder as well
          </TerminalUserMessage>

          <TerminalToolUse>
            <ToolName>Bash</ToolName>
            <Command>find /home/glebmish/projects/rewrite-claude-assisted/docs -maxdepth 2 -type f -o -name "*.md" | head -20</Command>
            <Result>
{`/home/glebmish/projects/rewrite-claude-assisted/docs/ARCHITECTURE.md`}
            </Result>
          </TerminalToolUse>

          <TerminalToolUse>
            <ToolName>Read</ToolName>
            <Command>/home/glebmish/projects/rewrite-claude-assisted/docs/ARCHITECTURE.md</Command>
            <Result>
(Reading file...)
            </Result>
          </TerminalToolUse>

          <TerminalResponse>
The architecture documentation provides deeper insights into the system design. The workflow is event-driven with clear separation between analysis, generation, and validation phases.
          </TerminalResponse>
        </MainTerminalWindow>

        <TerminalInput />
      </ClaudeCodeTerminal>
    </Slide>
  );
}
