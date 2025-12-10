export function FullscreenText({ children }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center z-40">
      {/* Blurred background with dark overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />

      {/* Text content */}
      <div className="relative z-50 text-center px-8 max-w-5xl">
        <h1 className="text-7xl font-extrabold text-gray-200 leading-tight whitespace-pre-line">
          {children}
        </h1>
      </div>
    </div>
  );
}

FullscreenText.displayName = 'FullscreenText';
