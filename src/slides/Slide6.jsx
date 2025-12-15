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
  Subsession,
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
  TerminalTabs,
  TerminalTab,
  Colored,
  ColoredTerminal,
} from "../components";

export function Slide6() {
  return (
    <Slide>
      <Note>
        Step 2. Direct subagent control
        <br />
        Subagent messages are relayed to the main chat, tools are not
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
            <Subsession>
              <Name color="green">
                a493ccdb - <b>Explore</b>
              </Name>
              <Footer>Analyzing repository structure</Footer>
            </Subsession>
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

            <Highlight>
              <Message from="user">
                <Colored color="green">@a493ccdb</Colored> Take a look at the
                docs/ folder as well
              </Message>

              <Message from="a493ccdb" fromColor="green">
                The architecture documentation provides deeper insights into the
                system design. The workflow is event-driven with clear
                separation between analysis, generation, and validation phases.
              </Message>
            </Highlight>

            <MainChatTextField />
          </MainChat>
        </ClaudeCodeWeb>
      </WebView>

      <TerminalView>
        <ClaudeCodeTerminal>
          <TerminalTabs>
            <TerminalTab selected>Main</TerminalTab>
            <TerminalTab>a493ccdb - Explore</TerminalTab>
          </TerminalTabs>

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

            <TerminalUserMessage>
              <ColoredTerminal color="green">@a493ccdb</ColoredTerminal> Take a
              look at the docs/ folder as well
            </TerminalUserMessage>

            <TerminalResponse from="a493ccdb" fromColor="green">
              The architecture documentation provides deeper insights into the
              system design. The workflow is event-driven with clear separation
              between analysis, generation, and validation phases.
            </TerminalResponse>
          </MainTerminalWindow>

          <TerminalInput />
        </ClaudeCodeTerminal>
      </TerminalView>
    </Slide>
  );
}
