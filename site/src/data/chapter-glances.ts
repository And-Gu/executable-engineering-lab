/** Reader-facing chapter summaries, not claims of completion or verification. */
export interface ChapterGlance { message: string; tiles: { title: string; detail: string }[] }
export const chapterGlances: Record<string, ChapterGlance> = {
  "01-engineering-intent": {
    "message": "Engineering starts with an operational need and reaches evidence through explicit definitions.",
    "tiles": [
      {
        "title": "Intent",
        "detail": "Understand the need"
      },
      {
        "title": "Criterion",
        "detail": "Choose a measurable claim"
      },
      {
        "title": "Scenario",
        "detail": "Bound the question"
      },
      {
        "title": "Model",
        "detail": "Calculate a prediction"
      },
      {
        "title": "Evaluation",
        "detail": "Check the criterion"
      },
      {
        "title": "Evidence",
        "detail": "Explain the result"
      }
    ]
  },
  "02-engineering-information-models": {
    "message": "Structured definitions and meaningful references make engineering changes more inspectable.",
    "tiles": [
      {
        "title": "Needs",
        "detail": "Capture purpose"
      },
      {
        "title": "Requirements",
        "detail": "Define measurable expectations"
      },
      {
        "title": "Models",
        "detail": "Represent behavior"
      },
      {
        "title": "Identifiers",
        "detail": "Connect definitions"
      },
      {
        "title": "Validation",
        "detail": "Check source consistency"
      },
      {
        "title": "Change",
        "detail": "Review applicability"
      }
    ]
  },
  "03-digital-threads": {
    "message": "Connected engineering information lets us follow dependencies and question what a change affects.",
    "tiles": [
      {
        "title": "Identity",
        "detail": "Recognize records"
      },
      {
        "title": "Relationships",
        "detail": "Define typed links"
      },
      {
        "title": "Traceability",
        "detail": "Follow evidence paths"
      },
      {
        "title": "Versions",
        "detail": "Identify configuration"
      },
      {
        "title": "Impact",
        "detail": "Find affected items"
      },
      {
        "title": "Confidence",
        "detail": "Distinguish inference from proof"
      }
    ]
  },
  "04-executable-models": {
    "message": "Executable models make assumptions and calculations inspectable—and their limitations visible.",
    "tiles": [
      {
        "title": "Inputs",
        "detail": "Specify a scenario"
      },
      {
        "title": "Method",
        "detail": "Define calculation"
      },
      {
        "title": "Execution",
        "detail": "Generate an output"
      },
      {
        "title": "Assumptions",
        "detail": "Bound validity"
      },
      {
        "title": "Precision",
        "detail": "Recognize approximation"
      },
      {
        "title": "Checks",
        "detail": "Reproduce the result"
      }
    ]
  },
  "05-experimentation": {
    "message": "Controlled experiments compare alternatives without confusing feasibility with preference.",
    "tiles": [
      {
        "title": "Question",
        "detail": "Define the choice"
      },
      {
        "title": "Factors",
        "detail": "Vary one thing deliberately"
      },
      {
        "title": "Controls",
        "detail": "Hold context stable"
      },
      {
        "title": "Results",
        "detail": "Record independent runs"
      },
      {
        "title": "Comparison",
        "detail": "Interpret differences"
      },
      {
        "title": "Gaps",
        "detail": "Identify missing evidence"
      }
    ]
  },
  "06-verification-evidence": {
    "message": "Evidence is useful only when we know what was executed, what it establishes, and its limits.",
    "tiles": [
      {
        "title": "Claim",
        "detail": "Specify what must hold"
      },
      {
        "title": "Method",
        "detail": "Inspect the test"
      },
      {
        "title": "Inputs",
        "detail": "Know the evaluated configuration"
      },
      {
        "title": "Outcome",
        "detail": "Read the actual result"
      },
      {
        "title": "Provenance",
        "detail": "Reproduce the record"
      },
      {
        "title": "Limits",
        "detail": "Avoid overclaiming"
      }
    ]
  },
  "07-agentic-engineering": {
    "message": "Agent-assisted work still requires a bounded task, visible changes, and engineering review.",
    "tiles": [
      {
        "title": "Scope",
        "detail": "Choose an achievable task"
      },
      {
        "title": "Context",
        "detail": "Provide trusted inputs"
      },
      {
        "title": "Authority",
        "detail": "Limit permitted actions"
      },
      {
        "title": "Proposal",
        "detail": "Inspect changed artifacts"
      },
      {
        "title": "Checks",
        "detail": "Test the outcomes"
      },
      {
        "title": "Review",
        "detail": "Keep human responsibility"
      }
    ]
  },
  "08-engineering-context": {
    "message": "Agents need engineering meaning, applicable sources, and clear boundaries—not just files.",
    "tiles": [
      {
        "title": "Sources",
        "detail": "Find authoritative records"
      },
      {
        "title": "Vocabulary",
        "detail": "Understand technical terms"
      },
      {
        "title": "Decisions",
        "detail": "Read rationale"
      },
      {
        "title": "Constraints",
        "detail": "Respect assumptions"
      },
      {
        "title": "Tools",
        "detail": "Know available capabilities"
      },
      {
        "title": "Authority",
        "detail": "Separate assistance from approval"
      }
    ]
  },
  "09-continuous-engineering": {
    "message": "Fast digital feedback helps teams learn while physical integration and qualification follow their own constraints.",
    "tiles": [
      {
        "title": "Revision",
        "detail": "Track what changed"
      },
      {
        "title": "Build",
        "detail": "Run reproducible checks"
      },
      {
        "title": "Feedback",
        "detail": "Detect failures quickly"
      },
      {
        "title": "Integration",
        "detail": "Combine disciplines"
      },
      {
        "title": "Evidence",
        "detail": "Retain actual outcomes"
      },
      {
        "title": "Cadence",
        "detail": "Respect physical lead times"
      }
    ]
  },
  "10-governance-assurance": {
    "message": "Engineering confidence comes from appropriate checks, evidence, review and accountable decisions.",
    "tiles": [
      {
        "title": "Claims",
        "detail": "State the assertion"
      },
      {
        "title": "Controls",
        "detail": "Apply relevant safeguards"
      },
      {
        "title": "Evidence",
        "detail": "Inspect supporting results"
      },
      {
        "title": "Gaps",
        "detail": "Recognize unknowns"
      },
      {
        "title": "Authority",
        "detail": "Identify decision makers"
      },
      {
        "title": "Review",
        "detail": "Record justified outcomes"
      }
    ]
  },
  "11-engineering-knowledge": {
    "message": "Engineering knowledge can be reused when versions, configurations and evidence applicability remain clear.",
    "tiles": [
      {
        "title": "Identity",
        "detail": "Distinguish objects"
      },
      {
        "title": "Revision",
        "detail": "Track change history"
      },
      {
        "title": "Configuration",
        "detail": "Identify full variants"
      },
      {
        "title": "Evidence",
        "detail": "Associate actual results"
      },
      {
        "title": "Reuse",
        "detail": "Assess applicability"
      },
      {
        "title": "Lifecycle",
        "detail": "Maintain coherence"
      }
    ]
  },
  "12-integrated-environment": {
    "message": "Planning, definitions, implementation and evidence form an inspectable engineering learning loop.",
    "tiles": [
      {
        "title": "Intent",
        "detail": "Start from a need"
      },
      {
        "title": "Model",
        "detail": "Explore an idea"
      },
      {
        "title": "Specify",
        "detail": "Bound the increment"
      },
      {
        "title": "Integrate",
        "detail": "Implement and check"
      },
      {
        "title": "Evidence",
        "detail": "Qualify observed results"
      },
      {
        "title": "Learn",
        "detail": "Return findings to planning"
      }
    ]
  },
  "v2/05-engineering-data": {
    "message": "Engineering data become valuable through checks, annotations, enrichment, visualization, critical review and preservation.",
    "tiles": [
      {
        "title": "Quality",
        "detail": "Check units, gaps and validity"
      },
      {
        "title": "Annotate",
        "detail": "Record context and assumptions"
      },
      {
        "title": "Enrich",
        "detail": "Join and derive data"
      },
      {
        "title": "Visualize",
        "detail": "Investigate behavior and margins"
      },
      {
        "title": "Review",
        "detail": "Qualify technical conclusions"
      },
      {
        "title": "Preserve",
        "detail": "Retain reproducible assets"
      }
    ]
  }
};
