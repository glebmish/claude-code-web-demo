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
  const [touchStartY, setTouchStartY] = useState(null);
  const [touchEndY, setTouchEndY] = useState(null);
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

  // Scroll to top when slide changes or in terminal mode
  useEffect(() => {
    const scrollToTop = () => {
      // Scroll both window and main container to ensure it works
      window.scrollTo(0, 0);
      const mainContainer = document.querySelector('[class*="w-screen"][class*="h-screen"]');
      if (mainContainer) {
        mainContainer.scrollTop = 0;
        mainContainer.scrollTo({ top: 0, behavior: 'instant' });
      }
      // Also scroll body
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };

    // Immediate scroll
    scrollToTop();

    // Delayed scroll to catch any async rendering
    const timer = setTimeout(scrollToTop, 50);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  // Scroll to top when switching to terminal mode
  useEffect(() => {
    if (viewMode === "terminal") {
      window.scrollTo(0, 0);
      const mainContainer = document.querySelector('[class*="w-screen"][class*="h-screen"]');
      if (mainContainer) {
        mainContainer.scrollTop = 0;
        mainContainer.scrollTo({ top: 0, behavior: 'instant' });
      }
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }, [viewMode]);

  const isLastSlide = currentSlide === totalSlides - 1;

  const onTouchStart = (e) => {
    // On last slide, don't handle touch for swipe - allow native text selection
    if (isLastSlide) return;

    setTouchEnd(null);
    setTouchEndY(null);
    setTouchStart(e.targetTouches[0].clientX);
    setTouchStartY(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e) => {
    // On last slide, don't handle touch - allow native text selection
    if (isLastSlide) return;

    setTouchEnd(e.targetTouches[0].clientX);
    setTouchEndY(e.targetTouches[0].clientY);

    // If we have both start and current positions, determine swipe direction
    if (touchStart !== null && touchStartY !== null) {
      const xDiff = Math.abs(e.targetTouches[0].clientX - touchStart);
      const yDiff = Math.abs(e.targetTouches[0].clientY - touchStartY);

      // If horizontal swipe is more pronounced than vertical, prevent default scroll
      if (xDiff > yDiff && xDiff > 10) {
        e.preventDefault();
      }
    }
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd || !touchStartY || !touchEndY) return;

    const xDistance = touchStart - touchEnd;
    const yDistance = touchStartY - touchEndY;

    // Determine if swipe is more horizontal than vertical
    const isHorizontalSwipe = Math.abs(xDistance) > Math.abs(yDistance);

    if (!isHorizontalSwipe) return; // Ignore vertical swipes

    const isLeftSwipe = xDistance > minSwipeDistance;
    const isRightSwipe = xDistance < -minSwipeDistance;

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
      style={{ touchAction: isLastSlide ? 'auto' : 'pan-y' }}
      onClick={handleClick}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Header with controls and note */}
      <div className="sticky lg:relative top-0 z-20 w-full bg-claude-sidebar border-b border-claude-border px-3 py-2 sm:px-4 sm:py-2.5 lg:px-6 lg:py-3 flex-shrink-0">
        {/* Mobile layout (< lg): Stacked */}
        <div className="flex flex-col gap-2 lg:hidden">
          {/* Top row: ViewToggle and Counter */}
          <div className="flex items-center justify-between pointer-events-none">
            <div className="pointer-events-auto">
              <ViewToggle />
            </div>
            <span className="text-claude-text-dim text-xs sm:text-sm font-medium whitespace-nowrap">
              {currentSlide}/{totalSlides - 1}
            </span>
          </div>

          {/* Bottom row: Note */}
          {noteContent && (
            <div className="flex-1 min-w-0">
              <p className="text-claude-text-dim text-xs sm:text-sm font-medium text-left">
                {noteContent}
              </p>
            </div>
          )}
        </div>

        {/* Desktop layout (>= lg): Original horizontal layout */}
        <div className="hidden lg:flex items-center justify-between pointer-events-none">
          <div className="flex-1" />
          <div className="flex-1 flex justify-center">
            {noteContent && (
              <p className="text-claude-text-dim text-sm font-medium text-center">
                {noteContent}
              </p>
            )}
          </div>
          <div className="flex-1 flex items-center justify-end gap-4 pointer-events-auto">
            <ViewToggle />
            <span className="text-claude-text-dim text-sm font-medium whitespace-nowrap">
              {currentSlide}/{totalSlides - 1}
            </span>
          </div>
        </div>
      </div>

      {/* Slide content area */}
      <div className="flex-1 relative min-h-0 overflow-visible lg:overflow-hidden">
        <HighlightProvider key={highlightKey}>
          {slides[currentSlide]}
        </HighlightProvider>
      </div>

      {/* Navigation Buttons - Desktop only */}
      <div className="hidden lg:block pointer-events-auto">
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
