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

export function Slide7() {
  return (
    <Slide>
      <Note>
          Step 2: Direct subagent control (Web)<br/>
          Talk to subagents directly
      </Note>
      <ClaudeCodeWeb>
        <RepositorySelector>glebmish/rewrite-claude-assisted</RepositorySelector>
        <EnvSelect>Default</EnvSelect>

        <Sessions>
          <Session>
            <Name>Working on rewrite-claude-assisted codebase</Name>
            <Footer>glebmish/rewrite-claude-assisted</Footer>
          </Session>
          <Highlight>
            <Subsession selected color="green">a493ccdb - <b>Explore</b></Subsession>
          </Highlight>
        </Sessions>

        <MainChat>
          <MainChatHeader>Exploring rewrite-claude-assisted codebase</MainChatHeader>

          <Message from="main agent">
{`Explore this project to understand:
Provide a comprehensive overview of what this project does and how it's organized.`}
          </Message>

          <Response>
I'll explore this project to understand its purpose, structure, and technologies. Let me start by examining the key files and directories.
          </Response>

          <ToolUse>
            <ToolName>Bash</ToolName>
            <Command>find /home/glebmish/projects/rewrite-claude-assisted -maxdepth 2 -type f -name "README*" -o -name "*.md" | head -20</Command>
            <Result>
{`/home/glebmish/projects/rewrite-claude-assisted/CLAUDE.md
/home/glebmish/projects/rewrite-claude-assisted/README.md
/home/glebmish/projects/rewrite-claude-assisted/LICENSE.md`}
            </Result>
          </ToolUse>

          <Response>
Now let me read the main README and key documentation files:
          </Response>

          <ToolUse>
            <ToolName>Read</ToolName>
            <Command>/home/glebmish/projects/rewrite-claude-assisted/README.md</Command>
            <Result>
(Reading file...)
            </Result>
          </ToolUse>

          <Response>
{`Based on my exploration:

This is an AI-powered OpenRewrite Recipe Assistant that generates code refactoring recipes from Pull Requests.

Key components: /rewrite-assist command, Expert Agent (Sonnet), Validator Agent, MCP Server (PostgreSQL + pgvector), validation scripts.

Workflow: PR analysis → recipe generation → validation → refinement.`}
          </Response>

          <Highlight>
            <MainChatTextField>Take a look at the docs/ folder as well</MainChatTextField>
          </Highlight>
        </MainChat>
      </ClaudeCodeWeb>
    </Slide>
  );
}
