import { useState, useEffect } from 'react';
import { useKeyboardNavigation } from '../../utils/useKeyboardNavigation';
import { HighlightProvider } from '../../contexts/HighlightContext';
import { NoteProvider, useNote } from '../../contexts/NoteContext';

function DemoContent({ children, currentSlide, totalSlides, onSlideChange }) {
  const [highlightKey, setHighlightKey] = useState(0);
  const { noteContent } = useNote();
  const slides = Array.isArray(children) ? children : [children];

  useKeyboardNavigation(currentSlide, totalSlides, onSlideChange);

  // Reset highlight context when slide changes
  useEffect(() => {
    setHighlightKey(prev => prev + 1);
  }, [currentSlide]);

  const handleClick = () => {
    if (currentSlide < totalSlides - 1) {
      onSlideChange(currentSlide + 1);
    }
  };

  return (
    <div
      className="w-screen h-screen overflow-hidden cursor-pointer flex flex-col"
      onClick={handleClick}
    >
      {/* Header with note and counter */}
      <div className="w-full bg-claude-sidebar border-b border-claude-border px-6 py-3 flex items-center justify-between flex-shrink-0 pointer-events-none">
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
    </div>
  );
}

export function Demo({ children }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = Array.isArray(children) ? children : [children];
  const totalSlides = slides.length;

  return (
    <NoteProvider>
      <DemoContent
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onSlideChange={setCurrentSlide}
      >
        {children}
      </DemoContent>
    </NoteProvider>
  );
}
