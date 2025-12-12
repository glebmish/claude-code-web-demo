import { Slide, Note, MermaidDiagram } from '../components/navigation';

export function Slide5() {
  return (
    <Slide>
      <Note>Claude Code Architecture: How user requests flow through the system</Note>
      <MermaidDiagram>
{`graph TD
    A[User Request] --> B{Request Type}
    B -->|Code Task| C[Claude AI Model]
    B -->|Terminal Command| D[Bash Tool]
    B -->|File Operation| E[File Tools]

    C --> F{Tool Selection}
    F -->|Read/Write| E
    F -->|Execute| D
    F -->|Search| G[Grep/Glob Tools]
    F -->|Launch Agent| H[Task Tool]

    E --> I[File System]
    D --> J[Shell Process]
    G --> I
    H --> K[Specialized Agent]

    K --> L[Agent Analysis]
    L --> C

    I --> M[Response]
    J --> M
    M --> N[User Interface]

    style A fill:#7c3aed,stroke:#6d28d9,color:#fff
    style C fill:#f7f7f7,stroke:#e0e0e0,color:#1f1f1f
    style N fill:#7c3aed,stroke:#6d28d9,color:#fff
    style K fill:#f0f0f0,stroke:#e0e0e0,color:#1f1f1f`}
      </MermaidDiagram>
    </Slide>
  );
}
