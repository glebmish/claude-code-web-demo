import { Slide, Note, Highlight } from '../components/navigation';
import { ClaudeCodeWeb } from '../components/claude-code-web/ClaudeCodeWeb';
import { Sessions } from '../components/claude-code-web/Sessions';
import { Session, Name, Footer } from '../components/claude-code-web/Session';
import { MainChat } from '../components/claude-code-web/MainChat';
import { MainChatHeader } from '../components/claude-code-web/MainChatHeader';
import { Message, Response } from '../components/claude-code-web/Message';
import { ToolUse, ToolName, Command, Result } from '../components/claude-code-web/ToolUse';
import { MainChatTextField } from '../components/claude-code-web/MainChatTextField';

export function Slide2() {
  return (
    <Slide>
      <Note>Claude responds and executes bash commands to set up the environment</Note>
      <ClaudeCodeWeb>
        <Sessions>
          <Session selected>
            <Name>Analyze test runs with session evaluator</Name>
            <Footer>glebmish/rewrite-claude-assisted</Footer>
          </Session>
          <Session>
            <Name>Analyze workflow fix commits and cleanup</Name>
            <Footer>glebmish/rewrite-claude-assisted</Footer>
          </Session>
        </Sessions>

        <MainChat>
          <MainChatHeader>Analyze test runs with session evaluator</MainChatHeader>

          <Message from="user">
start with git fetch git checkout tmp-results

locate test runs in tmp (there are 4). Use session-evaluator subagent to analyze each one separately. Tell agent that the instructions it has are partially outdated and it should use its best judgement and deep expertise and be thorough and detailed. It must pay most of its attention to the workflow corretness and smoothness, not the efficiency of the resulting openrewrite recipe. For each of the runs there's an older run in eval-checkpoints/2025-11-17-sonnet-only for comparison
          </Message>

          <Highlight>
            <Response>
I'll help you analyze the test runs. Let me start by fetching and checking out the branch, then locating the test runs.
            </Response>
          </Highlight>

          <Highlight>
            <ToolUse>
              <ToolName>Bash</ToolName>
              <Command>git fetch origin</Command>
              <Result>
{`   * [new branch]      main        -> origin/main
 * [new branch]      mcp         -> origin/mcp
 * [new branch]      tmp-results -> origin/tmp-results
... +4 lines`}
              </Result>
            </ToolUse>
          </Highlight>

          <Highlight>
            <ToolUse>
              <ToolName>Bash</ToolName>
              <Command>git checkout tmp-results</Command>
              <Result>
{`branch 'tmp-results' set up to track 'origin/tmp-results'.
Switched to a new branch 'tmp-results'`}
              </Result>
            </ToolUse>
          </Highlight>

          <ToolUse>
            <ToolName>Bash</ToolName>
            <Command>ls -la /home/user/rewrite-claude-assisted/tmp</Command>
            <Result>
{`drwxr-xr-x 2 root root  4096 Nov 23 11:28 1-run1-run-metadata
drwxr-xr-x 4 root root  4096 Nov 23 11:28 2-run1-run-metadata
drwxr-xr-x 4 root root  4096 Nov 23 11:28 3-run1-run-metadata
... +4 lines`}
            </Result>
          </ToolUse>

          <MainChatTextField />
        </MainChat>
      </ClaudeCodeWeb>
    </Slide>
  );
}
