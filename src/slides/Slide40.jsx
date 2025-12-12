import { Slide, Note } from '../components/navigation';
import { ClaudeCodeWeb } from '../components/claude-code-web/ClaudeCodeWeb';
import { Sessions } from '../components/claude-code-web/Sessions';
import { Session, Name, Footer } from '../components/claude-code-web/Session';
import { MainChat } from '../components/claude-code-web/MainChat';
import { MainChatHeader } from '../components/claude-code-web/MainChatHeader';
import { Message } from '../components/claude-code-web/Message';
import { MainChatTextField } from '../components/claude-code-web/MainChatTextField';
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
  TerminalTab
} from '../components/terminal';
import { ToolName, Command, Result } from '../components/claude-code-web/ToolUse';

export function Slide4() {
  return (
    <Slide>
      <Note>This slide shows how to create a new task</Note>
      <ClaudeCodeWeb>
        <Sessions>
          <Session selected>
            <Name>Setting up project environment</Name>
            <Footer>glebmish/claude-code-manager-demo</Footer>
          </Session>
          <Session>
            <Name>Analyze test runs with session evaluator</Name>
            <Footer>glebmish/rewrite-claude-assisted</Footer>
          </Session>
          <Session>
            <Name>Analyze workflow fix commits and cleanup</Name>
            <Footer>glebmish/rewrite-claude-assisted</Footer>
          </Session>
        </Sessions>

        <MainChat>
          <MainChatHeader>Setting up project environment</MainChatHeader>

          <Message from="user">
Can you help me set up the development environment and install dependencies?
          </Message>

          <MainChatTextField />
        </MainChat>
      </ClaudeCodeWeb>

      <ClaudeCodeTerminal>
        <TerminalTabs>
          <TerminalTab>package.json</TerminalTab>
          <TerminalTab active>Terminal</TerminalTab>
          <TerminalTab>README.md</TerminalTab>
        </TerminalTabs>

        <MainTerminalWindow>
          <TerminalUserMessage>
Can you help me set up the development environment and install dependencies?
          </TerminalUserMessage>

          <TerminalResponse>
I'll help you set up the development environment. Let me start by installing <Colored color="#4EC9B0">dependencies</Colored>.
          </TerminalResponse>

          <TerminalToolUse>
            <ToolName>Bash</ToolName>
            <Command>npm install</Command>
            <Result>added 234 packages in 5.2s</Result>
          </TerminalToolUse>

          <TerminalResponse>
<Colored color="#4EC9B0">Dependencies</Colored> installed successfully. Now let me start the development server.
          </TerminalResponse>

          <TerminalToolUse>
            <ToolName>Bash</ToolName>
            <Command>npm run dev</Command>
            <Result>{`Server running on http://localhost:3000
Ready in 1.2s`}</Result>
          </TerminalToolUse>
        </MainTerminalWindow>

        <TerminalInput>

        </TerminalInput>

        <TerminalFooter>
          <AgentSection color="#4EC9B0">
            ✓ [mcp] openrewrite-mcp     enabled (★ to toggle)
          </AgentSection>
          <AgentSection color="#858585">
            .claude/
          </AgentSection>
          <AgentSection color="#858585">
            .git/
          </AgentSection>
        </TerminalFooter>
      </ClaudeCodeTerminal>
    </Slide>
  );
}
