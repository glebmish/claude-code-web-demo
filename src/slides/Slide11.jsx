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
  MainChatTextField,
  ClaudeCodeTerminal,
  MainTerminalWindow,
  TerminalUserMessage,
  TerminalResponse,
  TerminalInput,
  TerminalTabs,
  TerminalTab,
  Colored,
  ColoredTerminal,
} from "../components";

export function Slide11() {
  return (
    <Slide>
      <Note>
        Step 3. Team of agents in the main chat
        <br />
        Main agent receives new messages and reacts only when addressed
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
            <Subsession>
              <Name color="purple">
                7b2f9a1e - <b>Architect</b>
              </Name>
              <Footer>Suggesting architecture improvements</Footer>
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

            <Message from="user">
              <Colored color="green">@a493ccdb</Colored> Take a look at the
              docs/ folder as well
            </Message>

            <Message from="a493ccdb" fromColor="green">
              The architecture documentation provides deeper insights into the
              system design. The workflow is event-driven with clear separation
              between analysis, generation, and validation phases.
            </Message>

            <Message from="user">
              <Colored color="purple">
                @7b2f9a1e (<b>new Architect</b>)
              </Colored>{" "}
              Review the architecture and suggest improvements. Please be brief.
            </Message>

            <Message from="7b2f9a1e" fromColor="purple">
              I'll analyze the architecture and provide concise recommendations.
            </Message>

            <Message from="7b2f9a1e" fromColor="purple">
              {`Key improvements:
1. Decouple recipe generation from validation - add async queue
2. Cache vector embeddings to reduce PostgreSQL load
3. Add circuit breaker for external API calls

These would improve scalability and reliability.`}
            </Message>

            <Highlight>
              <Message from="user">
                Would implementing the async queue affect the current PR
                analysis workflow?
              </Message>

              <Response>
                {`Based on @7b2f9a1e's recommendations, implementing an async queue would actually enhance the workflow. The PR analysis phase would remain synchronous for immediate feedback, but recipe generation and validation could run in parallel, reducing overall processing time while maintaining the event-driven architecture.`}
              </Response>
            </Highlight>

            <MainChatTextField />
          </MainChat>
        </ClaudeCodeWeb>
      </WebView>

      <TerminalView>
        <ClaudeCodeTerminal>
          <TerminalTabs>
            <TerminalTab active>Main</TerminalTab>
            <TerminalTab>a493ccdb - Explore</TerminalTab>
            <TerminalTab>7b2f9a1e - Architect</TerminalTab>
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

            <TerminalUserMessage>
              <ColoredTerminal color="green">@a493ccdb</ColoredTerminal> Take a
              look at the docs/ folder as well
            </TerminalUserMessage>

            <TerminalResponse from="a493ccdb" fromColor="green">
              The architecture documentation provides deeper insights into the
              system design. The workflow is event-driven with clear separation
              between analysis, generation, and validation phases.
            </TerminalResponse>

            <TerminalUserMessage>
              <ColoredTerminal color="purple">
                @7b2f9a1e (<b>new Architect</b>)
              </ColoredTerminal>{" "}
              Review the architecture and suggest improvements. Please be brief.
            </TerminalUserMessage>

            <TerminalResponse from="7b2f9a1e" fromColor="purple">
              I'll analyze the architecture and provide concise recommendations.
            </TerminalResponse>

            <TerminalResponse from="7b2f9a1e" fromColor="purple">
              {`Key improvements:
1. Decouple recipe generation from validation - add async queue
2. Cache vector embeddings to reduce PostgreSQL load
3. Add circuit breaker for external API calls

These would improve scalability and reliability.`}
            </TerminalResponse>

            <TerminalUserMessage>
              Would implementing the async queue affect the current PR analysis
              workflow?
            </TerminalUserMessage>

            <TerminalResponse>
              {`Based on @7b2f9a1e's recommendations, implementing an async queue would actually enhance the workflow. The PR analysis phase would remain synchronous for immediate feedback, but recipe generation and validation could run in parallel, reducing overall processing time while maintaining the event-driven architecture.`}
            </TerminalResponse>
          </MainTerminalWindow>

          <TerminalInput />
        </ClaudeCodeTerminal>
      </TerminalView>
    </Slide>
  );
}
