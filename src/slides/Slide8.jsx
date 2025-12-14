import { Slide, Note, Highlight, WebView, TerminalView } from '../components/navigation';
import { ClaudeCodeWeb } from '../components/claude-code-web/ClaudeCodeWeb';
import { RepositorySelector } from '../components/claude-code-web/RepositorySelector';
import { EnvSelect } from '../components/claude-code-web/EnvSelect';
import { Sessions } from '../components/claude-code-web/Sessions';
import { Session, Name, Footer, Subsession, AutocompletePopup, AutocompleteHeader, AutocompleteItem, AutocompleteItemNew } from '../components/claude-code-web/Session';
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
  Colored,
  ColoredTerminal,
  TerminalFooter,
  AgentSection,
  AgentSectionNew
} from '../components/terminal';

export function Slide8() {
  return (
    <Slide>
      <Note>
          Step 3: Team of agents in the main chat<br/>
          Subagents can be @-mentioned following the messenger metaphor
      </Note>

      <WebView>
        <ClaudeCodeWeb>
          <RepositorySelector>glebmish/rewrite-claude-assisted</RepositorySelector>
          <EnvSelect>Default</EnvSelect>

          <Sessions>
            <Session selected>
              <Name>Working on rewrite-claude-assisted codebase</Name>
              <Footer>glebmish/rewrite-claude-assisted</Footer>
            </Session>
            <Subsession>
              <Name color="green">a493ccdb - <b>Explore</b></Name>
              <Footer><i className="text-gray-500">Repository structure analysis</i></Footer>
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

            <Response>
                <Colored color="green">@a493ccdb (<b>new Explore</b>)</Colored> Explore project structure and purpose
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
              <Colored color="green">@a493ccdb</Colored> Take a look at the docs/ folder as well
            </Message>

            <Message from="a493ccdb" fromColor="green">
                The architecture documentation provides deeper insights into the system design. The workflow is event-driven with clear separation between analysis, generation, and validation phases.
            </Message>

            <Highlight>
                <MainChatTextField>
                    @
                    <AutocompletePopup>
                      <AutocompleteHeader arrow={false}>Select Agent</AutocompleteHeader>
                      <AutocompleteItem color="green" selected>@a493ccdb - <b>Explore</b> <i className="text-gray-500">Repository structure analysis</i></AutocompleteItem>
                      <AutocompleteItemNew />
                    </AutocompletePopup>
                </MainChatTextField>
            </Highlight>
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

            <TerminalResponse>
                <ColoredTerminal color="green">@a493ccdb (<b>new Explore</b>)</ColoredTerminal> Explore project structure and purpose
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
                <ColoredTerminal color="green">@a493ccdb</ColoredTerminal> Take a look at the docs/ folder as well
            </TerminalUserMessage>

            <TerminalResponse from="a493ccdb" fromColor="green">
The architecture documentation provides deeper insights into the system design. The workflow is event-driven with clear separation between analysis, generation, and validation phases.
            </TerminalResponse>
          </MainTerminalWindow>

          <TerminalInput>
              @
          </TerminalInput>

          <TerminalFooter>
            <AgentSection color="green" selected>
              @a493ccdb - Explore <i className="text-gray-500">Repository structure analysis</i>
            </AgentSection>
            <AgentSectionNew />
          </TerminalFooter>
        </ClaudeCodeTerminal>
      </TerminalView>
    </Slide>
  );
}
