import { useEffect } from "react";
import { useView } from "../../contexts/ViewContext";

export function NavigationButtons({ currentSlide, totalSlides, onNavigate }) {
  const { toggleView, shouldAnimateSpacebar, stopSpacebarAnimation } =
    useView();
  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide === totalSlides - 1;

  // Auto-stop animation after intro completes
  useEffect(() => {
    if (shouldAnimateSpacebar) {
      const timer = setTimeout(() => {
        stopSpacebarAnimation();
      }, 2000); // 2s animation duration
      return () => clearTimeout(timer);
    }
  }, [shouldAnimateSpacebar, stopSpacebarAnimation]);

  const handleNavigation = (direction) => {
    if (direction === "left" || direction === "up") {
      if (!isFirstSlide) {
        onNavigate(currentSlide - 1);
      }
    } else if (direction === "right" || direction === "down") {
      if (!isLastSlide) {
        onNavigate(currentSlide + 1);
      }
    }
  };

  const KeyButton = ({ direction, disabled, onClick, title }) => (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick(e);
      }}
      disabled={disabled}
      title={title}
      className={`
        relative
        w-9 h-9 sm:w-7 sm:h-7
        cursor-pointer
        select-none
        transition-all duration-100
        ${
          disabled
            ? "opacity-40 cursor-not-allowed"
            : "active:translate-y-[1px]"
        }
      `}
    >
      {/* Key cap - the visible top surface with concave effect */}
      <div
        className={`
          absolute
          inset-0
          flex items-center justify-center
          bg-white
          rounded-sm
          border border-gray-800
          ${disabled ? "" : "active:shadow-[inset_0_2px_3px_rgba(0,0,0,0.15)]"}
        `}
        style={{
          boxShadow: `
            inset 0 0.5px 1px rgba(0, 0, 0, 0.1),
            0 2px 0 0 rgba(50, 50, 50, 1),
            0 2.5px 0 0 rgba(30, 30, 30, 1),
            0 3px 4px 0 rgba(0, 0, 0, 0.2)
          `,
        }}
      >
        <ArrowIcon direction={direction} disabled={disabled} />
      </div>
    </button>
  );

  const ArrowIcon = ({ direction, disabled }) => {
    const paths = {
      up: "M12 4l-8 8h16l-8-8z",
      down: "M12 20l8-8H4l8 8z",
      left: "M4 12l8-8v16l-8-8z",
      right: "M20 12l-8 8V4l8 8z",
    };

    return (
      <svg
        className={`w-3 h-3 ${disabled ? "text-gray-400" : "text-gray-600"}`}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d={paths[direction]} />
      </svg>
    );
  };

  return (
    <>
      {/* Animated spacebar overlay - appears on top of everything */}
      {shouldAnimateSpacebar && (
        <div className="fixed inset-0 z-[9999] pointer-events-none">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleView();
            }}
            onTouchEnd={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            title="Toggle view (Space)"
            className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 w-20 h-9 sm:w-16 sm:h-7 cursor-pointer select-none pointer-events-auto animate-spacebar-intro"
          >
            <div
              className="absolute inset-0 flex items-center justify-center bg-white rounded-sm border border-gray-800"
              style={{
                boxShadow: `
                  inset 0 0.5px 1px rgba(0, 0, 0, 0.1),
                  0 2px 0 0 rgba(50, 50, 50, 1),
                  0 2.5px 0 0 rgba(30, 30, 30, 1),
                  0 3px 4px 0 rgba(0, 0, 0, 0.2)
                `,
              }}
            >
              <span className="text-gray-600 text-[10px] font-medium">
                SPACE
              </span>
            </div>
          </button>
        </div>
      )}

      {/* Regular navigation buttons */}
      <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-40">
        <div className="flex flex-col items-end gap-2">
          {/* Arrow keys */}
          <div className="flex flex-col gap-0.5">
            {/* Top row - Up arrow (disabled) */}
            <div className="flex justify-center">
              <KeyButton
                direction="up"
                disabled={true}
                onClick={() => {}}
                title="Not available"
              />
            </div>

            {/* Bottom row - Left, Down, Right arrows */}
            <div className="flex gap-0.5">
              <KeyButton
                direction="left"
                disabled={isFirstSlide}
                onClick={() => handleNavigation("left")}
                title="Previous slide (Left arrow)"
              />
              <KeyButton
                direction="down"
                disabled={true}
                onClick={() => {}}
                title="Not available"
              />
              <KeyButton
                direction="right"
                disabled={isLastSlide}
                onClick={() => handleNavigation("right")}
                title="Next slide (Right arrow)"
              />
            </div>
          </div>

          {/* Space key */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleView();
            }}
            onTouchEnd={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            title="Toggle view (Space)"
            className={`relative w-20 h-9 sm:w-16 sm:h-7 cursor-pointer select-none transition-all duration-100 active:translate-y-[1px] ${
              shouldAnimateSpacebar ? "opacity-0" : ""
            }`}
          >
            <div
              className="absolute inset-0 flex items-center justify-center bg-white rounded-sm border border-gray-800 active:shadow-[inset_0_2px_3px_rgba(0,0,0,0.15)]"
              style={{
                boxShadow: `
                  inset 0 0.5px 1px rgba(0, 0, 0, 0.1),
                  0 2px 0 0 rgba(50, 50, 50, 1),
                  0 2.5px 0 0 rgba(30, 30, 30, 1),
                  0 3px 4px 0 rgba(0, 0, 0, 0.2)
                `,
              }}
            >
              <span className="text-gray-600 text-[10px] font-medium">
                SPACE
              </span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
