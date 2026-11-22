# Learning activities in V3 manuscripts

The [V3 chapter route](../../../site/src/pages/learn/v3/%5Bslug%5D.astro) inserts activities into the published Markdown during the build. Each chapter issue owns its questions, their placement and its reading links.

## Knowledge checks

Use the stable `id` from the manuscript frontmatter as the filename in `quizzes/`. Each question has an ID, a prompt and distinct choices with feedback for each choice. Set `"correct": true` on one choice. The [Chapter 3 questions](quizzes/eel-v3-ch03-planning.json) show the format.

Place `<!-- interactive: chapter-quiz -->` on its own line, with a blank line before and after it, where readers have enough information to reason about the questions. The build checks the question data and the placement marker. Chapter 5 uses `<!-- interactive: intersection-model -->` for the arrival experiment.

## Cards

Use a Markdown blockquote with a bold first paragraph containing either `Concept` or `Explore further`. A concept card explains a distinction at the point of need. An optional reading card names what a linked source lets the reader inspect.

```markdown
> **Explore further**
>
> Inspect the [arrival and service rules](../../case-study/model-inputs-v1.json) used in the comparison.
```

Use relative Markdown links from the manuscript. The V3 link processor resolves current chapter links under the Pages base path and other source files in GitHub. Run the repository's preview check to exercise the chapter, quiz and model tests together.
