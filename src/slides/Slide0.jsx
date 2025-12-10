import { Slide, Note, FullscreenText } from '../components/navigation';
import { ClaudeCodeWeb } from '../components/claude-code-web/ClaudeCodeWeb';
import { Sessions } from '../components/claude-code-web/Sessions';
import { Session, Name, Footer } from '../components/claude-code-web/Session';
import { MainChat } from '../components/claude-code-web/MainChat';
import { MainChatHeader } from '../components/claude-code-web/MainChatHeader';
import { MainChatTextField } from '../components/claude-code-web/MainChatTextField';

export function Slide0() {
  return (
    <Slide>
      <Note>Welcome to the Claude Code demonstration</Note>

      {/* Background: Real Claude Code interface (will be blurred) */}
      <ClaudeCodeWeb>
        <Sessions>
          <Session selected>
            <Name>Welcome to Claude Code</Name>
            <Footer>demo/presentation</Footer>
          </Session>
          <Session>
            <Name>Getting Started</Name>
            <Footer>demo/presentation</Footer>
          </Session>
        </Sessions>

        <MainChat>
          <MainChatHeader>Welcome to Claude Code</MainChatHeader>
          <MainChatTextField />
        </MainChat>
      </ClaudeCodeWeb>

      {/* Foreground: Large centered text */}
      <FullscreenText>
        {`Claude Code
Your AI pair programmer that understands
your codebase and helps you build faster`}
      </FullscreenText>
    </Slide>
  );
}
