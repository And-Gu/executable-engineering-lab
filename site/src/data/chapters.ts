/** Completed lessons in this build. Register each new lesson here for Home and Learn. */
export const chapters = [
  { path: '01-engineering-intent', title: 'From Engineering Intent to Evidence', summary: 'Start with an operator’s need, define a coverage criterion and interpret an executable model’s result.' },
  { path: '02-engineering-information-models', title: 'Engineering Information Models', summary: 'Change one definition, validate its fields and relationships, and decide which evidence still applies.' },
  { path: '03-digital-threads', title: 'Digital Threads and Knowledge Graphs', summary: 'Follow typed relationships, distinguish definitions from execution context, and explain change impact.' },
  { path: '04-executable-models', title: 'Executable Engineering Models', summary: 'Inspect the discrete calculation, separate evaluation from geometry, and reproduce its output.' },
  { path: '05-experimentation', title: 'Experimentation and Trade-offs', summary: 'Control the comparison, interpret separate candidate runs, and identify missing decision evidence.' },
  { path: '06-verification-evidence', title: 'Verification and Engineering Evidence', summary: 'Inspect what executed, reconcile test success with requirement failure, and qualify the evidence.' },
  { path: '07-agentic-engineering', title: 'Agentic Engineering', summary: 'Define a bounded assistance task, inspect its proposal and checks, and retain engineering review responsibility.' },
  { path: '08-engineering-context', title: 'Agents and Engineering Context', summary: 'Assemble relevant source context, separate content from authority, and review proposed actions.' },
  { path: '09-continuous-engineering', title: 'Continuous Engineering', summary: 'Follow revision-bound checks, interpret automated feedback, and identify the engineering decisions still open.' },
] as const;
