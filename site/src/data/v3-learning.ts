import { z } from 'zod';

const text = z.string().trim().min(1);
const option = z.object({
  text,
  feedback: text,
  correct: z.literal(true).optional(),
}).strict();

const question = z.object({
  id: z.string().regex(/^[a-z][a-z0-9-]*$/),
  prompt: text,
  options: z.array(option).min(2),
}).strict().refine(q => q.options.filter(answer => answer.correct).length === 1, {
  message: 'Each question needs exactly one correct option',
}).refine(q => new Set(q.options.map(answer => answer.text)).size === q.options.length, {
  message: 'Answer choices must be distinct',
});

export const quizSchema = z.array(question).min(1).refine(
  questions => new Set(questions.map(q => q.id)).size === questions.length,
  { message: 'Question IDs must be unique in the chapter' },
);
export type Quiz = z.infer<typeof quizSchema>;

const sources = import.meta.glob('../../../project/v3/learning/quizzes/*.json', {
  eager: true, import: 'default',
});
export const chapterQuizzes = new Map<string, Quiz>();
for (const [path, source] of Object.entries(sources)) {
  const id = path.slice(path.lastIndexOf('/') + 1, -'.json'.length);
  const result = quizSchema.safeParse(source);
  if (!result.success) throw new Error(`Invalid question data in ${path}: ${result.error.message}`);
  chapterQuizzes.set(id, result.data);
}

export function chapterSections(html: string, activities: readonly string[]) {
  const missing = new Set(activities);
  // Astro has already resolved links and images. A standalone Markdown comment
  // survives compilation; the same text in a fenced example is HTML-escaped.
  const sections = html.split(/<!--\s*interactive:\s*([\w-]+)\s*-->/g).map((content, index) => {
    if (index % 2 === 0) return { kind: 'prose' as const, content };
    if (!missing.delete(content)) throw new Error(`Unexpected or repeated activity: ${content}`);
    return { kind: 'activity' as const, content };
  });
  if (missing.size) throw new Error(`Missing chapter activity: ${[...missing].join(', ')}`);
  return sections;
}
