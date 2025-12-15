import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

// Initialize mermaid once at module level
let isInitialized = false;
if (!isInitialized) {
  mermaid.initialize({
    startOnLoad: false,
    theme: "base",
    themeVariables: {
      primaryColor: "#f7f7f7",
      primaryTextColor: "#1f1f1f",
      primaryBorderColor: "#e0e0e0",
      lineColor: "#737373",
      secondaryColor: "#fafafa",
      tertiaryColor: "#f0f0f0",
      fontSize: "24px",
      fontFamily: "Inter, system-ui, sans-serif",
    },
  });
  isInitialized = true;
}

export function MermaidDiagram({ children }) {
  const containerRef = useRef(null);
  const [svg, setSvg] = useState("");
  const idRef = useRef(`mermaid-${Math.random().toString(36).substr(2, 9)}`);

  useEffect(() => {
    const renderDiagram = async () => {
      try {
        const { svg: renderedSvg } = await mermaid.render(
          idRef.current,
          children
        );
        setSvg(renderedSvg);
      } catch {
        setSvg('<div class="text-red-500">Error rendering diagram</div>');
      }
    };

    renderDiagram();
  }, [children]);

  return (
    <div className="absolute inset-0 bg-claude-bg overflow-hidden">
      <TransformWrapper
        initialScale={1.3}
        minScale={0.2}
        maxScale={5}
        centerOnInit={true}
        limitToBounds={false}
        wheel={{ step: 0.1 }}
        doubleClick={{ disabled: false, mode: "zoomIn", step: 0.5 }}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            {/* Zoom Controls */}
            <div className="absolute top-4 right-8 z-50 flex flex-col gap-2">
              <button
                onClick={() => zoomIn()}
                className="bg-claude-sidebar border border-claude-border rounded-lg px-4 py-3
                         text-claude-text hover:bg-claude-hover shadow-lg font-bold text-2xl
                         min-w-[50px] min-h-[50px]"
                title="Zoom In (or scroll)"
              >
                +
              </button>
              <button
                onClick={() => zoomOut()}
                className="bg-claude-sidebar border border-claude-border rounded-lg px-4 py-3
                         text-claude-text hover:bg-claude-hover shadow-lg font-bold text-2xl
                         min-w-[50px] min-h-[50px]"
                title="Zoom Out (or scroll)"
              >
                −
              </button>
              <button
                onClick={() => resetTransform()}
                className="bg-claude-sidebar border border-claude-border rounded-lg px-3 py-3
                         text-claude-text hover:bg-claude-hover shadow-lg text-sm font-semibold
                         min-w-[50px]"
                title="Reset View"
              >
                Reset
              </button>
            </div>

            {/* Diagram Container */}
            <TransformComponent
              wrapperStyle={{ width: "100%", height: "100%" }}
              contentStyle={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                ref={containerRef}
                dangerouslySetInnerHTML={{ __html: svg }}
                style={{ padding: "40px" }}
              />
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  );
}
