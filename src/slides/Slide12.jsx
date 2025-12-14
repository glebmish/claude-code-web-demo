import {
  Slide,
  Note,
  FullscreenText,
  WebView,
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
  Colored,
} from "../components";

export function Slide12() {
  return (
    <Slide>
      <Note>
        Step 4...
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

            <Message from="user">
              Would implementing the async queue affect the current PR analysis
              workflow?
            </Message>

            <Response>
              {`Based on @7b2f9a1e's recommendations, implementing an async queue would actually enhance the workflow. The PR analysis phase would remain synchronous for immediate feedback, but recipe generation and validation could run in parallel, reducing overall processing time while maintaining the event-driven architecture.`}
            </Response>

            <MainChatTextField />
          </MainChat>
        </ClaudeCodeWeb>
      </WebView>

      <FullscreenText align="left" strongBlur>
        Shameless plug on the next slide. <b>You've been warned!</b>
      </FullscreenText>
    </Slide>
  );
}
