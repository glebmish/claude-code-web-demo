import { Slide, Note, Highlight, WebView, TerminalView } from '../components/navigation';
import { ClaudeCodeWeb } from '../components/claude-code-web/ClaudeCodeWeb';
import { RepositorySelector } from '../components/claude-code-web/RepositorySelector';
import { EnvSelect } from '../components/claude-code-web/EnvSelect';
import { NewSessionInput } from '../components/claude-code-web/NewSessionInput';
import { Sessions } from '../components/claude-code-web/Sessions';
import { Session, Name, Footer } from '../components/claude-code-web/Session';
import { MainChat } from '../components/claude-code-web/MainChat';
import { MainChatHeader } from '../components/claude-code-web/MainChatHeader';
import { Message } from '../components/claude-code-web/Message';
import { MainChatTextField } from '../components/claude-code-web/MainChatTextField';
import {
  ClaudeCodeTerminal,
  MainTerminalWindow,
  TerminalInput,
  Clawd
} from '../components/terminal';

export function Slide1() {
  return (
    <Slide>
      <Note>
          Step 1: Subagent tabs<br/>
          Start the session as usual
      </Note>

      <WebView>
        <ClaudeCodeWeb>
          <NewSessionInput>Explore the project and give a brief overview before the main task starts</NewSessionInput>

          <RepositorySelector>glebmish/rewrite-claude-assisted</RepositorySelector>
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
            <MainChatHeader>Working on rewrite-claude-assisted codebase</MainChatHeader>

            <Message from="user">
              Explore the project and give a brief overview before the main task starts
            </Message>

            <MainChatTextField/>
          </MainChat>
        </ClaudeCodeWeb>
      </WebView>

      <TerminalView>
        <ClaudeCodeTerminal>
          <Clawd />

          <MainTerminalWindow>
          </MainTerminalWindow>

          <TerminalInput>
Explore the project and give a brief overview before the main task starts
          </TerminalInput>
        </ClaudeCodeTerminal>
      </TerminalView>
    </Slide>
  );
}
