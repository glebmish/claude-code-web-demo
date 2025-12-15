import { Children } from "react";

export function FullscreenText({ children, showInsights = false, align = "center", strongBlur = false, layout = "vertical" }) {
  const alignmentClass = align === "left" ? "items-start justify-start pt-4 pl-4 sm:pt-8 sm:pl-8 lg:pt-16 lg:pl-16" : "items-center justify-center";
  const textAlignClass = align === "left" ? "text-left" : "text-center";
  const blurClass = strongBlur ? "backdrop-blur-md" : "backdrop-blur-[2px]";

  const insightsLayoutClass = layout === "grid"
    ? "flex flex-col gap-3 sm:gap-4 lg:grid lg:grid-cols-2 lg:gap-6"
    : `flex flex-col gap-3 sm:gap-4 ${align === "left" ? "items-start" : "items-center"}`;

  return (
    <div className={`absolute inset-0 flex flex-col ${alignmentClass} z-40`}>
      {/* Blurred background with dark overlay */}
      <div className={`absolute inset-0 bg-black/30 ${blurClass}`} />

      {/* Text content */}
      <div
        className={`relative z-50 ${textAlignClass} px-4 sm:px-6 lg:px-8 ${showInsights ? "max-w-full sm:max-w-4xl lg:max-w-6xl" : "max-w-full sm:max-w-3xl lg:max-w-5xl"}`}
      >
        <h1
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-gray-200 leading-tight ${showInsights ? "mb-2 sm:mb-3 lg:mb-4" : ""} whitespace-pre-line`}
        >
          {typeof children === "string" || !showInsights
            ? children
            : children[0]}
        </h1>

        {showInsights && children.length > 1 && (
          <div className={insightsLayoutClass}>
            {Children.toArray(children).slice(1)}
          </div>
        )}
      </div>
    </div>
  );
}

FullscreenText.displayName = "FullscreenText";
