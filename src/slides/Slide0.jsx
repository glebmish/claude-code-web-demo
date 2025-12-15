import {
  Slide,
  FullscreenText,
  Insight,
  WebView,
  Note,
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
} from "../components";

export function Slide0() {
  return (
    <Slide>
      <Note>
        <br />
        <br />
      </Note>

      <WebView>
        <ClaudeCodeWeb>
          <RepositorySelector>
            glebmish/rewrite-claude-assisted
          </RepositorySelector>
          <EnvSelect>Default</EnvSelect>

          <Sessions>
            <Session selected>
              <Name>Working on rewrite-claude-assisted codebase</Name>
              <Footer>glebmish/rewrite-claude-assisted</Footer>
            </Session>
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

            <ToolUse>
              <ToolName>Explore</ToolName>
              <Command>Explore project structure and purpose</Command>
              <Result>Done (21 tool uses · 46.1k tokens · 60s)</Result>
            </ToolUse>
            <Response>
              {`The project is an AI-powered OpenRewrite Recipe Assistant. It uses Claude to automatically generate code refactoring recipes from Pull Request examples.

Main components: /rewrite-assist command, Expert Agent (Sonnet), Validator Agent, MCP Server (Python + PostgreSQL + pgvector), and validation scripts.`}
            </Response>

            <MainChatTextField />
          </MainChat>
        </ClaudeCodeWeb>
      </WebView>

      <FullscreenText showInsights align="left" strongBlur>
        Claude Code for a team of agents
        <Insight>
          Claude Code already stores subagent state and can follow-up
          with existing subagents.
        </Insight>
        <Insight>
          Users are becoming well aware of the importance of context
          management and the role of subagents in it.
        </Insight>
        <Insight>
          Claude Code now is a single agent that uses subagents as tools.
          There's limited visibility into subagents.
        </Insight>
      </FullscreenText>
    </Slide>
  );
}
