import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useKeyboardNavigation } from "../../utils/useKeyboardNavigation";
import { HighlightProvider } from "../../contexts/HighlightContext";
import { NoteProvider, useNote } from "../../contexts/NoteContext";
import { ViewProvider, useView } from "../../contexts/ViewContext";
import { NavigationButtons } from "./NavigationButtons";
import { ViewToggle } from "./ViewToggle";
import { toChildArray } from "../common";

function DemoContent({
  children,
  currentSlide,
  totalSlides,
  onSlideChange,
  isSlide1,
}) {
  const [highlightKey, setHighlightKey] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const { noteContent } = useNote();
  const {
    toggleView,
    viewMode,
    hasShownTerminalOnSlide1,
    forceTerminalExposure,
    stopSpacebarAnimation,
  } = useView();
  const slides = toChildArray(children);

  // Minimum swipe distance (in px) to trigger navigation
  const minSwipeDistance = 50;

  useKeyboardNavigation(
    currentSlide,
    totalSlides,
    onSlideChange,
    toggleView,
    viewMode,
    hasShownTerminalOnSlide1,
    forceTerminalExposure,
    isSlide1
  );

  // Reset highlight context when slide changes
  useEffect(() => {
    setHighlightKey((prev) => prev + 1);
  }, [currentSlide]);

  // Stop spacebar animation when leaving Slide1
  useEffect(() => {
    if (currentSlide !== 1) {
      stopSpacebarAnimation();
    }
  }, [currentSlide, stopSpacebarAnimation]);

  const isLastSlide = currentSlide === totalSlides - 1;

  const onTouchStart = (e) => {
    // Only handle swipe navigation on desktop (lg breakpoint)
    if (window.innerWidth >= 1024) {
      setTouchEnd(null);
      setTouchStart(e.targetTouches[0].clientX);
    }
  };

  const onTouchMove = (e) => {
    // Only handle swipe navigation on desktop (lg breakpoint)
    if (window.innerWidth >= 1024) {
      setTouchEnd(e.targetTouches[0].clientX);
    }
  };

  const onTouchEnd = () => {
    // Only handle swipe navigation on desktop (lg breakpoint)
    if (window.innerWidth < 1024) return;

    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    // Left swipe = next slide
    if (isLeftSwipe && currentSlide < totalSlides - 1) {
      onSlideChange(currentSlide + 1);
    }
    // Right swipe = previous slide
    if (isRightSwipe && currentSlide > 0) {
      onSlideChange(currentSlide - 1);
    }
  };

  const handleClick = () => {
    // Don't handle clicks on last slide - allow text selection
    if (isLastSlide) return;

    // Intercept first click on Slide1 to force terminal view
    if (currentSlide === 1 && !hasShownTerminalOnSlide1 && viewMode === "web") {
      forceTerminalExposure();
      return; // Don't advance slide
    }

    // Normal navigation
    if (currentSlide < totalSlides - 1) {
      onSlideChange(currentSlide + 1);
    }
  };

  return (
    <div
      className={`w-screen min-h-screen lg:h-screen overflow-auto lg:overflow-hidden flex flex-col ${
        isLastSlide ? "" : "cursor-pointer"
      }`}
      onClick={handleClick}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Header with note and counter */}
      <div className="relative z-20 w-full bg-claude-sidebar border-b border-claude-border px-3 py-2 sm:px-4 sm:py-2.5 lg:px-6 lg:py-3 flex items-center justify-between flex-shrink-0 pointer-events-none">
        <div className="flex-1" />
        <div className="flex-1 flex justify-center">
          {noteContent && (
            <p className="text-claude-text-dim text-xs sm:text-sm font-medium text-center truncate max-w-full px-1">
              {noteContent}
            </p>
          )}
        </div>
        <div className="flex-1 flex items-center justify-end gap-4 pointer-events-auto">
          <ViewToggle />
          <span className="text-claude-text-dim text-xs sm:text-sm font-medium whitespace-nowrap">
            {currentSlide}/{totalSlides - 1}
          </span>
        </div>
      </div>

      {/* Slide content area */}
      <div className="flex-1 relative min-h-0 overflow-visible lg:overflow-hidden">
        <HighlightProvider key={highlightKey}>
          {slides[currentSlide]}
        </HighlightProvider>
      </div>

      {/* Navigation Buttons */}
      <div className="pointer-events-auto" onClick={(e) => e.stopPropagation()}>
        <NavigationButtons
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          onNavigate={onSlideChange}
        />
      </div>
    </div>
  );
}

export function Demo({ children }) {
  const { slideNumber } = useParams();
  const navigate = useNavigate();
  const slides = Array.isArray(children) ? children : [children];
  const totalSlides = slides.length;

  // Parse current slide from URL
  // URL numbering is 0-based: / = slide 0, /1 = slide 1, /2 = slide 2, etc.
  const getCurrentSlideFromUrl = () => {
    if (!slideNumber) return 0; // Root path is slide 0
    const parsed = parseInt(slideNumber, 10);
    if (isNaN(parsed)) return 0;
    // URL is already 0-based, just validate the range
    return Math.max(0, Math.min(parsed, totalSlides - 1));
  };

  const [currentSlide, setCurrentSlide] = useState(getCurrentSlideFromUrl);

  // Sync state with URL when URL changes
  useEffect(() => {
    const urlSlide = !slideNumber ? 0 : Math.max(0, Math.min(parseInt(slideNumber, 10) || 0, totalSlides - 1));
    setCurrentSlide(urlSlide);
  }, [slideNumber, totalSlides]);

  // Update URL when slide changes
  const handleSlideChange = useCallback((newSlide) => {
    if (typeof newSlide !== "number" || isNaN(newSlide)) {
      return;
    }
    const validSlide = Math.max(0, Math.min(newSlide, totalSlides - 1));
    // Use 0-based numbering in URL: slide 0 = /0, slide 1 = /1, etc.
    navigate(`/${validSlide}`, { replace: true });
  }, [navigate, totalSlides]);

  return (
    <ViewProvider>
      <NoteProvider>
        <DemoContent
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          onSlideChange={handleSlideChange}
          isSlide1={currentSlide === 1}
        >
          {children}
        </DemoContent>
      </NoteProvider>
    </ViewProvider>
  );
}
