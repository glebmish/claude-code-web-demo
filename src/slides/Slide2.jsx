import { Slide, Note, Highlight } from '../components/navigation';
import { ClaudeCodeWeb } from '../components/claude-code-web/ClaudeCodeWeb';
import { RepositorySelector } from '../components/claude-code-web/RepositorySelector';
import { EnvSelect } from '../components/claude-code-web/EnvSelect';
import { NewSessionInput } from '../components/claude-code-web/NewSessionInput';
import { Sessions } from '../components/claude-code-web/Sessions';
import { Session, Name, Footer, Subsession, AutocompletePopup, AutocompleteHeader, AutocompleteItem } from '../components/claude-code-web/Session';
import { MainChat } from '../components/claude-code-web/MainChat';
import { MainChatHeader } from '../components/claude-code-web/MainChatHeader';
import { Message, Response } from '../components/claude-code-web/Message';
import { ToolUse, ToolName, Command, Result } from '../components/claude-code-web/ToolUse';
import { MainChatTextField } from '../components/claude-code-web/MainChatTextField';

export function Slide2() {
  return (
    <Slide>
      <Note>
          Step 1: Subagent tabs (Web)<br/>
          Subagent is shown like usual in the main chat
      </Note>
      <ClaudeCodeWeb>
        <RepositorySelector>glebmish/rewrite-claude-assisted</RepositorySelector>
        <EnvSelect>Default</EnvSelect>

        <Sessions>
          <Session selected>
            <Name>Working on rewrite-claude-assisted codebase</Name>
            <Footer>glebmish/rewrite-claude-assisted</Footer>
          </Session>
          <Subsession color="green">a493ccdb - <b>Explore</b></Subsession>
        </Sessions>

        <MainChat>
          <MainChatHeader>Working on rewrite-claude-assisted codebase</MainChatHeader>

          <Message from="user">
              Explore the project and give a brief overview before the main task starts
          </Message>
          <Response>
              I'll explore the project to give you a brief overview.
          </Response>

          <Highlight>
              <ToolUse>
                  <ToolName>Explore</ToolName>
                  <Command>Explore project structure and purpose</Command>
                  <Result>
                      Done (21 tool uses · 46.1k tokens · 60s)
                  </Result>
              </ToolUse>
          </Highlight>
          <Response>
{`The project is an AI-powered OpenRewrite Recipe Assistant. It uses Claude to automatically generate code refactoring recipes from Pull Request examples.

Main components: /rewrite-assist command, Expert Agent (Sonnet), Validator Agent, MCP Server (Python + PostgreSQL + pgvector), and validation scripts.`}
          </Response>

          <MainChatTextField/>
        </MainChat>
      </ClaudeCodeWeb>
    </Slide>
  );
}
