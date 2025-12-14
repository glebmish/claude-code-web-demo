export function FullscreenText({ children, showInsights = false, align = "center", strongBlur = false, layout = "vertical" }) {
  const alignmentClass = align === "left" ? "items-start justify-start pt-16 pl-16" : "items-center justify-center";
  const textAlignClass = align === "left" ? "text-left" : "text-center";
  const blurClass = strongBlur ? "backdrop-blur-md" : "backdrop-blur-[2px]";

  const insightsLayoutClass = layout === "grid"
    ? "grid grid-cols-2 gap-6"
    : `flex flex-col gap-4 ${align === "left" ? "items-start" : "items-center"}`;

  return (
    <div className={`absolute inset-0 flex flex-col ${alignmentClass} z-40`}>
      {/* Blurred background with dark overlay */}
      <div className={`absolute inset-0 bg-black/30 ${blurClass}`} />

      {/* Text content */}
      <div
        className={`relative z-50 ${textAlignClass} px-8 ${showInsights ? "max-w-6xl" : "max-w-5xl"}`}
      >
        <h1
          className={`text-7xl font-extrabold text-gray-200 leading-tight ${showInsights ? "mb-4" : ""} whitespace-pre-line`}
        >
          {typeof children === "string" || !showInsights
            ? children
            : children[0]}
        </h1>

        {showInsights && children.length > 1 && (
          <div className={insightsLayoutClass}>
            {children.slice(1)}
          </div>
        )}
      </div>
    </div>
  );
}

FullscreenText.displayName = "FullscreenText";
