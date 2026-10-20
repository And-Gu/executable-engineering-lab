# Milestone 3 trace preparation — verification

Checked 2026-10-20. Planning PR #6 is merged as `19c23e6c882acb00fb5321945014b74e0303ff7b`. This increment prepares a reusable definition view; it does not complete or publish Chapter 3.

## Change and evidence

The reference page's existing eight relationship rows now come from a pure `projectRelationships` helper. It validates the complete definition set before returning roles, record-relative field paths and actual source/target IDs. It introduces no traversal, impact engine, execution record or calculation. Existing labels, HTML structure and styling are preserved.

`npm run check` passes: 86 tests across six files, source/proposal validation, zero Astro/TypeScript errors/warnings/hints and six static routes. Twelve new cases cover the eight supported bindings, rejection of each broken reference, rejection of unsupported fields and both existing proposal fixtures. The proposal cases demonstrate that identical relationship connectivity can coexist with different evaluated definitions; connectivity alone establishes neither evidence applicability nor approval.

Built HTML inspection confirms eight relationship rows and sixteen source/target links resolving to page anchors. The helper has no filesystem dependency or alternate coverage formula. Canonical YAML, the model/evaluator, model version and reference-test assertions are unchanged.

## Limits and remaining work

This is a bounded refactor of an existing static table. No controls, layout, navigation or client behavior change; keyboard/mobile browser smoke review was not repeated. Prior Chapter 2 manual review remains documented separately and is not a comprehensive accessibility audit.

Chapter 3 prose, contextual trace/experiment explanations, quiz, lesson navigation and public release verification remain to be implemented. No execution evidence is loaded or displayed by this helper. It intentionally cannot determine general change impact, validate physical assumptions or transfer prior evidence to a proposal. Existing `analyzeProposal` tests continue to verify threshold/radius calculation behavior; the lesson can explain those cases without a new impact classifier.
