import React, { Children, useRef, useEffect } from "react";
import {
  findChildByDisplayName,
  filterChildrenByDisplayNames,
  findChildByDisplayNameInWrapper,
  useScrollPosition,
} from "../../common";
import { useHighlight } from "../../../contexts/HighlightContext";
import { useView } from "../../../contexts/ViewContext";
import { scrollToHighlight } from "../../../utils/scrollToHighlight";

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
  const { activeHighlights } = useHighlight();
  const { viewMode } = useView();

  // Scroll to highlight when highlights change (Web view only)
  useEffect(() => {
    // Only scroll to highlight in web mode
    if (viewMode !== "web") return;

    if (activeHighlights && activeHighlights.size > 0) {
      // Small delay to ensure DOM is updated
      setTimeout(() => {
        // On mobile (< 1024px), scroll the main page container
        // On desktop, scroll the MainChat container
        const isMobile = window.innerWidth < 1024;
        const scrollContainer = isMobile
          ? document.querySelector('[class*="w-screen"][class*="h-screen"]')
          : containerRef.current;

        scrollToHighlight(scrollContainer, activeHighlights);
      }, 100);
    }
  }, [activeHighlights, viewMode]);

  // Original scroll logic (for presentations with explicit scroll prop)
  useScrollPosition(containerRef, scroll, [messages]);

  return (
    <>
      {header}
      <div
        ref={containerRef}
        className={`flex-1 px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 flex flex-col overflow-y-auto ${
          scroll ? "[&::-webkit-scrollbar]:hidden" : "justify-end"
        }`}
        style={
          scroll ? { scrollbarWidth: "none", msOverflowStyle: "none" } : {}
        }
      >
        <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">{Children.toArray(messages)}</div>
      </div>
      {textField}
    </>
  );
}

MainChat.displayName = "MainChat";
