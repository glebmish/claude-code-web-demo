import { Slide, Note } from '../components/navigation';
import { ClaudeCodeWeb } from '../components/claude-code-web/ClaudeCodeWeb';
import { Sessions } from '../components/claude-code-web/Sessions';
import { Session, Name, Footer } from '../components/claude-code-web/Session';
import { MainChat } from '../components/claude-code-web/MainChat';
import { MainChatHeader } from '../components/claude-code-web/MainChatHeader';
import { Message } from '../components/claude-code-web/Message';
import { MainChatTextField } from '../components/claude-code-web/MainChatTextField';
import { Terminal, Tabs, Tab, MainTerminalWindow } from '../components/terminal';

export function Slide4() {
  return (
    <Slide>
      <Note>This slide shows how to create a new task</Note>
      <ClaudeCodeWeb>
        <Sessions>
          <Session selected>
            <Name>Setting up project environment</Name>
            <Footer>glebmish/claude-code-manager-demo</Footer>
          </Session>
          <Session>
            <Name>Analyze test runs with session evaluator</Name>
            <Footer>glebmish/rewrite-claude-assisted</Footer>
          </Session>
          <Session>
            <Name>Analyze workflow fix commits and cleanup</Name>
            <Footer>glebmish/rewrite-claude-assisted</Footer>
          </Session>
        </Sessions>

        <MainChat>
          <MainChatHeader>Setting up project environment</MainChatHeader>

          <Message from="user">
Can you help me set up the development environment and install dependencies?
          </Message>

          <MainChatTextField />
        </MainChat>
      </ClaudeCodeWeb>

      <Terminal>
        <Tabs>
          <Tab>bash</Tab>
          <Tab active>zsh</Tab>
          <Tab>node</Tab>
        </Tabs>
        <MainTerminalWindow>
          <div className="text-[#4FC1FF]">~/projects/claude-code-manager-demo $</div>
          <div>npm install</div>
          <div className="text-[#4EC9B0]">added 234 packages in 5.2s</div>
          <div></div>
          <div className="text-[#4FC1FF]">~/projects/claude-code-manager-demo $</div>
          <div>npm run dev</div>
          <div className="text-[#CE9178]">Server running on http://localhost:3000</div>
          <div className="text-[#4EC9B0]">Ready in 1.2s</div>
          <div></div>
          <div className="text-[#4FC1FF]">~/projects/claude-code-manager-demo $</div>
        </MainTerminalWindow>
      </Terminal>
    </Slide>
  );
}
