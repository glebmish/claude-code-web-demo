import { Slide, Note } from '../components/navigation';
import { ClaudeCodeWeb } from '../components/claude-code-web/ClaudeCodeWeb';
import { RepositorySelector } from '../components/claude-code-web/RepositorySelector';
import { Sessions } from '../components/claude-code-web/Sessions';
import { Session, Name, Footer, Subsession, AutocompletePopup, AutocompleteHeader, AutocompleteItem } from '../components/claude-code-web/Session';
import { MainChat } from '../components/claude-code-web/MainChat';
import { MainChatHeader } from '../components/claude-code-web/MainChatHeader';
import { Message } from '../components/claude-code-web/Message';
import { MainChatTextField } from '../components/claude-code-web/MainChatTextField';

export function Slide1() {
  return (
    <Slide>
      <Note>Initial state: Active sessions and user request</Note>
      <ClaudeCodeWeb>
        <RepositorySelector>glebmish/rewrite-claude-assisted</RepositorySelector>

        <Sessions>
          <Session selected>
            <Name>Analyze test runs with session evaluator</Name>
            <Footer>glebmish/rewrite-claude-assisted</Footer>
          </Session>
          <Subsession>1-run1-run-metadata</Subsession>
          <Subsession>2-run1-run-metadata</Subsession>
          <Subsession selected color="green">3-run1-run-metadata</Subsession>
          <Subsession>4-run1-run-metadata</Subsession>
          <Session>
            <Name>Analyze workflow fix commits and cleanup</Name>
            <Footer>glebmish/rewrite-claude-assisted</Footer>
          </Session>
          <Session>
            <Name>Analyze workflow fix commits and changes</Name>
            <Footer>glebmish/rewrite-claude-assisted</Footer>
          </Session>
          <Session>
            <Name>Review Claude error handling and validation logs</Name>
            <Footer>glebmish/rewrite-claude-assisted</Footer>
          </Session>
        </Sessions>

        <MainChat>
          <MainChatHeader>Analyze test runs with session evaluator</MainChatHeader>

          <Message from="user">
start with git fetch git checkout tmp-results

locate test runs in tmp (there are 4). Use session-evaluator subagent to analyze each one separately. Tell agent that the instructions it has are partially outdated and it should use its best judgement and deep expertise and be thorough and detailed. It must pay most of its attention to the workflow correctness and smoothness, not the efficiency of the resulting openrewrite recipe. For each of the runs there's an older run in eval-checkpoints/2025-11-17-sonnet-only for comparison
          </Message>

          <MainChatTextField>
            <AutocompletePopup>
              <AutocompleteHeader>Select Agent</AutocompleteHeader>
              <AutocompleteItem color="green">session-evaluator</AutocompleteItem>
              <AutocompleteItem color="blue" selected>explore</AutocompleteItem>
              <AutocompleteItem color="purple">plan</AutocompleteItem>
              <AutocompleteItem color="orange">implement</AutocompleteItem>
            </AutocompletePopup>
          </MainChatTextField>
        </MainChat>
      </ClaudeCodeWeb>
    </Slide>
  );
}
