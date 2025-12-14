import { useEffect } from 'react';

export function useKeyboardNavigation(currentSlide, totalSlides, setSlide, toggleView, viewMode, hasShownTerminalOnSlide1, forceTerminalExposure, isRootUrl) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Handle view toggle with Space key
      if (e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();
        toggleView();
        return;
      }

      // Handle slide navigation
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();

        // Intercept first right-arrow on root URL to force terminal view
        if (isRootUrl && !hasShownTerminalOnSlide1 && viewMode === 'web') {
          forceTerminalExposure();
          return; // Don't advance slide
        }

        const nextSlide = Math.min(currentSlide + 1, totalSlides - 1);
        setSlide(nextSlide);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        const prevSlide = Math.max(currentSlide - 1, 0);
        setSlide(prevSlide);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, totalSlides, setSlide, toggleView, viewMode, hasShownTerminalOnSlide1, forceTerminalExposure, isRootUrl]);
}
