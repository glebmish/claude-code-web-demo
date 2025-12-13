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
  TerminalTab,
  Colored
} from '../components/terminal';

export function Slide7() {
  return (
    <Slide>
      <Note>
          Step 2: Direct subagent control<br/>
          Subagent messages are relayed to the main chat, tools are not
      </Note>

      <WebView>
        <ClaudeCodeWeb>
          <RepositorySelector>glebmish/rewrite-claude-assisted</RepositorySelector>
          <EnvSelect>Default</EnvSelect>

          <Sessions>
            <Highlight>
              <Session selected>
                <Name>Working on rewrite-claude-assisted codebase</Name>
                <Footer>glebmish/rewrite-claude-assisted</Footer>
              </Session>
            </Highlight>
            <Subsession>
              <Name color="green">a493ccdb - <b>Explore</b></Name>
              <Footer>Repository structure analysis</Footer>
            </Subsession>
          </Sessions>

          <MainChat>
            <MainChatHeader>Working on rewrite-claude-assisted codebase</MainChatHeader>

            <Message from="user">
              Explore the project and give a brief overview before the main task starts
            </Message>
            <Response>
              I'll explore the project to give you a brief overview.
            </Response>

            <ToolUse>
              <ToolName>Explore</ToolName>
              <Command>Explore project structure and purpose</Command>
              <Result>
                Done (21 tool uses · 46.1k tokens · 60s)
              </Result>
            </ToolUse>

            <Response>
{`The project is an AI-powered OpenRewrite Recipe Assistant. It uses Claude to automatically generate code refactoring recipes from Pull Request examples.

Main components: /rewrite-assist command, Expert Agent (Sonnet), Validator Agent, MCP Server (Python + PostgreSQL + pgvector), and validation scripts.`}
            </Response>

            <Highlight>
              <Message from="user">
                <Colored color="green">@a493ccdb</Colored> Take a look at the docs/ folder as well
              </Message>
            </Highlight>

            <Highlight>
              <Message from="a493ccdb" fromColor="green">
The architecture documentation provides deeper insights into the system design. The workflow is event-driven with clear separation between analysis, generation, and validation phases.
              </Message>
            </Highlight>

            <MainChatTextField/>
          </MainChat>
        </ClaudeCodeWeb>
      </WebView>

      <TerminalView>
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
      </TerminalView>
    </Slide>
  );
}
