import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useKeyboardNavigation } from '../../utils/useKeyboardNavigation';
import { HighlightProvider } from '../../contexts/HighlightContext';
import { NoteProvider, useNote } from '../../contexts/NoteContext';
import NavigationButtons from './NavigationButtons';

function DemoContent({ children, currentSlide, totalSlides, onSlideChange }) {
  const [highlightKey, setHighlightKey] = useState(0);
  const { noteContent } = useNote();
  const slides = Array.isArray(children) ? children : [children];
  const wheelTimeoutRef = useRef(null);

  useKeyboardNavigation(currentSlide, totalSlides, onSlideChange);

  // Reset highlight context when slide changes
  useEffect(() => {
    setHighlightKey(prev => prev + 1);
  }, [currentSlide]);

  // Mouse wheel navigation with debounce
  useEffect(() => {
    const handleWheel = (e) => {
      // Clear previous timeout
      if (wheelTimeoutRef.current) {
        clearTimeout(wheelTimeoutRef.current);
      }

      // Debounce the wheel event
      wheelTimeoutRef.current = setTimeout(() => {
        if (e.deltaY > 0) {
          // Scrolling down - next slide
          if (currentSlide < totalSlides - 1) {
            onSlideChange(currentSlide + 1);
          }
        } else if (e.deltaY < 0) {
          // Scrolling up - previous slide
          if (currentSlide > 0) {
            onSlideChange(currentSlide - 1);
          }
        }
      }, 50);
    };

    window.addEventListener('wheel', handleWheel, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (wheelTimeoutRef.current) {
        clearTimeout(wheelTimeoutRef.current);
      }
    };
  }, [currentSlide, totalSlides, onSlideChange]);

  const handleClick = () => {
    // if (currentSlide < totalSlides - 1) {
    //   onSlideChange(currentSlide + 1);
    // }
  };

  return (
    <div
      className="w-screen h-screen overflow-hidden cursor-pointer flex flex-col"
      onClick={handleClick}
    >
      {/* Header with note and counter */}
      <div className="relative z-20 w-full bg-claude-sidebar border-b border-claude-border px-6 py-3 flex items-center justify-between flex-shrink-0 pointer-events-none">
        <div className="flex-1 text-center">
          {noteContent && (
            <p className="text-claude-text-dim text-sm font-medium">
              {noteContent}
            </p>
          )}
        </div>
        <div className="ml-4 flex-shrink-0">
          <span className="text-claude-text-dim text-sm font-medium">
            {currentSlide + 1}/{totalSlides}
          </span>
        </div>
      </div>

      {/* Slide content area */}
      <div className="flex-1 relative overflow-hidden">
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
  const getCurrentSlideFromUrl = () => {
    if (!slideNumber) return 0;
    const parsed = parseInt(slideNumber, 10);
    if (isNaN(parsed)) return 0;
    return Math.max(0, Math.min(parsed, totalSlides - 1));
  };

  const [currentSlide, setCurrentSlide] = useState(getCurrentSlideFromUrl);

  // Sync state with URL when URL changes
  useEffect(() => {
    const urlSlide = getCurrentSlideFromUrl();
    if (urlSlide !== currentSlide) {
      setCurrentSlide(urlSlide);
    }
  }, [slideNumber]);

  // Update URL when slide changes
  const handleSlideChange = (newSlide) => {
    if (typeof newSlide !== 'number' || isNaN(newSlide)) {
      console.error('Invalid slide number:', newSlide);
      return;
    }
    const validSlide = Math.max(0, Math.min(newSlide, totalSlides - 1));
    setCurrentSlide(validSlide);
    navigate(validSlide === 0 ? '/' : `/${validSlide}`, { replace: true });
  };

  return (
    <NoteProvider>
      <DemoContent
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onSlideChange={handleSlideChange}
      >
        {children}
      </DemoContent>
    </NoteProvider>
  );
}
