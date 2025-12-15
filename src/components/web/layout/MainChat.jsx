import React, { useRef } from "react";
import {
  findChildByDisplayName,
  filterChildrenByDisplayNames,
  findChildByDisplayNameInWrapper,
  useScrollPosition,
} from "../../common";

export function MainChat({ children, scroll }) {
  const header = findChildByDisplayName(children, "MainChatHeader");

  // Find MainChatTextField, even if wrapped in Highlight
  const { element: textFieldElement, wrapper: textFieldWrapper } =
    findChildByDisplayNameInWrapper(children, "MainChatTextField");

  // Get messages, but exclude Highlight that wraps MainChatTextField
  const messages = filterChildrenByDisplayNames(children, [
    "Message",
    "Response",
    "ToolUse",
    "Highlight",
  ]).filter((child) => {
    // Exclude the Highlight that wraps MainChatTextField
    if (child?.type?.displayName === "Highlight" && textFieldWrapper === child) {
      return false;
    }
    return true;
  });

  // Render textField with its wrapper if present
  const textField = textFieldWrapper
    ? React.cloneElement(textFieldWrapper, {}, textFieldElement)
    : textFieldElement;

  const containerRef = useRef(null);
  useScrollPosition(containerRef, scroll, [messages]);

  return (
    <>
      {header}
      <div
        ref={containerRef}
        className={`flex-1 px-6 py-4 flex flex-col overflow-y-auto ${
          scroll ? "[&::-webkit-scrollbar]:hidden" : "justify-end"
        }`}
        style={
          scroll ? { scrollbarWidth: "none", msOverflowStyle: "none" } : {}
        }
      >
        <div className="flex flex-col gap-4">{messages}</div>
      </div>
      {textField}
    </>
  );
}

MainChat.displayName = "MainChat";
