import { Slide, Note } from '../components/navigation';
import {
  ClaudeCodeTerminal,
  MainTerminalWindow,
  TerminalUserMessage,
  TerminalResponse,
  TerminalToolUse,
  TerminalInput,
  TerminalFooter,
  AgentSection,
  Colored,
  TerminalTabs,
  TerminalTab,
  Clawd
} from '../components/terminal';
import { Slide3 } from './Slide3';

export function Slide4() {
  return (
    <Slide3>
      <Note>
          Step 1: Subagent tabs (Terminal)<br/>
          Start the session as usual
      </Note>
      <ClaudeCodeTerminal>
        <Clawd />

        <MainTerminalWindow>
        </MainTerminalWindow>

        <TerminalInput>
Explore the project and give a brief overview before the main task starts
        </TerminalInput>
      </ClaudeCodeTerminal>
    </Slide3>
  );
}
