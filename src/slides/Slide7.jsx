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
  AutocompletePopup,
  AutocompleteHeader,
  AutocompleteItem,
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

export function Slide7() {
  return (
    <Slide>
      <Note>
        Step 3. Team of agents in the main chat
        <br />
        Main chat shows collaboration with a team of agents
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
            <Subsession>
              <Name color="green">
                a493ccdb - <b>Explore</b>
              </Name>
              <Footer>Analyzing repository structure</Footer>
            </Subsession>
          </Sessions>

          <Highlight>
            <MainChat scroll="0%">
              <MainChatHeader>
                Working on rewrite-claude-assisted codebase
              </MainChatHeader>

              <Message from="user">
                Explore the project and give a brief overview before the main
                task starts
              </Message>
              <Response>
                I'll explore the project to give you a brief overview.
              </Response>

              <Response>
                <Colored color="green">
                  @a493ccdb (<b>new Explore</b>)
                </Colored>{" "}
                Explore project structure and purpose
              </Response>

              <Message from="a493ccdb" fromColor="green">
                {`Based on my exploration:

This is an AI-powered OpenRewrite Recipe Assistant that generates code refactoring recipes from Pull Requests.

Key components: /rewrite-assist command, Expert Agent (Sonnet), Validator Agent, MCP Server (PostgreSQL + pgvector), validation scripts.

Workflow: PR analysis → recipe generation → validation → refinement.`}
              </Message>

              <Response>
                {`The project is an AI-powered OpenRewrite Recipe Assistant. It uses Claude to automatically generate code refactoring recipes from Pull Request examples.

Main components: /rewrite-assist command, Expert Agent (Sonnet), Validator Agent, MCP Server (Python + PostgreSQL + pgvector), and validation scripts.`}
              </Response>

              <MainChatTextField>
                <Colored color="green">@a493ccdb</Colored> Take a look at the
                docs/ folder as well
              </MainChatTextField>
            </MainChat>
          </Highlight>
        </ClaudeCodeWeb>
      </WebView>

      <TerminalView>
        <ClaudeCodeTerminal scroll="0%">
          <TerminalTabs>
            <TerminalTab active>Main</TerminalTab>
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

            <TerminalResponse>
              <ColoredTerminal color="green">
                @a493ccdb (<b>new Explore</b>)
              </ColoredTerminal>{" "}
              Explore project structure and purpose
            </TerminalResponse>

            <TerminalResponse from="a493ccdb" fromColor="green">
              {`Based on my exploration:

This is an AI-powered OpenRewrite Recipe Assistant that generates code refactoring recipes from Pull Requests.

Key components: /rewrite-assist command, Expert Agent (Sonnet), Validator Agent, MCP Server (PostgreSQL + pgvector), validation scripts.

Workflow: PR analysis → recipe generation → validation → refinement.`}
            </TerminalResponse>

            <TerminalResponse>
              {`The project is an AI-powered OpenRewrite Recipe Assistant. It uses Claude to automatically generate code refactoring recipes from Pull Request examples.

Main components: /rewrite-assist command, Expert Agent (Sonnet), Validator Agent, MCP Server (Python + PostgreSQL + pgvector), and validation scripts.`}
            </TerminalResponse>
          </MainTerminalWindow>

          <TerminalInput>
            <ColoredTerminal color="green">@a493ccdb</ColoredTerminal> Take a
            look at the docs/ folder as well
          </TerminalInput>
        </ClaudeCodeTerminal>
      </TerminalView>
    </Slide>
  );
}
