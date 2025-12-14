import { Slide, Note, Highlight, WebView, TerminalView } from '../components/navigation';
import { ClaudeCodeWeb } from '../components/claude-code-web/ClaudeCodeWeb';
import { RepositorySelector } from '../components/claude-code-web/RepositorySelector';
import { EnvSelect } from '../components/claude-code-web/EnvSelect';
import { Sessions } from '../components/claude-code-web/Sessions';
import { Session, Name, Footer, Subsession } from '../components/claude-code-web/Session';
import { MainChat } from '../components/claude-code-web/MainChat';
import { MainChatHeader } from '../components/claude-code-web/MainChatHeader';
import { Message, Response } from '../components/claude-code-web/Message';
import { ToolUse, ToolName, Command, Result } from '../components/claude-code-web/ToolUse';
import { MainChatTextField } from '../components/claude-code-web/MainChatTextField';
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

export function Slide5() {
  return (
    <Slide>
      <Note>
          Step 2. Direct subagent control<br/>
          Subagent responds back
      </Note>

      <WebView>
        <ClaudeCodeWeb>
          <RepositorySelector>glebmish/rewrite-claude-assisted</RepositorySelector>
          <EnvSelect>Default</EnvSelect>

          <Sessions>
            <Session>
              <Name>Working on rewrite-claude-assisted codebase</Name>
              <Footer>glebmish/rewrite-claude-assisted</Footer>
            </Session>
            <Subsession selected>
              <Name color="green">a493ccdb - <b>Explore</b></Name>
              <Footer>Analyzing repository structure</Footer>
            </Subsession>
          </Sessions>

          <MainChat>
            <MainChatHeader>Analyzing repository structure</MainChatHeader>

            <Message from="main agent">
{`Explore this project to understand:
Provide a comprehensive overview of what this project does and how it's organized.`}
            </Message>

            <Response>
I'll explore this project to understand its purpose, structure, and technologies. Let me start by examining the key files and directories.
            </Response>

            <ToolUse>
              <ToolName>Bash</ToolName>
              <Command>find /home/glebmish/projects/rewrite-claude-assisted -maxdepth 2 -type f -name "README*" -o -name "*.md" | head -20</Command>
              <Result>
{`/home/glebmish/projects/rewrite-claude-assisted/CLAUDE.md
/home/glebmish/projects/rewrite-claude-assisted/README.md
/home/glebmish/projects/rewrite-claude-assisted/LICENSE.md`}
              </Result>
            </ToolUse>

            <Response>
Now let me read the main README and key documentation files:
            </Response>

            <ToolUse>
              <ToolName>Read</ToolName>
              <Command>/home/glebmish/projects/rewrite-claude-assisted/README.md</Command>
              <Result>
(Reading file...)
              </Result>
            </ToolUse>

            <Response>
{`Based on my exploration:

This is an AI-powered OpenRewrite Recipe Assistant that generates code refactoring recipes from Pull Requests.

Key components: /rewrite-assist command, Expert Agent (Sonnet), Validator Agent, MCP Server (PostgreSQL + pgvector), validation scripts.

Workflow: PR analysis → recipe generation → validation → refinement.`}
            </Response>

            <Highlight>
              <Message from="user">
                Take a look at the docs/ folder as well
              </Message>
            </Highlight>

            <ToolUse>
              <ToolName>Bash</ToolName>
              <Command>find /home/glebmish/projects/rewrite-claude-assisted/docs -maxdepth 2 -type f -o -name "*.md" | head -20</Command>
              <Result>
{`/home/glebmish/projects/rewrite-claude-assisted/docs/ARCHITECTURE.md`}
              </Result>
            </ToolUse>

            <ToolUse>
              <ToolName>Read</ToolName>
              <Command>/home/glebmish/projects/rewrite-claude-assisted/docs/ARCHITECTURE.md</Command>
              <Result>
(Reading file...)
              </Result>
            </ToolUse>

            <Highlight>
              <Response>
The architecture documentation provides deeper insights into the system design. The workflow is event-driven with clear separation between analysis, generation, and validation phases.
              </Response>
            </Highlight>

            <MainChatTextField/>
          </MainChat>
        </ClaudeCodeWeb>
      </WebView>

      <TerminalView>
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

            <TerminalResponse color="green">
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

            <TerminalResponse color="green">
Now let me read the main README and key documentation files:
            </TerminalResponse>

            <TerminalToolUse>
              <ToolName>Read</ToolName>
              <Command>/home/glebmish/projects/rewrite-claude-assisted/README.md</Command>
              <Result>
(Reading file...)
              </Result>
            </TerminalToolUse>

            <TerminalResponse color="green">
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

            <TerminalResponse color="green">
The architecture documentation provides deeper insights into the system design. The workflow is event-driven with clear separation between analysis, generation, and validation phases.
            </TerminalResponse>
          </MainTerminalWindow>

          <TerminalInput />
        </ClaudeCodeTerminal>
      </TerminalView>
    </Slide>
  );
}
