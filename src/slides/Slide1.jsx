import {
  Slide,
  Note,
  Highlight,
  WebView,
  TerminalView,
  ClaudeCodeWeb,
  RepositorySelector,
  EnvSelect,
  Sessions,
  Session,
  Name,
  Footer,
  MainChat,
  MainChatHeader,
  Message,
  Response,
  ToolUse,
  ToolName,
  Command,
  Result,
  MainChatTextField,
  ClaudeCodeTerminal,
  MainTerminalWindow,
  TerminalUserMessage,
  TerminalResponse,
  TerminalToolUse,
  TerminalInput,
  Clawd,
} from "../components";

export function Slide1() {
  return (
    <Slide>
      <Note>
        Core experience remains unchanged. User starts a session...
        <br />
        ...and main agent intelligently spawns subagent and assigns a task.
        <br />
      </Note>

      <WebView>
        <ClaudeCodeWeb>
          <RepositorySelector>
            glebmish/rewrite-claude-assisted
          </RepositorySelector>
          <EnvSelect>Default</EnvSelect>

          <Sessions>
            <Highlight>
              <Session selected>
                <Name>Working on rewrite-claude-assisted codebase</Name>
                <Footer>glebmish/rewrite-claude-assisted</Footer>
              </Session>
            </Highlight>
          </Sessions>

          <MainChat>
            <MainChatHeader>
              Working on rewrite-claude-assisted codebase
            </MainChatHeader>

            <Message from="user">
              Explore the project and give a brief overview before the main task
              starts
            </Message>
            <Response>
              I'll explore the project to give you a brief overview.
            </Response>

            <Highlight>
              <ToolUse>
                <ToolName>Explore</ToolName>
                <Command>Explore project structure and purpose</Command>
                <Result>Done (21 tool uses · 46.1k tokens · 60s)</Result>
              </ToolUse>
            </Highlight>
            <Response>
              {`The project is an AI-powered OpenRewrite Recipe Assistant. It uses Claude to automatically generate code refactoring recipes from Pull Request examples.

Main components: /rewrite-assist command, Expert Agent (Sonnet), Validator Agent, MCP Server (Python + PostgreSQL + pgvector), and validation scripts.`}
            </Response>

            <MainChatTextField />
          </MainChat>
        </ClaudeCodeWeb>
      </WebView>

      <TerminalView>
        <ClaudeCodeTerminal>
          <Clawd />

          <MainTerminalWindow>
            <TerminalUserMessage>
              Explore the project and give a brief overview before the main task
              starts
            </TerminalUserMessage>

            <TerminalResponse>
              I'll explore the project to give you a brief overview.
            </TerminalResponse>

            <TerminalToolUse>
              <ToolName>Explore</ToolName>
              <Command>Explore project structure and purpose</Command>
              <Result>Done (21 tool uses · 46.1k tokens · 60s)</Result>
            </TerminalToolUse>

            <TerminalResponse>
              {`The project is an AI-powered OpenRewrite Recipe Assistant. It uses Claude to automatically generate code refactoring recipes from Pull Request examples.

Main components: /rewrite-assist command, Expert Agent (Sonnet), Validator Agent, MCP Server (Python + PostgreSQL + pgvector), and validation scripts.`}
            </TerminalResponse>
          </MainTerminalWindow>

          <TerminalInput />
        </ClaudeCodeTerminal>
      </TerminalView>
    </Slide>
  );
}
