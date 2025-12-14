import { useView } from "../../contexts/ViewContext";

export function WebView({ children }) {
  const { viewMode } = useView();

  return (
    <div className={`h-full ${viewMode === "terminal" ? "blur-sm" : ""}`}>
      {children}
    </div>
  );
}
